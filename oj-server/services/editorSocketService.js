var redisClient = require("../module/redisClient");
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    // Redis namespace
    var sessionPath = '/temp_sessions';

    // Create collabration sessions;
    var collaborations = {};

    // Map socketId to sessionId;
    var socketIdToSessionId = {};

    io.on('connection', (socket) => {
        let sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        if (sessionId in collaborations) {
            collaborations[sessionId]['participants'].push(socket.id);
        } else {
            // If not in memory, checke if it's in redis
            redisClient.get(sessionPath + '/' + sessionId, function(data) {
                if (data) {
                    console.log("Session terminated previously, get it from redis.");

                    collaborations[sessionId] = {
                        'cachedInstructions': JSON.parse(data),
                        'participants': []
                    }
                } else {
                    console.log("Creating a new session.");
                    collaborations[sessionId] = {
                        'cachedInstructions': [],
                        'participants': []
                    }
                }
                collaborations[sessionId]['participants'].push(socket.id);
            });
        }

        

        // socket event: "change"
        socket.on('change', delta => {
            console.log("change " + socketIdToSessionId[socket.id] + " " + delta);
            let sessionId = socketIdToSessionId[socket.id];

            if (sessionId in collaborations) {
                collaborations[sessionId]['cachedInstructions'].push(["change", delta, Date.now()]);
            }

            if (sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                for (let i = 0; i < participants.length; i++) {
                    // Skip yourself;
                    if (socket.id != participants[i]) {
                        io.to(participants[i]).emit('change', delta);
                    }
                }
            } else {
                console.log("Cannot tie socket id to any collabration.");
            }
        })

        // socket event: "restorebuffer"
        socket.on('restoreBuffer', () => {
            console.log("RestoreBuffer...");

            let sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                let instructions = collaborations[sessionId]['cachedInstructions'];
                
                for (let i = 0; i < instructions.length; i++) {
                    socket.emit(instructions[i][0], instructions[i][1]);
                }
            } else {
                console.log("Cannot find any collaboration for this session.");
            }
        });

        // socket event: "disconnect"
        socket.on('disconnect', function() {
            let sessionId = socketIdToSessionId[socket.id];
            console.log("disconnect session" + sessionId, "socket id: " + socket.id);

            let foundAndRemoved = false;

            if (sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                let index = participants.indexOf(socket.id);

                if (index >= 0) {
                    participants.splice(index, 1);
                    foundAndRemoved = true;

                    // If the last participant leaves, store code into redis
                    if (participants.length == 0) {
                        console.log("Last participant is leaving...");

                        let key = sessionPath + "/" + sessionId;
                        let value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);

                        redisClient.set(key, value, redisClient.redisPrint);

                        redisClient.expire(key, TIMEOUT_IN_SECONDS);

                        delete collaborations[sessionId];
                    }
                }
            }

            if (!foundAndRemoved) {
                console.log("Warning: cannot find sessionid in collaborations.");
            }
        });
    })
}
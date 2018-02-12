module.exports = function(io) {
    // Create collabration sessions;
    var collaborations = {};

    // Map socketId to sessionId;
    var socketIdToSessionId = {};

    io.on('connection', (socket) => {
        let sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        // If sesionId doesn't exist, create a new sessionId.
        if (!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                'participants': []
            };
        }

        collaborations[sessionId]['participants'].push(socket.id);

        socket.on('change', delta => {
            console.log("change " + socketIdToSessionId[socket.id] + " " + delta);
            let sessionId = socketIdToSessionId[socket.id];
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
    })
}
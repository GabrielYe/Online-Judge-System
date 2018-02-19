# Online-Judge-System
This is a online judge system used to practice algorithm problems. Users could work in the same editor simultaneously.

## Introduction to the system:

* Used `Angular2+` and `Bootstrap` for front-end.
* Designed `RESTful` APIs. Utilized `NodeJS` + `ExpressJS` to create a efficient back-end server.
* Deployed `MongoDB` as a database to store the problems list and code history.
* Utilized `Redis` as a cache system to sotre users' uncompleted code.
* Used `socket.io` to implement real-time collaborative editing. Several users could work on the same problem simultaneously.
* Deployed `Docker` as a executor to compile and run users' code. Also the execution is isolated by `Docker` for security consideration.
* Deployed several executors to improve system's performace. 
* Configured `Nginx` as load balancer to improve the distribution of workloads.

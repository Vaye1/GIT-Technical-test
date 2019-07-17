require("babel-register");
const ServiceManager = require('iot-cloud-fs');
const SuperServer = require('iot-cloud-core').SERVER.SuperServer;
const path = require('path');

let config = require(path.resolve(__dirname,"config"));
let server = new SuperServer(config);
server.start();

ServiceManager.init([
    {
        type:"app",
        appId:"10002",
        host:"0.0.0.0",
        port:3002
    }
]);

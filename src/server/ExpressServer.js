import express from "express"
/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
class ExpressServer {
  constructor(hostname =process.env.LOCAL_HOST, port= process.env.DEFAULT_PORT) {
    this.serverName = 'Express Server';
    this.hostname = hostname;
    this.port = port;

    //Auto Start Server
    this.initServer()
    
  }

  initServer=()=> {
    //Create Server
    this.server = express()
    //Start Listening
    this.server.listen(this.port, () => {
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
    })
  }
}

//EXPORT MODULE
module.exports = ExpressServer


# Node JS With ES6
> ## How to Set up & use [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) in Express JS & Node JS Server.

## How to Setup Node JS Server with ES6 

        import NodeServer from "./server/NodeServer"
        import ExpressServer from "./server/ExpressServer"
        import dotenv from "dotenv"
        dotenv.config()

        // Start Node Server
        const WebServer = new NodeServer();

        //Start Express JS Server
        const expressServer = new ExpressServer();


--------------------------------------

## Build Steps
> node -v
> mkdir nodeapp && cd nodeapp && npm init -y
> npm install --save-dev @babel/core @babel/cli

Add __src__ folder in your project's root directory
> mkdir src 

Create Index.js in __src__ folder as starting point for Server

Create __.babelrc__ file in your project's root directory
In __.babelrc__ add the following code
      
        {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-proposal-class-properties"] 
        }

Install Class Properties Plugin
> npm install @babel/preset-env --save-dev 
> npm install --save-dev @babel/plugin-proposal-class-properties
> npm install --save express 
> npm run build

## Watch File change with Node Monitor
> npm i -d nodemon
> npm install rimraf --save-dev

Update __package.json__ by adding following line for precompiling ES6 and allowing nodemon to restart server when file changes

        "scripts": {
        +   "build": "babel src -d dist"
        +   "start": "npm run build && node dist",
        +   "restart": "rimraf dist && npm run start",
        +   "dev": "nodemon --exec npm run restart"
        }

> Create __nodemon.json__ file in your project's root directory

Add src folder in watchlist by adding following code in __nodemon.json__
        {
        "watch": ["src"]    
        }

### Finally Run the project
 > npm run dev       
# Node JS With ES6

## How to Setup Node JS Server with [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [Babel](https://babeljs.io/docs/en/), & __[Nodemon](https://www.npmjs.com/package/nodemon)__

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
1. Install Node js and validate if [Node JS](https://nodejs.org/en/download/) is installed properly
>  __`node -v`__

2. Create project directory and init Node package
>  __`mkdir nodeapp && cd nodeapp && npm init -y`__

3. Create a **`src`** folder in your project's root directory to keep server code.
> __`mkdir src`__

4. Create `Index.js` in **`src`** folder as starting point for Server

## Set up Babel for precompiling ES6 into JavaScript
Babel is a toolchain that is mainly used to convert `ECMAScript 2015+` code into a backwards compatible version of `JavaScript` in current and older browsers or environments.

1. Install [Babel](https://babeljs.io/setup#installation)
>  __`npm install --save-dev @babel/core @babel/cli`__

2. Install [Babel Preset](https://babeljs.io/docs/en/presets) & [Class Properties Plugin](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

> __`npm install @babel/preset-env --save-dev`__ <br/>
> __`npm install --save-dev @babel/plugin-proposal-class-properties`__

__@babel/preset-env__ Allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

__@babel/plugin-proposal-class-properties__ transform **`ES6 class`** synthecic sugar into JavaScript `__Prototype__` 


3. Create **`.babelrc`** file in your project's root directory & add the following code in  **`.babelrc`** 
      
        {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-proposal-class-properties"] 
        }

## Watch File change with Node Monitor

1. Install __[Nodemon](https://www.npmjs.com/package/nodemon)__
>   __`npm i -d nodemon`__ <br/>
>   __`npm install rimraf --save-dev`__

_Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected._

2. Update __`package.json`__ by adding following line for precompiling ES6 and allowing nodemon to restart server when file changes

```diff
 "scripts": {
+ "build": "babel src -d dist"
+ "start": "npm run build && node dist",
+ "restart": "rimraf dist && npm run start",
+ "dev": "nodemon --exec npm run restart"
}
```

3. Create __`nodemon.json`__ file in your project's root directory

4. Add src folder in watchlist by adding following code in __`nodemon.json`__

        {"watch": ["src"]}

## Finally Run the project
 > __`npm run dev`__       

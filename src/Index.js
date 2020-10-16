
import NodeServer from "./server/NodeServer"
import ExpressServer from "./server/ExpressServer"
import dotenv from "dotenv"
dotenv.config()

const WebServer = new ExpressServer();

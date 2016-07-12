/// <reference path="../../../typings/node/node.d.ts" />
import * as Path from "path";
import HttpServer from "./lib/server/HttpServer";
import PropertyManager from "./lib/utils/properties/PropertyManager";

/**
 * NodeCrawlerStarter
 */
class NodeCrawlerStarter {

    private static propertyManager : PropertyManager = new PropertyManager(Path.normalize(__dirname + "/resources"));
    
    public static main() : void {
        let port : number = this.propertyManager.getPropertyAsNumber("SERVER_PORT");
        let httpServer : HttpServer = new HttpServer(port);
        let started : boolean = httpServer.start();
        if (started) {
            console.log("Application Server started and listening at port " + port);
        }
    }
}
NodeCrawlerStarter.main();

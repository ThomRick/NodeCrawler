/// <reference path="../../../typings/node/node.d.ts" />
import * as Path from "path";

import IHttpServer from "./lib/utils/http/server/IHttpServer";
import HttpServer from "./lib/utils/http/server/impl/HttpServer";
import HttpServerConfiguration from "./lib/utils/http/server/configuration/HttpServerConfiguration";
import IRequestRouter from "./lib/utils/http/router/IRequestRouter";

import PropertyManager from "./lib/utils/properties/PropertyManager";

import Api from "./lib/web-services/Api";

/**
 * NodeCrawlerStarter
 */
class NodeCrawlerStarter {

    /** Property manager to configure application */
    private static propertyManager: PropertyManager = new PropertyManager(Path.normalize(__dirname + "/resources"));
    
    /**
     * Main method to start the application
     */
    public static main(): void {
        let httpServer: IHttpServer = new HttpServer();
        NodeCrawlerStarter.configureServer(httpServer);
        NodeCrawlerStarter.configureRouter(httpServer);
        NodeCrawlerStarter.deployApi(httpServer);
        let started: boolean = httpServer.start();
        if (started) {
            let httpServerConfiguration: HttpServerConfiguration = httpServer.getConfiguration();
            console.log("Application Server started and listening at port " + httpServerConfiguration.port);
        }
    }

    /**
     * Configure HttpServer
     */
    private static configureServer(httpServer: IHttpServer): void {
        let port: number = NodeCrawlerStarter.propertyManager.getPropertyAsNumber("SERVER_PORT");
        httpServer.configure({
            port: port
        });
    }

    /**
     * Configure Router
     */
    private static configureRouter(httpServer: IHttpServer): void {
        let requestRouter: IRequestRouter = httpServer.getRouter();
        let staticFilePath: string = NodeCrawlerStarter.propertyManager.getProperty("ROUTER_STATIC_FILES");
        let apiPathPrefix: string = NodeCrawlerStarter.propertyManager.getProperty("ROUTER_API_PREFIX");
        requestRouter.configure({
            staticFilePath: Path.normalize(__dirname + "/resources/public"),
            apiPathPrefix: "/api"
        });
    }

    /**
     * Deploy the API services
     */
    private static deployApi(httpServer: IHttpServer): void {
        let requestRouter: IRequestRouter = httpServer.getRouter();
        let api: Api = new Api();
        api.addApi(requestRouter);
    }
}
NodeCrawlerStarter.main();

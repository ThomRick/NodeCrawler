/// <reference path="../../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";
import * as Path from "path";
import * as Url from "url";
import * as FileSystem from "fs";

import IHttpServer from "../IHttpServer";
import HttpServerConfiguration from "../configuration/HttpServerConfiguration";

import IRequestRouter from "../../router/IRequestRouter";
import RequestRouter from "../../router/impl/RequestRouter";

import IRequestHandler from "../../handler/IRequestHandler";
import HttpServerRequestHandler from "../handlers/HttpServerRequestHandler";

/**
 * HttpServer
 */
class HttpServer implements IHttpServer {
    
    /** instance of server */
    private server: Http.Server;
    /** server port */
    private port: number;
    /** server request router instance */
    private static router: IRequestRouter = new RequestRouter();

    /**
     * Constructor
     */
    constructor() {}

    /**
     * start
     */
    public start(): boolean {
        let httpServerRequestHandler: IRequestHandler = new HttpServerRequestHandler(HttpServer.router);
        this.server = Http.createServer(httpServerRequestHandler.handle);
        this.server.listen(this.port);
        return true;
    }

    /**
     * configure
     */
    public configure(configuration: HttpServerConfiguration): void {
        this.port = configuration.port;
    }

    /**
     * setRouter
     */
    public getRouter(): IRequestRouter {
        return HttpServer.router;
    }

    /**
     * getConfiguration
     */
    public getConfiguration(): HttpServerConfiguration {
        return {
            port: this.port
        };
    }

    /**
     * requestHandler
     * 
     * @param serverRequest
     * @param serverResponse
     */
    private requestHandler(serverRequest : Http.ServerRequest, serverResponse : Http.ServerResponse): void {
        console.log("Receive an HTTP request");
        let clientFilePath: string = Path.join(__dirname, "../../resources/public");
        let requestPath: string = Url.parse(serverRequest.url).pathname;
        let filePath: string;
        if (requestPath === "/") {
            filePath = Path.join(clientFilePath, "/index.html");
        } else {
            filePath = Path.join(clientFilePath, requestPath);
        }
        console.log("Static file requested : ", filePath);
        FileSystem.exists(filePath, exist => {
            if (exist) {
                let readStream: FileSystem.ReadStream = FileSystem.createReadStream(filePath);
                serverResponse.writeHead(200);
                readStream.pipe(serverResponse);
            } else {
                serverResponse.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                serverResponse.write("404 Not Found\n");
                serverResponse.end();
            }
        });
    }
}

export default HttpServer;
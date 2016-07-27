/// <reference path="../../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";
import * as Path from "path";
import * as Url from "url";
import * as FileSystem from "fs";

import IRequestHandler from "../../handler/IRequestHandler";

/**
 * StaticFileRequestHandler
 */
class StaticFileRequestHandler implements IRequestHandler {
    
    /** root file path for static files */
    private static staticRootFilePath: string;

    /**
     * Constructor
     */
    constructor(staticRootFilePath: string) {
        StaticFileRequestHandler.staticRootFilePath = staticRootFilePath;
    }

    /**
     * handle
     */
    public handle(serverRequest: Http.IncomingMessage, serverResponse: Http.ServerResponse) {
        // console.log("[" + new Date().toJSON()+ "] - StaticFileRequestHandler - Receive a request");
        let requestPath: string = Url.parse(serverRequest.url).pathname;
        let filePath: string;
        if (requestPath === "/") {
            filePath = Path.join(StaticFileRequestHandler.staticRootFilePath, "/index.html");
        } else {
            filePath = Path.join(StaticFileRequestHandler.staticRootFilePath, requestPath);
        }
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

export default StaticFileRequestHandler;
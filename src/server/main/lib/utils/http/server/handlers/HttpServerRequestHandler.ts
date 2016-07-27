/// <reference path="../../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";
import * as Url from "url";

import IRequestHandler from "../../handler/IRequestHandler";

import IRequestRouter from "../../router/IRequestRouter";
import RequestRouterConfiguration from "../../router/configuration/RequestRouterConfiguration";

import StaticFileRequestHandler from "./StaticFileRequestHandler";

/**
 * HttpServerRequestHandler
 */
class HttpServerRequestHandler implements IRequestHandler {
    
    /** instance of request handler router */
    private static router: IRequestRouter;
    /** instance of request handler to serve static files */
    private static staticFileRequestHandler: IRequestHandler;

    /**
     * Constructor
     */
    constructor(router: IRequestRouter) {
        HttpServerRequestHandler.router = router;
        let requestRouterConfiguration = HttpServerRequestHandler.router.getConfiguration();
        HttpServerRequestHandler.staticFileRequestHandler = new StaticFileRequestHandler(requestRouterConfiguration.staticFilePath);
    }

    /**
     * handle
     */
    public handle(serverRequest: Http.IncomingMessage, serverResponse: Http.ServerResponse) {
        let requestRouterConfiguration: RequestRouterConfiguration = HttpServerRequestHandler.router.getConfiguration();
        let apiPathPrefix = requestRouterConfiguration.apiPathPrefix;
        let requestPath: string = Url.parse(serverRequest.url).pathname;
        console.log("[" + new Date().toJSON()+ "] - HttpServerRequestHandler - Receive a request: ", requestPath);
        if (requestPath.indexOf(apiPathPrefix) === -1) {
            HttpServerRequestHandler.staticFileRequestHandler.handle(serverRequest, serverResponse);
        } else {
            let requestMethod: string = serverRequest.method;
            HttpServerRequestHandler.router.route(requestMethod, requestPath, serverRequest, serverResponse);
        }
    }
}

export default HttpServerRequestHandler;
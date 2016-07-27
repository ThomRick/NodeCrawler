/// <reference path="../../../../../../../../typings/node/node.d.ts" />
import * as Http from "http";
import ApiMap from "../../api/ApiMap";
import IRequestRouter from "../IRequestRouter";
import IRequestHandler from "../../handler/IRequestHandler";
import RequestRouterConfiguration from "../configuration/RequestRouterConfiguration";

/**
 * RequestRouter
 */
class RequestRouter implements IRequestRouter {

    /** api map */
    private apiMap: ApiMap;
    /** api request path prefix */
    private apiPathPrefix: string;
    /** static file root folder path */
    private staticFilePath: string;
    
    /**
     * Constructor
     */
    constructor() {
        this.apiMap = new ApiMap();
    }
    
    /**
     * post
     */
    public post(path: string, handler: IRequestHandler): void {
        this.apiMap.addPostApiHandler(path, handler);
    }

    /**
     * get
     */
    public get(path: string, handler: IRequestHandler): void {
        this.apiMap.addGetApiHandler(path, handler);
    }

    /**
     * put
     */
    public put(path: string, handler: IRequestHandler): void {
        this.apiMap.addPutApiHandler(path, handler);
    }

    /**
     * delete
     */
    public delete(path: string, handler: IRequestHandler): void {
        this.apiMap.addDeleteApiHandler(path, handler);
    }

    /**
     * route
     */
    public route(method: string, path: string, serverRequest: Http.IncomingMessage, serverResponse: Http.ServerResponse): void {
        let handler: IRequestHandler = null;
        switch (method) {
            case "POST":
                handler = this.apiMap.getPostApiHandler(path);
                break;
            case "GET":
                handler = this.apiMap.GetGetApiHandler(path);
                break;
            case "PUT":
                handler = this.apiMap.getPutApiHandler(path);
                break;
            case "DELETE":
                handler = this.apiMap.getDeleteApiHandler(path);
                break;        
        }
        handler.handle(serverRequest, serverResponse);
    }

    /**
     * configure
     */
    public configure(configuration: RequestRouterConfiguration): void {
        this.apiPathPrefix = configuration.apiPathPrefix;
        this.staticFilePath = configuration.staticFilePath;
    }

    /**
     * getApiMap
     */
    public getApiMap(): ApiMap {
        return this.apiMap;
    }

    /**
     * getConfiguration
     */
    public getConfiguration(): RequestRouterConfiguration {
        return {
            staticFilePath: this.staticFilePath,
            apiPathPrefix: this.apiPathPrefix
        };
    }

}

export default RequestRouter;
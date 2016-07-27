import Map from "../../map/Map";
import HashMap from "../../map/impl/HashMap";
import IRequestHandler from "../handler/IRequestHandler";

/**
 * ApiMap
 */
class ApiMap {

    /** api path - handler for post requests */
    private postApi: Map<string, IRequestHandler>;
    /** api path - handler for get requests */
    private getApi: Map<string, IRequestHandler>;
    /** api path - handler for put requests */
    private putApi: Map<string, IRequestHandler>;
    /** api path - handler for delete requests */
    private deleteApi: Map<string, IRequestHandler>;

    /**
     * Constructor
     */
    constructor() {
        this.postApi = new HashMap<string, IRequestHandler>();
        this.getApi = new HashMap<string, IRequestHandler>();
        this.putApi = new HashMap<string, IRequestHandler>();
        this.deleteApi = new HashMap<string, IRequestHandler>();
    }

    /**
     * addPostApiHandler
     * 
     * @param path
     * @param handler
     * @return ApiMap instance
     */
    public addPostApiHandler(path: string, handler: IRequestHandler): ApiMap {
        this.postApi.put(path, handler);
        return this;
    }

    /**
     * getPostApiHandler
     * 
     * @param path
     * @return IRequestHandler
     */
    public getPostApiHandler(path: string): IRequestHandler {
        return this.postApi.get(path);
    }

    /**
     * addGetApiHandler
     */
    public addGetApiHandler(path: string, handler: IRequestHandler): ApiMap {
        this.getApi.put(path, handler);
        return this;
    }

    /**
     * GetGetApiHandler
     */
    public GetGetApiHandler(path: string): IRequestHandler {
        return this.getApi.get(path);
    }

    /**
     * addPutApiHandler
     */
    public addPutApiHandler(path: string, handler: IRequestHandler): ApiMap {
        this.putApi.put(path, handler);
        return this;
    }

    /**
     * getPutApiHandler
     */
    public getPutApiHandler(path: string): IRequestHandler {
        return this.putApi.get(path);
    }

    /**
     * addDeleteApiHandler
     */
    public addDeleteApiHandler(path: string, handler: IRequestHandler): ApiMap {
        this.deleteApi.put(path, handler);
        return this;
    }

    /**
     * getDeleteApiHandler
     */
    public getDeleteApiHandler(path: string): IRequestHandler {
        return this.deleteApi.get(path);
    }

}

export default ApiMap;
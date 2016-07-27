import IRequestHandler from "../../utils/http/handler/IRequestHandler";
import IRequestRouter from "../../utils/http/router/IRequestRouter";

import DiscussionFileRequestHandler from "./handlers/DiscussionFileRequestHandler";

/**
 * DiscussionApi
 */
class DiscussionApi {

    private discussionFileRequestHandler: IRequestHandler;
    
    /**
     * Constructor
     */
    constructor() {
        this.discussionFileRequestHandler = new DiscussionFileRequestHandler();
    }

    /**
     * addApi
     */
    public addApi(router: IRequestRouter): void {
        router.post("/api/discussion/file", this.discussionFileRequestHandler);        
    }
}

export default DiscussionApi;
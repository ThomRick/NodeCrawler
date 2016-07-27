import IRequestRouter from "../utils/http/router/IRequestRouter";
import DiscussionApi from "./discussion/DiscussionApi";

/**
 * Api
 */
class Api {

    /** discussion api services */
    private discussionApi: DiscussionApi = new DiscussionApi();

    /**
     * Constructor
     */
    constructor() {}

    /**
     * addApi
     */
    public addApi(router: IRequestRouter): void {
        this.discussionApi.addApi(router);
    }

}

export default Api;
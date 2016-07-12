/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import FBFeedObject from "./FBFeedObject";
import FBFeedPaging from "./FBFeedPaging";

/**
 * FBFeedObject
 */
interface FBFeedResponse extends FBResponseObject {
    data: Array<FBFeedObject>;
    paging: FBFeedPaging;
}

export default FBFeedResponse;
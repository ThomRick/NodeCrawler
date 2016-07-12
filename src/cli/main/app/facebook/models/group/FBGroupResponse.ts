/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import FBGroup from "./FBGroup";
import FBPaging from "./FBGroupPaging";

/**
 * FBGroupResponse
 */
interface FBGroupResponse extends FBResponseObject {
    data: Array<FBGroup>;
    paging: FBPaging;
}

export default FBGroupResponse;
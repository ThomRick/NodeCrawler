/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import FBComment from "./FBComment";

interface FBCommentResponse extends FBResponseObject {
    data: Array<FBComment>;
}

export default FBCommentResponse;
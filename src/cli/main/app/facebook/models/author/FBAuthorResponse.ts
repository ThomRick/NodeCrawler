/// <reference path="../../../../../../../typings/fbsdk/fbsdk.d.ts" />
import FBAuthor from "./FBAuthor";

/**
 * FBAuthorResponse
 */
interface FBAuthorResponse extends FBResponseObject {
    from: FBAuthor;
    id: string;
}

export default FBAuthorResponse;
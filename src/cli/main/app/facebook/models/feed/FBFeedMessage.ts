import FBFeedObject from "./FBFeedObject";
import FBAuthor from "../author/FBAuthor";

/**
 * FBFeedMessage
 */
interface FBFeedMessage extends FBFeedObject {
    message: string;
    from: FBAuthor;
}

export default FBFeedMessage;
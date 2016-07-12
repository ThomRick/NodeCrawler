import FBFeedObject from "./FBFeedObject";
import FBAuthor from "../author/FBAuthor";

/**
 * FBFeedStory
 */
interface FBFeedStory extends FBFeedObject {
    story: string;
    from: FBAuthor;
}

export default FBFeedStory;
import FBAuthor from "../author/FBAuthor";

/**
 * FBFeedObject
 */
interface FBFeedObject {
    id: string;
    message?: string;
    story?: string;
    from: FBAuthor;
}

export default FBFeedObject;
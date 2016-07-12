import FBAuthor from "../author/FBAuthor";

/**
 * FBComment
 */
interface FBComment {
    created_time: string;
    from: FBAuthor;
    message: string;
    id: string;
}

export default FBComment;
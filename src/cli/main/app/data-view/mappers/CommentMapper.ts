import Comment from "../models/Comment";

import FBComment from "../../facebook/models/comment/FBComment";

/**
 * CommentMapper
 */
class CommentMapper {
    constructor() {}

    /**
     * mappFrom
     */
    public mappFrom(fbComment: FBComment): Comment {
        return {
            id: fbComment.id,
            author: fbComment.from.name,
            message: fbComment.message
        };
    }
}

export default CommentMapper;
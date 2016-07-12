import FBFeedMessage from "../../facebook/models/feed/FBFeedMessage";
import Post from "../models/Post";
import Comment from "../models/Comment";
/**
 * PostMapper
 */
class PostMapper {
    constructor() {}

    /**
     * mappFrom
     */
    public mappFrom(fbFeedMessage: FBFeedMessage): Post {
        return {
            id: fbFeedMessage.id,
            title: fbFeedMessage.message,
            author: fbFeedMessage.from.name,
            comments: new Array<Comment>()
        };
    }
}

export default PostMapper;
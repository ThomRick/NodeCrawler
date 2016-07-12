import Comment from "./Comment";

/**
 * Post
 */
interface Post {
    id: string;
    author: string;
    title: string;
    comments: Array<Comment>;
}

export default Post;
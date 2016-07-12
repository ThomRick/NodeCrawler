import Post from "../models/Post";
import Comment from "../models/Comment";

/**
 * PostBuilder
 */
class PostBuilder {

    private id: string = "";
    private author: string = "";
    private title: string = "";
    private comments: Array<Comment> = [];
    
    constructor() {}

    /**
     * addId
     */
    public addId(id: string): PostBuilder {
        this.id = id;
        return this;
    }

    /**
     * addAuthor
     */
    public addAuthor(author: string): PostBuilder {
        this.author = author;
        return this;
    }

    /**
     * addTitle
     */
    public addTitle(title: string): PostBuilder {
        this.title = title;
        return this;
    }

    /**
     * addComment
     */
    public addComment(comment: Comment): PostBuilder {
        this.comments.push(comment);
        return this;
    }

    /**
     * build
     */
    public build(): Post {
        let post: Post = {
            id: this.id,
            author: this.author,
            title: this.title,
            comments: this.comments
        };
        return post;
    }
}

export default PostBuilder;
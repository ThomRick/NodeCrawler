import FBFeedResponse from "../../facebook/models/feed/FBFeedResponse";
import FBFeedObject from "../../facebook/models/feed/FBFeedObject";
import FBFeedMessage from "../../facebook/models/feed/FBFeedMessage";

/**
 * FBFeedMessageFilter
 */
class FBFeedMessageFilter {
    constructor() {}

    /**
     * doFilter
     */
    public doFilter(fbFeedObjects: Array<FBFeedObject>): Array<FBFeedMessage> {
        let fbFeedMessages: Array<FBFeedMessage> = [];
        for (var i = 0; i < fbFeedObjects.length; i++) {
            let fbFeedObject: FBFeedObject = fbFeedObjects[i];
            this.addFBFeedMessage(fbFeedMessages, fbFeedObject);
        }
        return fbFeedMessages;
    }

    private addFBFeedMessage(fbFeedMessages: Array<FBFeedMessage>, fbFeedObject: FBFeedObject): void {
        if (fbFeedObject.message !== undefined) {
            let fbFeedMessage: FBFeedMessage = this.convertTo(fbFeedObject);
            fbFeedMessages.push(fbFeedMessage);
        }        
    }

    private convertTo(fbFeedObject: FBFeedObject): FBFeedMessage {
        return {
            id: fbFeedObject.id,
            message: fbFeedObject.message,
            from: fbFeedObject.from
        };
    }
}

export default FBFeedMessageFilter;
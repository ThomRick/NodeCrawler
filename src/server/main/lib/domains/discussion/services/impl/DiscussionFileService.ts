import IDiscussionFileService from "../IDiscussionFileService";
import IMessageFileService from "../IMessageFileService";
import Discussion from "../../models/Discussion";
import Message from "../../models/Message";

/**
 * DiscussionFileService
 */
class DiscussionFileService implements IDiscussionFileService {
    
    /** template to build content */
    private template: string;
    /** service to build message content */
    private messageFileService: IMessageFileService;

    /**
     * Constructor
     */
    constructor(template: string, messageFileService: IMessageFileService) {
        this.template = template;
        this.messageFileService = messageFileService;
    }

    /**
     * buildContent
     * 
     * @param discussion object
     * @return content file for input discussion
     */
    public buildContent(discussion: Discussion): string {
        let content: string = "";
        content = this.template.replace("{{AUTHOR}}", discussion.author);
        content = content.replace("{{DATE}}", discussion.date);
        content = content.replace("{{SUBJECT}}", discussion.subject);
        content = content.replace("{{MESSAGES}}", this.buildMessageContent(discussion.messages));
        return content;        
    }

    private buildMessageContent(messages: Array<Message>): string {
        let messageContent = "";
        for (let i = 0; i < messages.length; i++) {
            let message: Message = messages[i];
            messageContent += this.messageFileService.buildContent(message);
        }
        return messageContent;
    }

}

export default DiscussionFileService;
import IMessageFileService from "../IMessageFileService";

import Message from "../../models/Message";

/**
 * MessageFileService
 */
class MessageFileService implements IMessageFileService {

    /** template to build content */
    private template: string;

    /**
     * Constructor
     */
    constructor(template: string) {
        this.template = template;
    }

    /**
     * buildContent
     */
    public buildContent(message: Message): string {
        let content: string = "";
        content = this.template.replace("{{AUTHOR}}", message.author);
        content = content.replace("{{DATE}}", message.date);
        content = content.replace("{{TEXT}}", message.text);
        return content;
    }
}

export default MessageFileService;
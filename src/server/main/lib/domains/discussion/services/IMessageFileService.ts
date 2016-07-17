import Message from "../models/Message";

/**
 * IMessageFileService
 */
interface IMessageFileService {
    buildContent(message: Message): string;
}

export default IMessageFileService;
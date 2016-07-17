import Discussion from "../models/Discussion";

/**
 * IDiscussionFileService
 */
interface IDiscussionFileService {
    buildContent(discussion: Discussion): string;
}

export default IDiscussionFileService;
import Message from "./Message";

/**
 * Discussion
 */
interface Discussion {
    author: string;
    date: string;
    subject: string;
    messages: Array<Message>;
}

export default Discussion;
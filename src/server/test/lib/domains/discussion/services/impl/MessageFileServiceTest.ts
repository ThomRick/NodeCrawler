/// <reference path="../../../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../../../typings/assert/assert.d.ts" />
import IMessageFileService from "../../../../../../main/lib/domains/discussion/services/IMessageFileService";
import MessageFileService from "../../../../../../main/lib/domains/discussion/services/impl/MessageFileService";

import Message from "../../../../../../main/lib/domains/discussion/models/Message";

import * as Assert from "assert";

describe("MessageFileServiceTest", () => {
    let messageFileServicetemplate: string = "";
    messageFileServicetemplate += "Author: {{AUTHOR}}\n"
    messageFileServicetemplate += "Date: {{DATE}}\n";
    messageFileServicetemplate += "Text: {{TEXT}}\n";
    let messageFileService: IMessageFileService = new MessageFileService(messageFileServicetemplate);
    describe("#buildContent", () => {
        it("should return the right content", (done) => {
            // ARRANGE
            let message: Message = {
                author: "author",
                date: "date",
                text: "text"
            };
            let expected: string = "";
            expected += "Author: author\n"
            expected += "Date: date\n";
            expected += "Text: text\n";
            // ACT
            let result: string = messageFileService.buildContent(message);
            // ASSERT
            Assert.deepEqual(result, expected);
            done();
        });
    });
});

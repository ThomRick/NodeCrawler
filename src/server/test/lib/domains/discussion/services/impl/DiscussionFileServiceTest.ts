/// <reference path="../../../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../../../typings/assert/assert.d.ts" />
import IDiscussionFileService from "../../../../../../main/lib/domains/discussion/services/IDiscussionFileService";
import DiscussionFileService from "../../../../../../main/lib/domains/discussion/services/impl/DiscussionFileService";

import IMessageFileService from "../../../../../../main/lib/domains/discussion/services/IMessageFileService";
import MessageFileService from "../../../../../../main/lib/domains/discussion/services/impl/MessageFileService";

import Discussion from "../../../../../../main/lib/domains/discussion/models/Discussion"; 
import Message from "../../../../../../main/lib/domains/discussion/models/Message";

import * as Assert from "assert";

describe("DiscussionFileServiceTest", () => {
    let messageFileServicetemplate: string = "";
    messageFileServicetemplate += "Author: {{AUTHOR}}\n"
    messageFileServicetemplate += "Date: {{DATE}}\n";
    messageFileServicetemplate += "Text: {{TEXT}}\n";
    messageFileServicetemplate += "---------\n";
    let messageFileService: IMessageFileService = new MessageFileService(messageFileServicetemplate);
    let discussionMessageServiceTemplate: string = "";
    discussionMessageServiceTemplate += "Author: {{AUTHOR}}\n";
    discussionMessageServiceTemplate += "Date: {{DATE}}\n";
    discussionMessageServiceTemplate += "Subject: {{SUBJECT}}\n";
    discussionMessageServiceTemplate += "-----------------------\n"
    discussionMessageServiceTemplate += "{{MESSAGES}}";
    let discussionFileService: IDiscussionFileService = new DiscussionFileService(discussionMessageServiceTemplate, messageFileService);
    describe("#buildContent", () => {
        it("should return the right content", (done) => {
            // ARRANGE
            let discussion: Discussion = {
                author: "author",
                date: "date",
                subject: "subject",
                messages: [{
                    author: "author1",
                    date: "date1",
                    text: "text1"
                }, {
                    author: "author2",
                    date: "date2",
                    text: "text2"
                }, {
                    author: "author3",
                    date: "date3",
                    text: "text3"
                }]
            };
            let expected: string = "";
            expected += "Author: author\n";
            expected += "Date: date\n";
            expected += "Subject: subject\n";
            expected += "-----------------------\n"
            expected += "Author: author1\n"
            expected += "Date: date1\n";
            expected += "Text: text1\n";
            expected += "---------\n";
            expected += "Author: author2\n"
            expected += "Date: date2\n";
            expected += "Text: text2\n";
            expected += "---------\n";
            expected += "Author: author3\n"
            expected += "Date: date3\n";
            expected += "Text: text3\n";
            expected += "---------\n";
            // ACT
            let result: string = discussionFileService.buildContent(discussion);
            // ASSERT
            Assert.deepEqual(result, expected);
            done();
        });
    });
});
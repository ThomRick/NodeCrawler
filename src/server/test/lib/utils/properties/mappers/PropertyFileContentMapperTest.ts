/// <reference path="../../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../../typings/assert/assert.d.ts" />

import PropertyFileContentMapper from "../../../../../main/lib/utils/properties/mappers/PropertyFileContentMapper";
import PropertyFile from "../../../../../main/lib/utils/properties/model/PropertyFile";
import PropertyNode from "../../../../../main/lib/utils/properties/model/PropertyNode";
import PropertyTree from "../../../../../main/lib/utils/properties/model/PropertyTree";
import * as Assert from "assert";

describe("PropertyFileContentMapperTest", function() {

    let propertyFileContentMapper : PropertyFileContentMapper = new PropertyFileContentMapper();
 
    describe("#mappFrom", function() {
        it("should return a PropertyTree with:\n" +
           "\t- 1 node\n" + 
           "\t- the node name is 'test'\n" +
           "\t- the node contains 3 properties", 
        function(done) {
            // ARRANGE
            let propertyFiles : Array<PropertyFile> = [ 
                new PropertyFile("test", buildFileContent()) 
            ];
            // ACT
            let result : PropertyTree = propertyFileContentMapper.mappFrom(propertyFiles);
            // ASSERT
            Assert.equal(result.getPropertyNodes().length, 1);
            let propertyNode : PropertyNode = result.getPropertyNodes()[0];
            Assert.notEqual(propertyNode, undefined);
            Assert.equal(propertyNode.getProperties().length, 3);
            done();
        });
    });
});

function buildFileContent() : string {
    let fileContent = "";
    fileContent += "KEY1=VALUE1\n";
    fileContent += "KEY2=VALUE2\n";
    fileContent += "KEY3=VALUE3\n";
    return fileContent;
}
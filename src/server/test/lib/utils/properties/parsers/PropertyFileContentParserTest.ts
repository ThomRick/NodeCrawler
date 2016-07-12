/// <reference path="../../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../../typings/assert/assert.d.ts" />

import PropertyFileContentParser from "../../../../../main/lib/utils/properties/parsers/PropertyFileContentParser";
import Property from "../../../../../main/lib/utils/properties/model/Property";
import PropertyFile from "../../../../../main/lib/utils/properties/model/PropertyFile";
import * as Assert from "assert";

describe("PropertyFileContentParserTest", function() {
    
    let propertyFileContentParser : PropertyFileContentParser = new PropertyFileContentParser();

    describe("#parse", function() {
        it("should return a list of 3 Property objects with a PropertyFile content without comments", 
        function(done) {
           // ARRANGE
           let propertyFile : PropertyFile = new PropertyFile("test", buildPropertyFileNominalContent());
           // ACT
           let result : Array<Property> = propertyFileContentParser.parse(propertyFile);
           // ASSERT
           assertions(result);
           done(); 
        });
        it("should return a list of 3 Property objects with a PropertyFile content with comments", 
        function(done) {
           // ARRANGE
           let propertyFile : PropertyFile = new PropertyFile("test", buildPropertyFileWithComments());
           // ACT
           let result : Array<Property> = propertyFileContentParser.parse(propertyFile);
           // ASSERT
           assertions(result);
           done(); 
        });     
    });
});

function assertions(result) : void {
    Assert.equal(result.length, 3);
    Assert.equal(result[0].getKey(), "KEY1");
    Assert.equal(result[0].getValue(), "VALUE1");
    Assert.equal(result[1].getKey(), "KEY2");
    Assert.equal(result[1].getValue(), "VALUE2");
    Assert.equal(result[2].getKey(), "KEY3");
    Assert.equal(result[2].getValue(), "VALUE3");
}

function buildPropertyFileNominalContent() : string {
    let propertyFileContent = "";
    propertyFileContent += "KEY1=VALUE1\n";
    propertyFileContent += "KEY2=VALUE2\n";
    propertyFileContent += "KEY3=VALUE3\n";
    return propertyFileContent;
}

function buildPropertyFileWithComments() : string {
    let propertyFileContent = "";
    propertyFileContent += "###########\n";
    propertyFileContent += "KEY1=VALUE1\n";
    propertyFileContent += "###########\n";
    propertyFileContent += "KEY2=VALUE2\n";
    propertyFileContent += "###########\n";
    propertyFileContent += "KEY3=VALUE3\n";
    propertyFileContent += "###########\n";
    return propertyFileContent;
}
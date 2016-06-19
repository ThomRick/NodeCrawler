/// <reference path="../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../typings/sinon/sinon.d.ts" />
/// <reference path="../../../../../../typings/assert/assert.d.ts" />

import Assert = require("assert");
import Sinon = require("sinon");
import Path = require("path");
import FileSystem = require("fs");
import PropertyFile from "../../../../../main/lib/utils/properties/model/PropertyFile";
import PropertyFileScanner from "../../../../../main/lib/utils/properties/scanners/PropertyFileScanner";

describe("PropertyFileScannerTest", function() {

    let propertyFileScanner : PropertyFileScanner = new PropertyFileScanner();

    describe("#scan", function() {
       it("should call FileSystem.readdirSync unless once", 
          function(done) {
          // ARRANGE
          let rootDirPath : string = Path.normalize(__dirname + "/../../../..");
          let spy : Sinon.SinonSpy = Sinon.spy(FileSystem, "readdirSync");
          // ACT
          propertyFileScanner.scan(rootDirPath);          
          // ASSERT
          Assert(spy.called);
          spy.restore();
          done(); 
       });
       it("should call FileSystem.statSync unless once", 
          function(done) {
          // ARRANGE
          let rootDirPath : string = Path.normalize(__dirname + "/../../../..");
          let spy : Sinon.SinonSpy = Sinon.spy(FileSystem, "statSync");
          // ACT
          propertyFileScanner.scan(rootDirPath);          
          // ASSERT
          Assert(spy.called);
          spy.restore();
          done(); 
       });
       it("should return a list with one PropertyFile", 
          function(done) {
          // ARRANGE
          let fileSystemReaddirSyncStub : Sinon.SinonStub = Sinon.stub(FileSystem, "readdirSync", function() {
              return [ "file.properties" ];
          });
          let fileSystemStatSyncStub : Sinon.SinonStub = Sinon.stub(FileSystem, "statSync", function() {
             return {
                 isFile: function() {
                     return true;
                 }
             };
          });
          let fileSystemReadFileSyncStub : Sinon.SinonStub = Sinon.stub(FileSystem, "readFileSync", function() {
              return buildPropertyFileNominalContent(); 
          });
          // ACT
          let result : Array<PropertyFile> = propertyFileScanner.scan("");         
          // ASSERT
          Assert.equal(result.length, 1);
          Assert.equal(result[0].getName(), "file");
          Assert.equal(result[0].getContent(), buildPropertyFileNominalContent());
          fileSystemReaddirSyncStub.restore();
          fileSystemStatSyncStub.restore();
          fileSystemReadFileSyncStub.restore();
          done();
       });
    });
});

function buildPropertyFileNominalContent() : string {
    let propertyFileContent = "";
    propertyFileContent += "KEY1=VALUE1\n";
    propertyFileContent += "KEY2=VALUE2\n";
    propertyFileContent += "KEY3=VALUE3\n";
    return propertyFileContent;
}
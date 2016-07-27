/// <reference path="../../../../../../../typings/node/node.d.ts" />
/// <reference path="../../../../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../../../../typings/assert/assert.d.ts" />
import * as Assert from "assert";

import Map from "../../../../../main/lib/utils/map/Map";
import HashMap from "../../../../../main/lib/utils/map/impl/HashMap";

describe("HashMapTest", function() {
    it("should return toto after put it", function(done) {
        // ARRANGE
        let properties: Map<string, string> = new HashMap<string, string>();
        // ACT
        properties.put("toto", "toto");
        let toto: string = properties.get("toto");
        // ASSERT
        Assert.deepEqual(toto, "toto");
        done();
    });

    it("should return undefined after remove toto", function(done) {
        // ARRANGE
        let properties: Map<string, string> = new HashMap<string, string>();
        // ACT
        properties.put("toto", "toto");
        properties.remove("toto");
        let toto: string = properties.get("toto");
        // ASSERT
        Assert.deepEqual(toto, undefined);
        done();
    });

    it("should return toto and titi after put them", function(done) {
        // ARRANGE
        let properties: Map<string, string> = new HashMap<string, string>();
        // ACT
        properties.put("toto", "toto");
        properties.put("titi", "titi");
        let toto: string = properties.get("toto");
        let titi: string = properties.get("titi");
        // ASSERT
        Assert.deepEqual(toto, "toto");
        Assert.deepEqual(titi, "titi");
        done();
    });

    it("should return toto after removed it and titi", function(done) {
        // ARRANGE
        let properties: Map<string, string> = new HashMap<string, string>();
        // ACT
        properties.put("toto", "toto");
        properties.put("titi", "titi");
        properties.remove("toto");
        let toto: string = properties.get("toto");
        let titi: string = properties.get("titi");
        // ASSERT
        Assert.deepEqual(toto, undefined);
        Assert.deepEqual(titi, "titi");
        done();
    });
});
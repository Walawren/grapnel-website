import { getSpecialValue } from "site";

describe("site", function() {
    describe("getSpecialValue", function() {
        it("returns a special value", function() {
            expect(getSpecialValue()).to.equal(10);
        });
    });
});
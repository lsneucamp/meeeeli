import React from "react";
import {shallow} from "enzyme";
import {ProductDetailsDescription} from "@Components/Basic/ProductDetailsDescription/ProductDetailsDescription";

describe("Basic Components", () => {
    describe("SearchResu", () => {

        it("should render", () => {
            const wrapper = shallow(<ProductDetailsDescription description="desc"/>);
        });
    });
});

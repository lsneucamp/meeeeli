import React from "react";
import {shallow} from "enzyme";
import {Line} from "@Components/Basic/Line";

describe("Basic Components", () => {
    describe("Line", () => {
        it("should render", () => {
            const wrapper = shallow(<Line/>);
        });
    });
});

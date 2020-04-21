import React from "react";
import {shallow} from "enzyme";
import {Logo} from "@Components/Basic";

describe("Basic Components", () => {
    describe("Logo", () => {

        it("should render", () => {
            const wrapper = shallow(<Logo/>);
        });
    });
});

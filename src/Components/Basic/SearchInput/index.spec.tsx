import React from "react";
import {shallow} from "enzyme";
import {SearchInput} from "./index";

describe("Basic Components", () => {
    describe("SearchInput", () => {

        it("should render", () => {
            const wrapper = shallow(<SearchInput/>);
        });
    });
});

import React from "react";
import {shallow} from "enzyme";
import {TextInput} from "@Components/Basic/TextInput/index";

describe("Basic Components", () => {
    describe("TextInput", () => {
        it("should render", () => {
            const wrapper = shallow(<TextInput/>);
        });
    });
});

import React from "react";
import {shallow} from "enzyme";
import {Price} from "@Components/Basic/Price";

describe("Basic Components", () => {
    describe("Price", () => {
        it("should render", () => {
            const wrapper = shallow(<Price value={199} currency="USD"/>);
            expect(wrapper.props().children).toBe("$199.00");
        });
    });
});

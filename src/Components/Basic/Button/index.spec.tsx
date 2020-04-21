import React from "react";
import {shallow} from "enzyme";
import {Button} from "./index";

describe("Basic Components", () => {
    describe("Button", () => {
        it("should render with children prop", () => {
            const wrapper = shallow(<Button>hey</Button>);

            expect(wrapper.props().children).toBe("hey");
        });
    });
});

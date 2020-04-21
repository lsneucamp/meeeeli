import React from "react";
import {shallow} from "enzyme";
import {Container} from "@Components/Basic/Container/Container";

describe("Basic Components", () => {
    describe("Container", () => {
        it("should render with children prop", () => {
            const wrapper = shallow(<Container>hey</Container>);
        });
    });
});

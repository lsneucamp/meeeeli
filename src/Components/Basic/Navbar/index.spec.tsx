import React from "react";
import {shallow} from "enzyme";
import {Navbar} from "@Components/Basic/Navbar/index";

describe("Basic Components", () => {
    describe("Navbar", () => {
        it("should render", () => {
            const wrapper = shallow(<Navbar/>);
        });
    });
});

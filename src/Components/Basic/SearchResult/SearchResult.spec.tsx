import React from "react";
import {SearchResult} from "@Components/Basic/SearchResult/SearchResult";
import {shallow} from "enzyme";

describe("Basic Components", () => {
    describe("SearchResult", () => {

        it("should render", () => {
            const wrapper = shallow(<SearchResult results={[]}/>);
        });
    });
});

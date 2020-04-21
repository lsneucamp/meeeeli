import React from "react";
import {SearchImage} from "@Components/Basic/SearchImage/SearchImage";
import {shallow} from "enzyme";

describe("Basic Components", () => {
    describe("SearchImage", () => {
        it("should render", () => {
            const wrapper = shallow(
                <SearchImage
                    src="http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg"
                    alt="image"
                />
            );
        });
    });
});

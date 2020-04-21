import React from "react";
import {shallow} from "enzyme";
import {SearchResultItem} from "@Components/Basic/SearchResultItem/SearchResultItem";

describe("Basic Components", () => {
    describe("SearchResultItem", () => {

        it("should render", () => {
            const wrapper = shallow(<SearchResultItem
                src="http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg"
                title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                currency="BRL"
                priceValue={9999.99}
                condition="Novo"
                stateName="São Paulo"
                freeShipping
                id="123"
            />);
        });
    });
});

import React from "react";
import {SearchResultItemDescription} from "@Components/Basic/SearchResultItemDescription/SearchResultItemDescription";
import {shallow} from "enzyme";

describe("Basic Components", () => {
    describe("SearchResultItemDescription", () => {
        it("should render", () => {
            const wrapper = shallow(
                <SearchResultItemDescription
                    id="123"
                    title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                    currency="BRL"
                    priceValue={9999.99}
                    condition="Novo"
                    stateName="São Paulo"
                />
            );
        });
    });
});

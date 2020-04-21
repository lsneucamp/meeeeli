// #region Global Imports
import React from "react";
import {shallow} from "enzyme";
import {ProductDetailsInfo} from "@Components/Basic/ProductDetailsInfo/ProductDetailsInfo";


describe("Basic Components", () => {
    describe("ProductDetailsInfo", () => {
        it("should render", () => {
            const wrapper = shallow(
                <ProductDetailsInfo
                    src="http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg"
                    title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                    currency="BRL"
                    priceValue={9999.99}
                    condition="Novo"
                    categoryPath={[{id: "123", name: "123"}]}
                    soldQty={123}
                />
            );
        });
    });
});

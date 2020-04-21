import React from "react";
import {shallow} from "enzyme";
import {ProductDetails} from "@Components/Basic/ProductDetails/ProductDetails";

describe("Basic Components", () => {
    describe("Product Details", () => {
        it("should render", () => {
            const wrapper = shallow(
                <ProductDetails
                    src="http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg"
                    title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                    currency="BRL"
                    priceValue={9999.99}
                    condition="Novo"
                    categoryPath={[{id: "123", name: "123"}]}
                    description="description"
                    soldQty={123}
                />
            );
        });
    });
});

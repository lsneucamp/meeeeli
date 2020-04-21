// #region Global Imports
import React from "react";
import {shallow} from "enzyme";
// #region Local Imports
import {SearchResultItemList} from "@Components/Basic/SearchResultItemList/SearchResultItemList";
// #endregion Global Imports
// #endregion Local Imports

describe("Basic Components", () => {
    describe("SearchResultItemList", () => {
        it("should render", () => {
            const wrapper = shallow(
                <SearchResultItemList
                    results={[
                        {
                            id: "123",
                            src:
                                "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
                            title:
                                "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
                            currency: "BRL",
                            priceValue: 9999.99,
                            condition: "Novo",
                            stateName: "São Paulo",
                        },
                    ]}
                />
            );
        });
    });
});

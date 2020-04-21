import React from "react";
import {Box} from "@Styled/Home";
import styled from "styled-components";
import {SearchResultItem} from "@Components/Basic/SearchResultItem/SearchResultItem";

export default {
    component: SearchResultItem,
    title: "SearchResultItem",
};

const Bg = styled.div`
    width: 100%;
    height: 100%;
    //background-color: #007bff;
`;

export const Default = () => (
    <Bg>
        <Box>
            <SearchResultItem
                src="http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg"
                title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                currency="BRL"
                priceValue={9999.99}
                condition="Novo"
                stateName="São Paulo"
                freeShipping
                id="123"
            />
        </Box>
    </Bg>
);

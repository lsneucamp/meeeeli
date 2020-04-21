import React from "react";
import {Box} from "@Styled/Home";
import styled from "styled-components";
import {SearchResultItemDescription} from "@Components/Basic/SearchResultItemDescription/SearchResultItemDescription";

export default {
    component: SearchResultItemDescription,
    title: "SearchResultItemDescription",
};
const Bg = styled.div`
    width: 100%;
    height: 100%;
`;

export const Default = () => (
    <Bg>
        <Box>
            <SearchResultItemDescription
                id="123"
                title="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
                currency="BRL"
                priceValue={9999.99}
                condition="Novo"
                stateName="São Paulo"
            />
        </Box>
    </Bg>
);

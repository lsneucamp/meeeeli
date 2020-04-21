import React from "react";
import styled from "styled-components";
import {SearchResultItemList} from "@Components/Basic/SearchResultItemList/SearchResultItemList";

export default {
    component: SearchResultItemList,
    title: "SearchResultItemList",
};
const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

const results = [
    {
        id: "1123",
        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    },
    {
        id: "1123",
        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    },
    {
        id: "1123",
        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    }
]

export const Default = () => (
    <Bg>
        <SearchResultItemList results={results}/>
    </Bg>
);

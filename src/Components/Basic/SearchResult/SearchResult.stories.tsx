import React from "react";
import {SearchResult} from "@Components/Basic/SearchResult/SearchResult";

export default {
    component: SearchResult,
    title: "SearchResult",
};

const results = [
    {
        id: "123",
        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    },
    {
        id: "123",

        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    },
    {
        id: "123",

        src: "http://mlb-s2-p.mlstatic.com/773776-MLB31667311864_082019-I.jpg",
        title: "Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota",
        currency: "BRL",
        priceValue: 9999.99,
        condition: "Novo",
        stateName: "São Paulo",
    }
]

export const Default = () => (
    <SearchResult results={results}/>
);

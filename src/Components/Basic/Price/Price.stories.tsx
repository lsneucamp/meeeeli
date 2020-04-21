import React from "react";
import {Price} from "@Components/Basic/Price/Price";

export default {
    component: Price,
    title: "Price",
};

export const Default = () => (
    <Price value={9999.99} currency="BRL"/>
);

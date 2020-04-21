import React from "react";
import styled from "styled-components";
import {Line} from "@Components/Basic/Line";

export default {
    component: Line,
    title: "Line",
};

const Bg = styled.div`
    width: 100%;
    height: 100%;
    //background-color: #007bff;
`;

export const Default = () => (
    <Line/>
);

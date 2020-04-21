import React from "react";
import styled from "styled-components";

export declare namespace ILine {
    export interface IProps {
        className?: string;
    }
}

export const LineContainer = styled.div`
    display: block;
    width: 100%;
    height: 1px;
    background-color: #eee;
`;

export const Line: React.FunctionComponent<ILine.IProps> = props => {
    return <LineContainer/>;
};

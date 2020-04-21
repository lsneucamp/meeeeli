import React from "react";
import styled from "styled-components";

export declare namespace IPrice {
    export interface IProps {
        value: number;
        currency: string;
    }
}

const PriceCo = styled.div`
    font-size: 2.875rem;
    font-weight: 300;
    width: 100%;
    padding-bottom: 2rem;
`;

export const Price: React.FunctionComponent<IPrice.IProps> = props => {
    return <PriceCo>
        {props.value.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: props.currency,
            }
        )}
    </PriceCo>;
};

import React from "react";
import styled from "styled-components";
import {Box} from "@Styled/Home";

export declare namespace IProductDetailsDescription {
    export interface IProps {
        description: string;
    }
}
const DescTitleCo = styled.div`
    font-size: 1.75rem;
    width: 100%;
    padding-bottom: 2rem;
`;
const DescContentCo = styled.div`
    font-size: 1rem;
    color: #666;
    width: 100%;
`;

export const ProductDetailsDescription: React.FunctionComponent<IProductDetailsDescription.IProps> = props => {
    return (
        <Box width={"100%"} padding="2rem">
            <DescTitleCo>Descrição do produto</DescTitleCo>
            <DescContentCo>{props.description}</DescContentCo>
        </Box>
    );
};

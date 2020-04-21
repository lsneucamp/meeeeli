import React from "react";
import styled from "styled-components";
import {Box, Flex} from "@Styled/Home";
import {Button} from "@Components/Basic";
import {Price} from "@Components/Basic/Price";

export declare namespace IProductDetailsInfo {
    export interface IProps {
        title: string;
        src: string;
        priceValue: number;
        currency: string;
        soldQty: number;
        condition: string;
        categoryPath: Array<IBreadcrumb>;
    }

    export interface IBreadcrumb {
        id: string;
        name: string;
    }
}

const ConditionCo = styled.div`
    font-size: 0.825rem;
    width: 100%;
    padding-bottom: 1rem;
`;
const TitleCo = styled.div`
    font-size: 1.5rem;
    width: 100%;
    font-weight: 300;
    padding-bottom: 2rem;
`;
const ButtonCo = styled.div`
    width: 100%;
`;

export const ProductDetailsInfo: React.FunctionComponent<IProductDetailsInfo.IProps> = props => {
    return (
        <Flex flexWrap="wrap" width="100%">
            <Box width={[1, 2 / 3]} padding="1rem" maxWidth="42.5rem">
                <img src={props.src} width="100%" alt={props.title}/>
            </Box>
            <Box width={[1, 1 / 3]} pr="2rem" py="2rem">
                <ConditionCo>
                    {props.condition} - {props.soldQty} vendidos
                </ConditionCo>
                <TitleCo>{props.title}</TitleCo>
                <Price value={props.priceValue} currency={props.currency}/>
                <ButtonCo>
                    <Button>Comprar</Button>
                </ButtonCo>
            </Box>
        </Flex>
    );
};

import React from "react";
import styled from "styled-components";
import {Box, Flex} from "@Styled/Home";
import freeShippingImg from "./ic_shipping@2x.png.png";

export declare namespace ISearchResultItemDescription {
    export interface IProps extends IAddressProps, IPriceProps, IDetailsProps {
        className?: string;
        id: string;
    }

    export interface IPriceProps {
        currency: string;
        freeShipping?: boolean;
        priceValue: number;
    }

    export interface IDetailsProps {
        title: string;
        condition: string;
    }

    export interface IAddressProps {
        stateName: string;
        cityName?: string;
    }
}

export const SearchImageContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    color: #333;
`;

const PriceContainer = styled.div`
    display: block;
    width: 100%;
    font-size: 1.5rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
`;
const DescriptionContainer = styled.a`
    display: block;
    width: 100%;
    font-size: 1.125rem;
    text-decoration: none;
    color: #333;
    &:hover {
        text-decoration: none;
    }
`;

const AddressContainer = styled.div`
    display: block;
    width: 100%;
    padding: 0 1rem;
    font-size: 0.825rem;
    color: #666;
`;

const FreeShippingContainer = styled.div`
    padding-left: 1rem;
    font-size: 1.25rem;
`;

const FreeShippingImage = styled.img`
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
`;
export const SearchResultItemDescription: React.FunctionComponent<ISearchResultItemDescription.IProps> = props => {
    const {id, currency, priceValue, freeShipping} = props;
    const {title, condition} = props;
    const {stateName} = props;
    return (
        <SearchImageContainer>
            <Flex flex={3}>
                <Box width="100%">
                    <PriceContainer>
                        <Flex width="100%">
                            <Box>
                                {priceValue.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: currency,
                                })}
                            </Box>
                            {freeShipping && (
                                <FreeShippingContainer>
                                    <FreeShippingImage
                                        src={freeShippingImg}
                                        alt="frete gratís"
                                    />
                                </FreeShippingContainer>
                            )}
                        </Flex>
                    </PriceContainer>
                    <DescriptionContainer href={`/product/${id}`}>
                        {title}
                    </DescriptionContainer>
                </Box>
            </Flex>
            <Flex flex={1}>
                <AddressContainer>{stateName}</AddressContainer>
            </Flex>
        </SearchImageContainer>
    );
};

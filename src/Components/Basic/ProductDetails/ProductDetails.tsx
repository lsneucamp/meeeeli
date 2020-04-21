import React from "react";
import styled from "styled-components";
import {IProductDetailsInfo, ProductDetailsInfo,} from "@Components/Basic/ProductDetailsInfo";
import {IProductDetailsDescription, ProductDetailsDescription} from "@Components/Basic/ProductDetailsDescription";

export declare namespace IProductDetails {
    export interface IProps
        extends IProductDetailsDescription.IProps,
            IProductDetailsInfo.IProps {
    }
}

const Co = styled.div`
    display: block;
    width: 100%;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 1rem;
`;
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

export const ProductDetails: React.FunctionComponent<IProductDetails.IProps> = props => {
    const {description, ...others} = props;
    return (
        <Co>
            <ProductDetailsInfo
                {...others}
            />
            <ProductDetailsDescription description={description}/>
        </Co>
    );
};

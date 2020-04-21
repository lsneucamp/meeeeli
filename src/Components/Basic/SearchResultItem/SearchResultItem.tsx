import React from "react";
import styled from "styled-components";
import {
    ISearchResultItemDescription,
    SearchResultItemDescription
} from "@Components/Basic/SearchResultItemDescription/SearchResultItemDescription";
import {ISearchImage, SearchImage} from "@Components/Basic/SearchImage";
import {Flex} from "@Styled/Home";

export declare namespace ISearchResultItem {
    export interface IProps extends ISearchImage.IImageSrcProps, ISearchResultItemDescription.IProps {
        className?: string;
    }

}

export const SearchResultItemContainer = styled.div`
    display: block;
    width: 100%;
    padding: 1rem 0;
    border-radius: 0.25rem;
    color: #333;
`;

export const SearchResultItem: React.FunctionComponent<ISearchResultItem.IProps> = props => {

    return (
        <SearchResultItemContainer>
            <Flex flex="1">
                <SearchImage src={props.src} alt={props.title}/>
                <Flex flex="1">
                    <SearchResultItemDescription
                        id={props.id}
                        stateName={props.stateName}
                        currency={props.currency}
                        freeShipping={props.freeShipping}
                        priceValue={props.priceValue}
                        title={props.title}
                        condition={props.condition}/>
                </Flex>
            </Flex>
        </SearchResultItemContainer>
    );
};

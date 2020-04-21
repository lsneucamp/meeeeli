import React from "react";
import styled from "styled-components";
import {ISearchResultItem, SearchResultItem,} from "@Components/Basic/SearchResultItem";
import {Line} from "@Components/Basic/Line";

export declare namespace ISearchResultItemList {
    export interface IProps {
        className?: string;
        results: Array<ISearchResultItem.IProps>;
    }
}

export const SearchResultItemListContainer = styled.div`
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    color: #333;
`;

export const SearchResultItemList: React.FunctionComponent<ISearchResultItemList.IProps> = props => {
    const {results} = props;
    return (
        <SearchResultItemListContainer>
            {results.map((r, i, arr) => {
                if (i < arr.length - 1)
                    return [
                        <SearchResultItem key={`r${i}`} {...r} />,
                        <Line key={`b${i}`}/>,
                    ];

                return [<SearchResultItem key={`r${i}`} {...r} />];
            })}
        </SearchResultItemListContainer>
    );
};

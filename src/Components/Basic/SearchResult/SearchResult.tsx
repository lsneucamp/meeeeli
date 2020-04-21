import React from "react";
import styled from "styled-components";
import {ISearchResultItem,} from "@Components/Basic/SearchResultItem";
import {SearchResultItemList} from "@Components/Basic/SearchResultItemList";

export declare namespace ISearchResult {
    export interface IProps {
        className?: string;
        results: Array<ISearchResultItem.IProps>;
    }
}

export const SearchResultContainer = styled.div`
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: #fff;
`;

export const SearchResult: React.FunctionComponent<ISearchResult.IProps> = props => {
    const {results} = props;
    return (
        <SearchResultContainer>
            <SearchResultItemList results={results}/>
        </SearchResultContainer>
    );
};

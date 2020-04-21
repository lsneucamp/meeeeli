import * as React from "react";
import {NextPage, NextPageContext} from "next";
import {Container} from "@Components/Basic/Container";
import {Navbar} from "@Components/Basic/Navbar";
import {SearchResult} from "@Components/Basic/SearchResult";
import {Box} from "@Styled/Home";
import fetch from "isomorphic-unfetch";
import {ISearchResultItem} from "@Components/Basic/SearchResultItem";

type IProps = { initialData?: Array<ISearchResultItem.IProps> };
const Search: NextPage<IProps> = ({initialData}) => {
    const data = initialData;

    return (
        <>
            <Container backgroundColor="#ffe600">
                <Container lg>
                    <Navbar/>
                </Container>
            </Container>

            <Container backgroundColor="#eee">
                <Container lg>
                    <Box width="100%" py="0.5rem">

                        {data && <SearchResult results={data}/>}
                    </Box>
                </Container>
            </Container>
        </>
    );
};

const useFetchSearch = (query: string): Promise<Array<ISearchResultItem.IProps>> => {
    return fetch(
        `https://api.mercadolibre.com/sites/MLB/search?limit=10&q=${encodeURIComponent(
            query
        )}`
    )
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.results.map(
                (r: any): ISearchResultItem.IProps => ({
                    id: r.id,
                    src: r.thumbnail,
                    title: r.title,
                    priceValue: r.price,
                    freeShipping: r.shipping.free_shipping,
                    currency: r.currency_id,
                    condition: r.condition,
                    stateName: r.address.state_name,
                })
            );
        });
};
Search.getInitialProps = async (ctx: NextPageContext): Promise<IProps> => {
    return {initialData: await useFetchSearch(ctx.query.search as string)};
};

const Extended = Search;

export default Extended;

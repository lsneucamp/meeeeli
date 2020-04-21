import * as React from "react";
import {NextPage, NextPageContext} from "next";
import {Container} from "@Components/Basic/Container";
import {Navbar} from "@Components/Basic/Navbar";
import fetch from "isomorphic-unfetch";
import {IProductDetails, ProductDetails,} from "@Components/Basic/ProductDetails";
import Head from "next/head";

interface IHProps {
    initialData?: IProductDetails.IProps;
}

const Product: NextPage<IHProps> = ({initialData}) => {
    // const [query, setQuery] = useState("apple ipod");
    // const { data, isLoading, error } = useFetchSearch(query);
    const data = initialData;
    return (
        <>
            <Head>
                <title>{data && data.title}</title>
                <meta name="description" content={data && data.description}/>
                <meta property="og:type" content={"website"}/>
                <meta property="og:title" content={data && data.title}/>
                <meta
                    property="og:description"
                    content={data && data.description}
                />
                <meta property="og:image" content={data && data.src}/>
            </Head>
            <Container backgroundColor="#ffe600">
                <Container lg>
                    <Navbar/>
                </Container>
            </Container>
            <Container backgroundColor="#eee">
                <Container lg>
                    {!data && "Ops! produto não encontrado!"}
                    {data && <ProductDetails {...data} />}</Container>
            </Container>
        </>
    );
};

const fetchItem = async (itemId: string) => {
    const r = await fetch(`https://api.mercadolibre.com/items/${itemId}`).then(
        response => {
            return response.json();
        }
    );
    if (r.status === 404)
        return;
    const category = await fetch(
        `https://api.mercadolibre.com/categories/${r.category_id}`
    ).then(response => {
        return response.json();
    });
    const descriptions = await fetch(
        `https://api.mercadolibre.com/items/${itemId}/descriptions`
    ).then(response => {
        return response.json();
    });

    return {
        src: r.pictures[0].url || r.thumbnail,
        title: r.title,
        priceValue: r.price,
        currency: r.currency_id,
        soldQty: r.sold_quantity,
        condition: r.condition,
        categoryPath: category["path_from_root"],
        description: descriptions[0].html_text || descriptions[0].plain_text,
    };
};

Product.getInitialProps = async (ctx: NextPageContext): Promise<IHProps> => {
    console.log(ctx.query);
    return {initialData: await fetchItem(ctx.query.id as string)};
};

const Extended = Product;

export default Extended;

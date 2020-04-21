import React from "react";
import styled from "styled-components";

import { ISearchInput } from "./SearchInput";
import LupaImg from "./lupa.png";
import { TextInput } from "@Components/Basic/TextInput";
import { Flex } from "@Styled/Home";
import { useRouter } from "next/router";

const Container = styled.div`
    display: block;
    border-radius: 4px;
    border: 1px solid #eee;
    width: 100%;
    height: 2rem;
    background-color: #ffffff;
`;

const IconButton = styled.button`
    background: #eee;
    border: none;
    height: 100%;
    padding: 0 0.75rem;
`;

const FormCo = styled.form`
    display: flex;
    flex: 1;
`;

export const SearchInput: React.FunctionComponent<
    ISearchInput.IProps
> = props => {
    const router = useRouter();
    let search: any = "";
    if (router && router.query) {
        search = router.query.search;
    }
    return (
        <Container>
            <FormCo onSubmit={props.onSubmit}>
                <Flex flex="1" width="100%">
                    <TextInput
                        defaultValue={search}
                        name="search"
                        placeholder={props.placeholder}
                    />
                </Flex>
                <Flex width="42px">
                    <IconButton type="submit">
                        <img src={LupaImg} alt="buscar" />
                    </IconButton>
                </Flex>
            </FormCo>
        </Container>
    );
};

import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { INavbar } from "./Navbar";
import { Logo } from "@Components/Basic";
import { Box, Flex } from "@Styled/Home";
import { SearchInput } from "@Components/Basic/SearchInput";

const Container = styled.div<INavbar.IProps>`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    border: none;
    width: 100%;
    height: 50px;
`;
const Center = styled.div`
    display: flex;
    width: 100%;
`;

export const Navbar: React.FunctionComponent<INavbar.IProps> = props => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // @ts-ignore
        const { search } = event.currentTarget;
        if (search) {
            Router.push(`/search?search=${search.value}`);
        }
    };

    return (
        <Container>
            <Center>
                <Box as="a" mr="24px" href="/">
                    <Logo />
                </Box>
                <Flex flex="1">
                    <SearchInput
                        onSubmit={handleSubmit}
                        placeholder="Buscar produtos, marcas e muito mais..."
                    />
                </Flex>
            </Center>
        </Container>
    );
};

import React from "react";
import {Container} from "@Components/Basic/Container/Container";
import {Box} from "@Styled/Home";
import styled from "styled-components";

export default {
    component: Container,
    title: "Container",
};
const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-color: #007bff;
`;
export const Default = () => (
    <Container lg>
        <Box height="38px" width="100%">
            <Bg/>
        </Box>
    </Container>
);

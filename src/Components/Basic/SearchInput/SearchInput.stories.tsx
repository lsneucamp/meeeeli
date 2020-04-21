import React from "react";
import {Box, Flex} from "@Styled/Home";
import {SearchInput} from "./index";

export default {
    component: SearchInput,
    title: "SearchInput",
};

export const Default = () => (
    <Flex flex="1">
        <Box width="100%" p="10px">
            <SearchInput/>
        </Box>
    </Flex>
);

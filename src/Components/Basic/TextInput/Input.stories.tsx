import React from "react";
import {Box, Flex} from "@Styled/Home";
import {TextInput} from "./index";

export default {
    component: TextInput,
    title: "TextInput",
};

export const Default = () => (
    <Flex>
        <Box height="38px">
            <TextInput placeholder="placeholder text"/>
        </Box>
    </Flex>
);

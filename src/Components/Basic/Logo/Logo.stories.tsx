// #region Global Imports
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
// #region Local Imports
import {Box, Flex} from "@Styled/Home";
import {Logo} from "./index";
/* eslint-enable import/no-extraneous-dependencies */
// #endregion Global Imports
// #endregion Local Imports

export default {
    component: Logo,
    title: "Logo",
};

export const Default = () => (
    <Flex>
        <Box>
            <Logo/>
        </Box>
    </Flex>
);

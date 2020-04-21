// #region Global Imports
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
// #region Local Imports
import {Navbar} from "./index";
import {Container} from "@Components/Basic/Container";
/* eslint-enable import/no-extraneous-dependencies */
// #endregion Global Imports
// #endregion Local Imports

export default {
    component: Navbar,
    title: "Navbar",
};

export const Default = () => (
    <Container backgroundColor="#ffe600">
        <Navbar/>
    </Container>
);

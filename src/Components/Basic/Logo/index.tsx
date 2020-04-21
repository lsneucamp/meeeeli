// #region Global Imports
import React from "react";
import styled from "styled-components";
// #region Local Imports
import {ILogo} from "./Logo";
import LogoML from "./LogoML.png";
// #endregion Global Imports
// #endregion Local Imports

const Container = styled.img<ILogo.IProps>` 
    width: 56px;
    height: 36px;
`;

export const Logo: React.FunctionComponent<ILogo.IProps> = props => {
    return <Container {...props} src={LogoML} alt="logo"/>;
};

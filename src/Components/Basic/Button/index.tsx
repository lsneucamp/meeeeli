import React from "react";
import styled from "styled-components";

import {IButton} from "./Button";

const Container = styled.button<IButton.IProps>`
    color: white;
    height: 2.5rem;
    background-color: #3483fa;
    width: 100%;
    border: none;
    border-radius: 4px;
    cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
`;

export const Button: React.FunctionComponent<IButton.IProps> = props => {
    return <Container {...props} />;
};

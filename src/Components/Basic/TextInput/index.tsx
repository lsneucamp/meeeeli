import React from "react";
import styled from "styled-components";
import {IInput} from "./Input";
import {ISearchInput} from "@Components/Basic/SearchInput/SearchInput";

export const TextInputContainer = styled.input<IInput.IProps>`
    width: 100%;
    height: 36px;
    font-size: 18px; // <-- spec ? 18px?
    color: #333;
    border: none;
    padding: 0 16px;
    
    ::placeholder {
      color: #999999;
    }
`;

export const TextInput: React.FunctionComponent<ISearchInput.IProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">> = props => {
    return <TextInputContainer type="text" {...props} />;
};


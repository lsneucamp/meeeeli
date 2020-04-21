import React from "react";

declare namespace ISearchInput {
    export interface IProps {
        className?: string;
        placeholder?: string;
        onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    }
}

export {ISearchInput};

import React from "react";
import styled from "styled-components";

export declare namespace ISearchImage {
    export interface IProps extends IImageAltProps, IImageSrcProps {
        className?: string;
    }

    export interface IImageSrcProps {
        src: string;
    }

    export interface IImageAltProps {
        alt: string;
    }
}

export const SearchImageContainer = styled.img`
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 0.25rem;
`;

export const SearchImage: React.FunctionComponent<ISearchImage.IProps> = props => {
    const {src} = props;
    const srcGoodHighDefinition = src.replace("-I.jpg", "-V.jpg")
    return <SearchImageContainer {...props} src={srcGoodHighDefinition}/>;
};

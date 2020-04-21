import React from "react";
import styled from "styled-components";
import {BackgroundColorProps} from "styled-system";

export const screenSizes: any = {
    lg: "64em",
    md: "52em",
    sm: "40em",
};

export const breakpoints: any = {
    default: {
        width: "100%",
        padding: "0 1rem",
        backgroundColor: ({backgroundColor}: any) => backgroundColor,
    },
    lg: {
        maxWidth: screenSizes.lg,
        padding: "0 1rem",
        media: `@media screen and (min-width: ${screenSizes.lg})`,
    },
    md: {
        maxWidth: screenSizes.md,
        padding: "0 1rem",
        media: `@media screen and (min-width: ${screenSizes.md}) and (max-width: ${screenSizes.lg})`,
    },
    sm: {
        maxWidth: screenSizes.sm,
        padding: "0 0.5rem",
        media: `@media screen and (min-width: ${screenSizes.sm}) and (max-width: ${screenSizes.md})`,
    },
    xs: {
        padding: "0 0.5rem",
        media: `@media screen and (max-width: ${screenSizes.sm})`,
    },
};

export const container = (key: string) => (props: any) => {
    if (!props[key]) return;

    let cssProps: any = {};
    if (breakpoints[key].media) {
        cssProps[breakpoints[key].media] = {};
        cssProps = cssProps[breakpoints[key].media];
    }
    const filteredProps = Object.keys(breakpoints[key]).filter(
        p => p !== "media"
    );
    for (const filteredProp of filteredProps) {
        cssProps[filteredProp] = breakpoints[key][filteredProp];
    }
    return cssProps;
};

declare namespace IContainer {
    export interface IProps extends BackgroundColorProps {
        className?: string;
        sm?: boolean;
        lg?: boolean;
        md?: boolean;
        xs?: boolean;
    }
}

export const xs = container("xs");
export const sm = container("sm");
export const md = container("md");
export const lg = container("lg");

export const InnerContainer = styled.div<IContainer.IProps>(
    breakpoints["default"],
    xs,
    sm,
    md,
    lg
);

export const OuterContainer = styled.div<IContainer.IProps>`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Container: React.FunctionComponent<IContainer.IProps> = props => {
    return (
        <OuterContainer>
            <InnerContainer {...props} />
        </OuterContainer>
    );
};

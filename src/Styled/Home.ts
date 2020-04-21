import styled from "styled-components";
import {
    alignContent,
    AlignContentProps,
    alignItems,
    AlignItemsProps,
    alignSelf,
    AlignSelfProps,
    display,
    DisplayProps,
    flex,
    flexDirection,
    FlexDirectionProps,
    FlexProps,
    flexWrap,
    FlexWrapProps,
    height,
    HeightProps,
    justifyContent,
    JustifyContentProps,
    margin,
    MarginProps,
    maxHeight,
    MaxHeightProps,
    maxWidth,
    MaxWidthProps,
    minHeight,
    MinHeightProps,
    minWidth,
    MinWidthProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    width,
    WidthProps,
} from "styled-system";
import React from "react";

interface IFlex
    extends AlignItemsProps,
        AlignContentProps,
        FlexDirectionProps,
        FlexProps,
        FlexWrapProps,
        PositionProps,
        JustifyContentProps,
        WidthProps,
        HeightProps,
        MaxHeightProps,
        MinHeightProps,
        MinWidthProps,
        MaxWidthProps,
        MarginProps,
        Omit<React.HTMLProps<HTMLDivElement>, "width" | "height"> {
}

export const Flex = styled.div<IFlex>`
  display:flex;
  ${position}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flex}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${alignSelf}
  ${margin}
`;

export interface IBox
    extends AlignSelfProps,
        PositionProps,
        WidthProps,
        HeightProps,
        MaxHeightProps,
        MinHeightProps,
        MinWidthProps,
        MaxWidthProps,
        DisplayProps,
        SpaceProps,
        Omit<React.HTMLProps<HTMLDivElement>, "width" | "height"> {
}

export const Box = styled.div<IBox>`
  box-sizing: border-box;
  ${display}
  ${position}
  ${space}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${alignSelf}
`;

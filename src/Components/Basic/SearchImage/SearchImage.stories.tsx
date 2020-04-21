import React from "react";
import {Box} from "@Styled/Home";
import styled from "styled-components";
import {SearchImage} from "@Components/Basic/SearchImage/SearchImage";

export default {
    component: SearchImage,
    title: "SearchImage",
};
const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-color: #007bff;
`;

export const Default = () => (
    <Bg>
        <Box width="200px">
            <SearchImage
                src="http://mla-s2-p.mlstatic.com/890264-MLA40103251145_122019-I.jpg"
                alt="Mochila Notebook Case Logic Query 29 L Ccam-4116 Negro Cuota"
            />
        </Box>
    </Bg>
);

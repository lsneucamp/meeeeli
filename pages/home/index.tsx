import * as React from "react";
import {NextPage} from "next";
import {Container} from "@Components/Basic/Container";
import {Navbar} from "@Components/Basic/Navbar";
import styled from "styled-components";

const Co = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 1rem;
`;
const Home: NextPage = () => {

    return (
        <>
            <Container backgroundColor="#ffe600">
                <Container lg>
                    <Navbar/>
                </Container>
            </Container>

            <Container backgroundColor="#eee">
                <Container lg>
                    <Co>
                        <h1>
                            👆👆👆👆👆👆 Busque algo para iniciar!!!
                        </h1>
                    </Co>
                </Container>
            </Container>
        </>
    );
};

const Extended = Home;

export default Extended;

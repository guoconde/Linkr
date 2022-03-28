import styled from "styled-components";

const Slogan = styled.h1`
    font-family: "Oswald", cursive;
    font-weight: bold;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

    @media screen and (max-width: 900px) {
        font-size: 23px;
        line-height: 34px;
        text-align: center;
    }
`;

export default Slogan;
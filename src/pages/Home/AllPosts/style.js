import styled from "styled-components";

const Feed = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;

    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;

    margin-top: 30px;
`;

export {
    Feed,
    Content
}
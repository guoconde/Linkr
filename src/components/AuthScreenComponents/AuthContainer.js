import styled from "styled-components";

const AuthContainer = styled.div`
    display: flex;

    min-width: 100vw;
    min-height: 100vh;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export default AuthContainer;
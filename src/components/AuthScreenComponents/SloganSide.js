import styled from "styled-components";

const SloganSide = styled.div`
  background: #151515;

  width: 60%;
  padding: 30vh 5vw 0 8vw;
  
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 175px;
    padding: 5vh 5vw 5vh 5vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default SloganSide;
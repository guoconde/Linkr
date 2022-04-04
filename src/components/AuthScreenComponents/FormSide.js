import styled from "styled-components";

const FormSide = styled.div`
  background: #333333;
  display: flex;
  flex-direction: column;
  width: 40%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export default FormSide;
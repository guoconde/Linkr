import styled from "styled-components";

const ImageProfile = styled.img`
  width: ${(props) => props.sizeControl ? "39px" : "50px"};
  height: ${(props) => props.sizeControl ? "39px" : "50px"};
  border-radius: 50%;

  margin: ${(props) => props.titleMargin ? "0 18px 0 25px" : "0"};

  cursor: ${(props) => props.cursorControl && "pointer"};

  @media screen and (max-width: 900px) {
    display: ${(props) => props.displayControl && "none"};
  }
`;

export default ImageProfile;
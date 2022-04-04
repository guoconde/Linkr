import styled from "styled-components";

export const RepostArea = styled.div`
  text-align: center;
  cursor: pointer;

  .repost-icon{
    &:active{
      transform: scale(1.2);
    }
  }
`;

export const Count = styled.div`
  color: white;
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;

export const Title = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 134px;
  height: 37px;

  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

  background-color: ${(props) => (props.color === "#FFF" ? "#1877F2" : "#FFF")};
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }

  @media screen and (max-width: 500px) {
    width: 90px;
    height: 50px;
  }
`;

export const Content = styled.div`
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
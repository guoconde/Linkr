import styled from "styled-components"

const Container = styled.div`
  width: 611px;

  position: relative;
  padding: 20px;

  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  gap: 18px;

  margin-top: 30px;

  div{
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  cursor: pointer;
`

const Name = styled.div`
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #fff;
`;

const Description = styled.div`
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;

    color: #B7B7B7;
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
`

const MetaLink = styled.div`
    width: 503px;
    min-height: 155px;

    border: 1px solid #4d4d44;
    border-radius: 11px;

    overflow: hidden;
    position: relative;
    
    .infoPost {
        width: 65%;
        height: 100%;
        font-family: Lato;
        color: #CECECE;

        padding: 25px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
        }

        .description {
            font-size: 11px;
            font-weight: 400;
            line-height: 13px;
            color: #9B9595;
        }
    }
    
`
const Link = styled.a`
    all: unset;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    cursor: pointer;
`;

const ImagePost = styled.div`
    width: 155px;
    height: 100%;

    background: url(${props => props.backgroundImage}) no-repeat;
    background-size: 155px 100%;

    position: absolute;
    right: 0;
`

export {
    Container,
    Image,
    Name,
    Description,
    Link,
    Content,
    MetaLink,
    ImagePost
}
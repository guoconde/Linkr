import styled from "styled-components";

export default function ProfilePicture (source) {
  return <Image src={source} alt="profile-picture" />
}

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  cursor: pointer;
`;
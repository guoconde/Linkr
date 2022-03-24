import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactModal from "react-modal";
import styled from "styled-components";
import { Container } from "./pages/Header/style";

export default function Temporary() {
  const [showModal, setShowModal] = useState(false);
  const [isProcessingRequest, setIsProcessingRequest] = useState(false);
  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: "2",
  };

  const content = {
    width: "597px",
    height: "262px",
    margin: "auto",
    backgroundColor: "#333333",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  };

  function deletePost() {
    setIsProcessingRequest(true);
  }
  return (
    <Container>
      <button onClick={() => setShowModal(true)}>Click me!</button>
      <ReactModal isOpen={showModal} style={{ overlay, content }}>
        {isProcessingRequest ? (
          <ThreeDots></ThreeDots>
        ) : (
          <ModalContent deletePost={deletePost} setShowModal={setShowModal} />
        )}
      </ReactModal>
    </Container>
  );
}

function ModalContent({ setShowModal, deletePost }) {
  return (
    <>
      <Title>Are you sure you want to delete this post?</Title>
      <div className="section-buttons">
        <Button color="#1877F2" onClick={() => setShowModal(false)}>
          No, go back
        </Button>
        <Button color="#FFF" onClick={deletePost}>
          Yes, delete it!
        </Button>
      </div>
    </>
  );
}

const Title = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  margin-bottom: 40px;
`;
const Button = styled.button`
  width: 134px;
  height: 37px;
  margin-right: 25px;

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
`;

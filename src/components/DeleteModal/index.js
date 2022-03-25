import { useState } from "react";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";

import ReactModal from "react-modal";
import { Watch } from "react-loader-spinner";
import { Button, SectionButton, Title, Trash } from "./style";
import { fireToast } from "../../utils/alerts";
import usePost from "../../hooks/usePost";

export default function DeleteModal({ id: postId, userId}) {
  const [showModal, setShowModal] = useState(false);
  const [isProcessingRequest, setIsProcessingRequest] = useState(false);
  const api = useApi();
  const { auth } = useAuth();
  const { reloadPage, setReloadPage } = usePost();

  const headers = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

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
    maxWidth: "597px",
    minHeight: "262px",
    maxHeight: "300px",
    margin: "auto",
    backgroundColor: "#333333",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  };
  function handleModal() {
    setShowModal(true);
  }

  async function deletePost() {
    setIsProcessingRequest(true);
    try {
      await api.posts.deletePost(postId, headers);

      fireToast("success", "The post was deleted!");
      setReloadPage(!reloadPage);
    } catch (error) {
      fireToast("error", error.response.data);
    }
    setShowModal(false);
    setIsProcessingRequest(false);
  }
  return (
    <>
      <Trash onClick={handleModal} userid={userId} authid={auth?.userId}/>
      <ReactModal
        isOpen={showModal}
        style={{ overlay, content }}
        appElement={document.querySelector(".root")}
      >
        {isProcessingRequest ? (
          <Watch color="white" message="Teste" ariaLabel="loading-indicator" />
        ) : (
          <ModalContent deletePost={deletePost} setShowModal={setShowModal} />
        )}
      </ReactModal>
    </>
  );
}

function ModalContent({ setShowModal, deletePost }) {
  return (
    <>
      <Title>Are you sure you want to delete this post?</Title>
      <SectionButton>
        <Button color="#1877F2" onClick={() => setShowModal(false)}>
          No, go back
        </Button>
        <Button color="#FFF" onClick={deletePost}>
          Yes, delete it!
        </Button>
      </SectionButton>
    </>
  );
}

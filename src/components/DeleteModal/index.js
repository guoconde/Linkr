import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { fireToast } from "../../utils/alerts";
import useApi from "../../hooks/useApi";
import ReactModal from "react-modal";
import { Button, Content, SectionButton, Title, Trash } from "./style";
import useContexts from "../../hooks/useContexts";

export default function DeleteModal({
  id: postId,
  userId,
  setComments,
  sharerId,
}) {
  const api = useApi();
  const contexts = useContexts();
  const { auth } = contexts.auth;
  const { reloadPage, setReloadPage } = contexts.post;
  const [showModal, setShowModal] = useState(false);
  const [isProcessingRequest, setIsProcessingRequest] = useState(false);

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
    zIndex: "3",
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

      setComments(null);
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
      <Trash
        onClick={handleModal}
        userid={userId}
        authid={auth?.userId}
        sharerid={sharerId}
      />
      <ReactModal
        isOpen={showModal}
        style={{ overlay, content }}
        appElement={document.querySelector(".root")}
      >
        {isProcessingRequest ? (
          <Content>
            <TailSpin color="white" ariaLabel="loading-indicator" />
            <div>Loading...</div>
          </Content>
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

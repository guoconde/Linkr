import { useState } from "react";
import useApi from "../../../../../hooks/useApi";
import useContexts from "../../../../../hooks/useContexts";
import ReactModal from "react-modal";
import { BiRepost } from "react-icons/bi";
import { TailSpin } from "react-loader-spinner";
import { fireToast } from "../../../../../utils/alerts";
import { Button, Content, Count, RepostArea, SectionButton, Title } from "./style";

export const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  zIndex: "3",
};

export const content = {
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

export default function Repost({ postId, reposts, reposted }) {
  const api = useApi()
  const contexts = useContexts();
  const { auth } = contexts.auth
  const { reloadPage, setReloadPage } = contexts.post
  const [showModal, setShowModal] = useState(false);
  const [isProcessingRequest, setIsProcessingRequest] = useState(false);
  const label = reposts === "1" ? "1 re-post" : `${reposts} re-posts`

  async function handleRepost() {
    const headers = { headers: { Authorization: `Bearer ${auth?.token}` } };
    setIsProcessingRequest(true);
    try {
      await api.posts.repost(postId, headers);

      if (!reposted) {
        fireToast("success", "The link was shared!");
      } else {
        fireToast("success", "The link was deleted!");
      }
      
      setReloadPage(!reloadPage);
    } catch (error) {
      fireToast("error", error.response.data);
    }
    setShowModal(false);
    setIsProcessingRequest(false);
  }

  return (
    <>
      <RepostArea>
        <BiRepost
          className="repost-icon"
          onClick={() => setShowModal(true)}
          size={25}
          color={reposted ? "lightgreen" : "white"}
        />
        <Count>{label}</Count>
      </RepostArea>
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
          <ModalContent handleRepost={handleRepost} setShowModal={setShowModal} reposted={reposted} />
        )}
      </ReactModal>
    </>
  )
}

function ModalContent({ setShowModal, handleRepost, reposted }) {
  const title = !reposted ? "Do you want to re-post this link?" : "Do you want to delete your repost from this link?"
  return (
    <>
      <Title>{title}</Title>
      <SectionButton>
        <Button color="#1877F2" onClick={() => setShowModal(false)}>
          No, cancel
        </Button>
        <Button color="#FFF" onClick={handleRepost}>
          Yes, {!reposted ? "share" : "delete"}!
        </Button>
      </SectionButton>
    </>
  );
}
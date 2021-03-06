import { useNavigate } from "react-router";
import { Image } from "../../../pages/Home/Feed/Post/style";

export default function ListUsers({ users, handleHideSearchBar }) {
  const navigate = useNavigate();

  function handleNavigate(user) {
    handleHideSearchBar();
    navigate(`${user}`);
  }

  if (!users) {
    return null;
  }

  if (users.length === 0) {
    return <div>User not found</div>;
  }

  return (
    <>
      {users.map((el, i) => (
        <div className="listed-user" key={i} onClick={() => handleNavigate(`/user/${el.id}`)}>
          <Image src={el.photo} alt={el.name} positionControll={true} />
          <div className="name">{el.name}</div>
          <div className="status">
            {el.isFollowing && (
              <>
                <div className="circle"></div> 
                <span className="is-following">following</span>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
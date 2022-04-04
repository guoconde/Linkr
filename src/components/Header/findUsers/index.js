import { useNavigate } from "react-router";
import { Image } from "../../../pages/Home/Feed/Post/style";

export default function ListUsers({ users, setUsers }) {
  const navigate = useNavigate();

  function handleNavigate(user) {
    setUsers([]);
    navigate(`${user}`);
  }

  if (!users) {
    return null;
  }

  if (users.length === 0) {
    return <div className="name">User not found</div>;
  }

  return (
    <>
      {users.map((el, i) => (
        <div key={i} onClick={() => handleNavigate(`/user/${el.id}`)}>
          <Image src={el.photo} alt={el.name} />
          <div className="name">{el.name}</div>
          <div className="status">
            {el.isFollowing && (
              <>
                <div className="circle"></div> following
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
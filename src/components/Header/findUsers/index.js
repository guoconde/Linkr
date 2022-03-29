import { useNavigate } from "react-router";
import { Image } from "../../../pages/Home/AllPosts/style";

export default function ListUsers({ users, setUsers }) {
  const navigate = useNavigate();

  function handleNavigate(user) {
    setUsers([]);
    navigate(`${user}`);
  }

  return (
    <>
      {users.map((el, i) => (
        <div key={i} onClick={() => handleNavigate(`/user/${el.id}`)}>
          <Image src={el.photo} alt={el.name} />
          <div className="name">{el.name}</div>
          <div className="status">
            <div className="circle"></div>
            {el.isFollowing && "following"}
          </div>
        </div>
      ))}
    </>
  );
}


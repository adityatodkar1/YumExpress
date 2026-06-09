import { useEffect, useState } from "react";

const User = () => {
  const [UserInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("UseEffect Call");
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/adityatodkar1");
    const json = await data.json();
    setUserInfo(json);
    console.log(json);
  };
  const { name, login, avatar_url, public_repos } = UserInfo;
  return (
    <div className="User">
      <img className="photo" src={avatar_url} alt="user"></img>
      <h1>{name}</h1>
      <h2>{login}</h2>
      <h3>{public_repos}</h3>
    </div>
  );
};

export default User;

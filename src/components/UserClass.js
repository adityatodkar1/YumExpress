import React from "react";
import ReactDOM from "react-dom/client";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserInfo: {
        name: "Dummy",
        location: "pune",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adityatodkar1");
    const json = await data.json();

    this.setState({
      UserInfo: json,
    });
  }
  render() {
    const { name, login, avatar_url , public_repos} = this.state.UserInfo;

    return (
      <div className="User">
        <img src={avatar_url} alt="photo" className="photo"></img>
        <h1>Name:{name}</h1>
        <h2>Contact :{login}</h2>
        <h3>{public_repos}</h3>
      </div>
    );
  }
}

export default UserClass;

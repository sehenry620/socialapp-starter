import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import UserInfo from "../components/userInfo/UserInfo";
import CreateMessage from "../components/createMessage/CreateMessage";
import MessageFeed from "../components/messageFeed/MessageFeed";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserInfo/>
        <br/>
        <CreateMessage/>
        <br/>
        <MessageFeed/>
        
      </>
    );
  }
}

export default userIsAuthenticated(Profile);

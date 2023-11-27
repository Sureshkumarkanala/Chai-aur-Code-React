import React, { useContext } from "react";
import UserContext from "../UserContext/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div> please login</div>;
  } else {
    return (
      <div>
        {" "}
        welcome {user.username} {user.gender} is Logged
      </div>
    );
  }
}

export default Profile;

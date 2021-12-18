import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-3 shadow">
      <img src={user.avatar_url} alt="user-avatar" className="img-thumbnail" />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="bio-text">{user.bio}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;

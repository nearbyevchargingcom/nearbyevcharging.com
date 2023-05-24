import React from "react";
import LayoutChild from "~/components/Layout";
import UserComponent from "~/components/Users";

const Users = () => {
  return (
    <div>
      <LayoutChild childern={<UserComponent />} />
    </div>
  );
};

export default Users;

import React from "react";
import SidebarComponent from "../Sidebar/Sidebar";

type LayoutChildProps = {
  childern: React.ReactNode;
};

const LayoutChild: React.FC<LayoutChildProps> = ({ childern }) => {
  return (
    <div className="flex flex-row">
      <SidebarComponent />
      {childern}
    </div>
  );
};

export default LayoutChild;

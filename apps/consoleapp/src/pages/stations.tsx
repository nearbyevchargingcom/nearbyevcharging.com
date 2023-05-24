import React from "react";
import LayoutChild from "~/components/Layout";
import StationComponent from "~/components/Stations/StationComponent";

const Stations = () => {
  return (
    <div>
      <LayoutChild childern={<StationComponent />} />
    </div>
  );
};

export default Stations;

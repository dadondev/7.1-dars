import React from "react";
import ClickImage from "../clickImage/ClickImage";

const AllClickImages = ({ props }) => {
  return (
    <div className="max-h-full grid grid-flow-col gap-2 rounded-2xl overflow-x-auto py-3 px-4 bg-gray-200">
      {props.map((e, i) => (
        <ClickImage props={e} key={i} />
      ))}
    </div>
  );
};

export default AllClickImages;

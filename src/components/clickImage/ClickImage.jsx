import React, { useContext } from "react";
import ImageContext from "../../context/ImageContext";

const ClickImage = ({ props }) => {
  const { image, setImage, allImages } = useContext(ImageContext);
  const id = props.id;
  const handleClick = () => {
    setImage(allImages.find((e) => e.id === id));
  };
  return (
    <div
      className="max-h-full w-[150px] inline-block cursor-pointer overflow-hidden rounded-md"
      onClick={handleClick}
    >
      <img src={props.link} className="max-h-full h-full" />
    </div>
  );
};

export default ClickImage;

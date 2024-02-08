import React, { useContext } from "react";
import ImageContext from "../../context/ImageContext";

const MainImage = () => {
  const { image, setImage, allImages } = useContext(ImageContext);

  const { link, id } = image;
  const handleClick = (exp) => {
    if (exp === "+") {
      if (allImages[id + 1]) {
        setImage(allImages[id + 1]);
      } else {
        setImage(allImages[0]);
      }
    } else {
      if (allImages[id - 1]) {
        setImage(allImages[id - 1]);
      } else {
        setImage(allImages[allImages.length - 1]);
      }
    }
  };
  return (
    <div className="rounded-2xl relative  overflow-hidden mb-2">
      <button
        className="absolute top-0 left-1 w-10 h-10 top-2/4 -translate-y-1/2 flex items-center justify-center bg-white rounded-full"
        onClick={() => {
          handleClick("-");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
      </button>
      <img src={link} className="max-h-[450px] max-w-full w-full" />
      <button
        className="absolute right-1 top-1/2 bg-white w-10 h-10 rounded-full -translate-y-1/2"
        onClick={() => {
          handleClick("+");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default MainImage;

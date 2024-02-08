import React, { useState } from "react";
import MainImage from "../mainImage/MainImage";
import AllClickImages from "../allClickImages/AllClickImages";
import ImageContext from "../../context/ImageContext";

const allImages = [
  {
    id: 0,
    link: "https://images.pexels.com/photos/9992332/pexels-photo-9992332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    link: "https://images.pexels.com/photos/9992338/pexels-photo-9992338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    link: "https://images.pexels.com/photos/12276017/pexels-photo-12276017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    link: "https://images.pexels.com/photos/12068528/pexels-photo-12068528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    link: "https://images.pexels.com/photos/12068528/pexels-photo-12068528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    link: "https://images.pexels.com/photos/15159431/pexels-photo-15159431/free-photo-of-close-up-shot-of-a-red-eared-slider.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    link: "https://images.pexels.com/photos/14584389/pexels-photo-14584389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    link: "https://images.pexels.com/photos/11065778/pexels-photo-11065778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    link: "https://images.pexels.com/photos/12682088/pexels-photo-12682088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    link: "https://images.pexels.com/photos/11220256/pexels-photo-11220256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const SliderMain = () => {
  const [image, setImage] = useState(allImages[0]);
  return (
    <ImageContext.Provider value={{ image, setImage, allImages }}>
      <div className="max-w-[calc(100%-30%)] max-h-[calc(100%-20%)] w-full h-full grid grid-rows-[1fr_170px] mx-auto">
        <MainImage />
        <AllClickImages props={allImages} />
      </div>
    </ImageContext.Provider>
  );
};

export default SliderMain;

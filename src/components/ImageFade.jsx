import React, { useState, useMemo } from "react";
import { data } from "../data.jsx";
import ProgressiveSquare from "./ProgressiveSquare";

const noOfImages = data.length;
const animateOverDuration = 1800;
const heroImageStaticStyle =
  "absolute top-0 left-0  h-full w-full object-cover ";

function ImageFade() {
  const [current, setCurrent] = useState(1);
  const [fade, setFade] = useState(false);
  const [cycle, setCycle] = useState(1);

  const nextImageDynamicStyle = {
    transformOrigin: "center center",
    transform: fade ? "scaleY(1) " : "scaleY(0)",
    transition: fade
      ? `transform ${animateOverDuration}ms ease-in-out`
      : "transform 0s",
    //   transform: fade ? "scaleY(1) scale(1)" : "scaleY(0) scale(0.95)",
  };
  const cycleAnimateStyle = {
    animation: fade ? "slideUpNumber 0.4s ease-out forwards" : "none",
    display: "inline-block",
    width: "16px",
  };

  const isLastImage = current === noOfImages;

  const currentImage = useMemo(() => {
    return data?.[current - 1]?.content;
  }, [current]);

  const nextImage = useMemo(() => {
    return isLastImage ? data[0].content : data[current]?.content;
  }, [current]);

  const secondNextImage = useMemo(() => {
    if (isLastImage) return data[1].content;
    if (current + 1 === noOfImages) return data[0].content;
    return data[current + 1]?.content;
  }, [current]);

  return (
    <div className="relative h-[900px] w-[100vw] ">
      <img
        src={currentImage}
        alt="full-image"
        className={heroImageStaticStyle}
        style={{
          opacity: fade ? "90%" : 100,
        }}
        draggable={false}
      />
      <img
        src={nextImage}
        alt="next-image"
        className={heroImageStaticStyle}
        style={nextImageDynamicStyle}
        draggable={false}
      />

      <div className="absolute left-[9.38%] top-[24.3%] sm-w-[70%] w-[40%] text-[#EEF4F9]">
        <p className="text-[16px] mb-[24px]">Welcome To TenTwenty Farms</p>
        <h1 className=" text-[64px] font-[400]">
          From our Farms to your hands
        </h1>
      </div>

      <div className="absolute bottom-[7.44%] left-[9.38%] flex gap-[33px] items-center">
        <ProgressiveSquare
          nextImage={nextImage}
          fade={fade}
          setFade={setFade}
          setCycle={setCycle}
          setCurrent={setCurrent}
          secondNextImage={secondNextImage}
          isLastImage={isLastImage}
          animateOverDuration={animateOverDuration}
        />
        <div className="flex items-center gap-[17px] text-[#EEF4F9] text-[16px]">
          <span style={cycleAnimateStyle}>{`0${cycle}`}</span>
          <div className="border border-[#EEF4F9] w-[103px] h-[0px]"></div>
          <span className="w-[16px]">{`0${noOfImages}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ImageFade;

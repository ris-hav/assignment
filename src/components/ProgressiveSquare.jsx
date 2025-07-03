import React from "react";
import DynamicProgressCycle from "./DynamicProgressCycle";

const progressBox =
  "relative h-[138px] w-[138px] flex justify-center items-center";
const previewImageStaticStyle =
  "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[93px] h-[93px] object-cover ";

function ProgressiveSquare({
  nextImage,
  fade,
  setFade,
  setCycle,
  setCurrent,
  secondNextImage,
  isLastImage,
  animateOverDuration,
}) {
  const nextPreviewImageDynamicStyle = {
    transformOrigin: "center center",
    transform: fade ? "scaleY(1) " : "scaleY(0)",
    transition: fade ? "transform 1s ease-in-out" : "transform 0s",
  };

  return (
    <div className={progressBox}>
      <div className="relative cursor-pointer ">
        <img
          src={nextImage}
          alt="preview"
          className={previewImageStaticStyle}
          style={{
            opacity: fade ? "90%" : 100,
          }}
          draggable={false}
        />
        <img
          src={secondNextImage}
          alt="upcoming"
          className={previewImageStaticStyle}
          style={nextPreviewImageDynamicStyle}
          draggable={false}
        />
      </div>
      <DynamicProgressCycle
        setFade={setFade}
        setCycle={setCycle}
        setCurrent={setCurrent}
        isLastImage={isLastImage}
        animateOverDuration={animateOverDuration}
      />
    </div>
  );
}

export default React.memo(ProgressiveSquare);

import React, { useState, useEffect } from "react";

const commonBorderStyle = "absolute bg-[#fff] transition-all duration-30";
const borderTop = commonBorderStyle + " top-[0px] left-[0px] h-[4px] ";
const borderRight = commonBorderStyle + " top-[0px] right-[0px] w-[4px] ";
const borderBottom = commonBorderStyle + " bottom-[0px] right-[0px] h-[4px] ";
const borderLeft = commonBorderStyle + " bottom-[0px] left-[0px] w-[4px] ";

const nextButtonStyle =
  "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#EEF4F9] transform hover:scale-130 transition-transform duration-[300ms]";

function DynamicProgressCycle({
  setFade,
  setCycle,
  setCurrent,
  isLastImage,
  animateOverDuration,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setTimeout(() => setProgress((prev) => prev + 1), 40);
    } else if (progress >= 100) {
      handleNext();
    }
    return () => clearTimeout(timer);
  }, [progress]);

  function handleNext() {
    setFade(true);
    setProgress(0);
    if (isLastImage) setCycle(1);
    else setCycle((prevCycle) => prevCycle + 1);
    setTimeout(() => {
      if (isLastImage) setCurrent(1);
      else setCurrent((prevCurrent) => prevCurrent + 1);
      setFade(false);
    }, animateOverDuration);
  }

  const topProgress = Math.min(progress * 4, 100);
  const rightProgress = Math.max(0, Math.min((progress - 25) * 4, 100));
  const bottomProgress = Math.max(0, Math.min((progress - 50) * 4, 100));
  const leftProgress = Math.max(0, Math.min((progress - 75) * 4, 100));
  return (
    <div
      id="dynamic-progress"
      className="absolute top-0 left-0 h-[138px] w-[138px] cursor-pointer"
      onClick={handleNext}
    >
      <span className={nextButtonStyle}>Next</span>
      <div className={borderTop} style={{ width: `${topProgress}%` }} />
      <div className={borderRight} style={{ height: `${rightProgress}%` }} />
      <div className={borderBottom} style={{ width: `${bottomProgress}%` }} />
      <div className={borderLeft} style={{ height: `${leftProgress}%` }} />
    </div>
  );
}

export default DynamicProgressCycle;

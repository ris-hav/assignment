import React from "react";
import { sections } from "../data.jsx";
function AppBar() {
  return (
    <div className="absolute top-[21px] left-[50%] -translate-x-[50%] z-10 flex justify-between items-center pl-[39px] pr-[33px] py-[32px] w-[97.2vw] bg-[#fff]">
      <div className="flex flex-row gap-[20px] h-[20px] text-[14px]">
        {sections.map((section) => (
          <span key={section}>{section}</span>
        ))}
      </div>
      <div className="h-[36px] border border-[#000] flex gap-[16px] items-center justify-around pl-[16px] pr-[12px] text-[16px]">
        <span>Contact Us</span>
        <span>&#10132;</span>
      </div>
    </div>
  );
}

export default AppBar;

import React, { useState, useEffect, useRef } from "react";
import { clients } from "../data.jsx";

const cursorStyle = {
  pointerEvents: "none",
  position: "fixed",
  zIndex: 50,
  height: "99px",
  width: "99px",
  borderRadius: "50%",
  backgroundColor: "white",
  mixBlendMode: "difference",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  fontSize: "1.25rem",
  fontWeight: 400,
  transitionProperty: "transform",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-in-out",
  transform: "translate(-50%, -50%)",
};

function ImageSlider() {
  const [current, setCurrent] = useState(1);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const prevIndex = current === 0 ? clients.length - 1 : current - 1;
  const nextIndex = current === clients.length - 1 ? 0 : current + 1;

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.opacity = 1;
      }
    };
    const hideCursor = () => {
      if (cursor) cursor.style.opacity = 0;
    };

    if (container && cursor) {
      container.addEventListener("mousemove", moveCursor);
      container.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      if (container && cursor) {
        container.removeEventListener("mousemove", moveCursor);
        container.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[100vw] select-none bg-[#FFFCFA] overflow-hidden"
    >
      <div ref={cursorRef} style={cursorStyle}>
        {`< >`}
      </div>
      <div className="flex justify-between mb-[54px]">
        <img
          src={clients[prevIndex].content}
          alt="prev"
          className="w-[30.2vw] h-[619.21px]  object-cover rotate-[-9.5deg] translate-y-[20px] ml-[-75px]"
          style={{ transformOrigin: "bottom right" }}
          loading="lazy"
          decoding="async"
        />
        <img
          src={clients[current].content}
          alt="current"
          className="w-[30.2vw] h-[619.21px] object-cover "
          loading="lazy"
          decoding="async"
        />
        <img
          src={clients[nextIndex].content}
          alt="next"
          className="w-[30.2vw] h-[619.21px]  object-cover rotate-[9.5deg] translate-y-[20px] mr-[-75px]"
          style={{ transformOrigin: "bottom left" }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="text-center mb-[80px] transition-all duration-300 ease-in-out">
        <h2 className="mb-[20px] text-[36px]">{clients[current].name}</h2>
        <p className="text-[24px] text-[#7A7777]">
          {clients[current].location}
        </p>
      </div>
    </div>
  );
}

export default ImageSlider;

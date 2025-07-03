import React from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className=" w-[52.01vw] mb-[100px] mt-[153px] mx-auto flex flex-col gap-[30px]"
    >
      <h2
        className={
          inView
            ? `text-[56px] font-[400] text-center animate-fade-up`
            : `text-[56px] font-[400] text-center opacity-0`
        }
      >
        Quality Products
      </h2>
      <p
        className={
          inView
            ? `text-[24px] font-[400] text-[#7A7777] text-center animate-fade-up-delay`
            : `text-[24px] font-[400] text-[#7A7777] text-center opacity-0`
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default About;

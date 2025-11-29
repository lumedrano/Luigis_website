"use client";

import { ContainerScroll } from "../components/container-scroll-animation";
import video from "../assets/photos/projects/aiagent.mov";
import WavingFlagBackground from "../components/WavingFlag";

export default function Test() {
  return (
    <div className="relative">
      {/* Full-page waving flag background */}
      <WavingFlagBackground />

      {/* Content on top */}
      <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px] relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black">
                  AI Agents
                </span>
              </h1>
            </>
          }
        >
          <video
            src={video}
            className="max-h-full max-w-full mx-auto my-auto rounded-2xl bg-white p-4"
            style={{ display: "block" }}
            draggable={false}
            autoPlay
            loop
            muted
            playsInline
          >
            Sorry, your browser does not support the video tag.
          </video>
        </ContainerScroll>
      </div>
    </div>
  );
}

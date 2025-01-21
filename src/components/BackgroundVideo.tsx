// components/BackgroundVideo.js
import React from "react";
const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover object-left-top"
      >
        <source
          src={"https://cdn.business.platformance.io/files/pf-auth-blue-bg.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;

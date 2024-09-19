import React, { useEffect, useState, useRef } from "react";

const VideoComponent = ({ deskvid, tabvid, mobvid }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
  );
  const desktopVideoRef = useRef(null);
  const tabletVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  };

  const playVideo = (video) => {
    if (video && hasInteracted) {
      video.play().catch((error) => {
        console.error("Video play failed", error);
      });
    }
  };

  const pauseVideo = (video) => {
    if (video) {
      video.pause();
    }
  };

  const muteVideo = (video) => {
    if (video) {
      video.muted = true;
    }
  };

  const unmuteVideo = (video) => {
    if (video) {
      video.muted = false;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);

      const desktopVideo = desktopVideoRef.current;
      const tabletVideo = tabletVideoRef.current;
      const mobileVideo = mobileVideoRef.current;

      if (isDesktop) {
        if (desktopVideo) {
          playVideo(desktopVideo);
          unmuteVideo(desktopVideo);
          pauseVideo(tabletVideo);
          pauseVideo(mobileVideo);
        }
      } else if (isTablet) {
        if (tabletVideo) {
          playVideo(tabletVideo);
          unmuteVideo(tabletVideo);
          pauseVideo(desktopVideo);
          pauseVideo(mobileVideo);
        }
      } else {
        if (mobileVideo) {
          playVideo(mobileVideo);
          unmuteVideo(mobileVideo);
          pauseVideo(desktopVideo);
          pauseVideo(tabletVideo);
        }
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [isDesktop, isTablet]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          playVideo(video);
          unmuteVideo(video);
        } else {
          pauseVideo(video);
          muteVideo(video);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const desktopVideo = desktopVideoRef.current;
    const tabletVideo = tabletVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    if (desktopVideo) observer.observe(desktopVideo);
    if (tabletVideo) observer.observe(tabletVideo);
    if (mobileVideo) observer.observe(mobileVideo);

    return () => {
      if (desktopVideo) observer.unobserve(desktopVideo);
      if (tabletVideo) observer.unobserve(tabletVideo);
      if (mobileVideo) observer.unobserve(mobileVideo);
    };
  }, [isDesktop, isTablet, hasInteracted]);

  useEffect(() => {
    const handleLoad = () => {
      const desktopVideo = desktopVideoRef.current;
      const tabletVideo = tabletVideoRef.current;
      const mobileVideo = mobileVideoRef.current;

      if (isDesktop) {
        if (desktopVideo) {
          if (hasInteracted) {
            playVideo(desktopVideo);
            unmuteVideo(desktopVideo);
            pauseVideo(tabletVideo);
            pauseVideo(mobileVideo);
          }
        }
      } else if (isTablet) {
        if (tabletVideo) {
          if (hasInteracted) {
            playVideo(tabletVideo);
            unmuteVideo(tabletVideo);
            pauseVideo(desktopVideo);
            pauseVideo(mobileVideo);
          }
        }
      } else {
        if (mobileVideo) {
          if (hasInteracted) {
            playVideo(mobileVideo);
            unmuteVideo(mobileVideo);
            pauseVideo(desktopVideo);
            pauseVideo(tabletVideo);
          }
        }
      }
    };

    window.addEventListener("load", handleLoad);
    handleLoad();

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [isDesktop, isTablet, hasInteracted]);

  useEffect(() => {
    const desktopVideo = desktopVideoRef.current;
    const tabletVideo = tabletVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    if (hasInteracted) {
      if (isDesktop) {
        if (desktopVideo) {
          playVideo(desktopVideo);
          unmuteVideo(desktopVideo);
          pauseVideo(tabletVideo);
          pauseVideo(mobileVideo);
        }
      } else if (isTablet) {
        if (tabletVideo) {
          playVideo(tabletVideo);
          unmuteVideo(tabletVideo);
          pauseVideo(desktopVideo);
          pauseVideo(mobileVideo);
        }
      } else {
        if (mobileVideo) {
          playVideo(mobileVideo);
          unmuteVideo(mobileVideo);
          pauseVideo(desktopVideo);
          pauseVideo(tabletVideo);
        }
      }
    }
  }, [isDesktop, isTablet, hasInteracted]);

  return (
    <div>
      <video
        ref={desktopVideoRef}
        loop
        autoPlay
        muted
        src={deskvid}
        className="brightness-90 lg:block hidden w-screen h-screen object-cover md:block sm:hidden"
      ></video>
      <video
        ref={tabletVideoRef}
        loop
        autoPlay
        muted
        src={tabvid}
        className="brightness-90 md:hidden hidden lg:hidden w-screen h-screen object-cover sm:block "
      ></video>
      <video
        ref={mobileVideoRef}
        loop
        autoPlay
        muted
        src={mobvid}
        className="brightness-90  block w-screen h-screen object-cover sm:hidden md:hidden"
      ></video>
    </div>
  );
};

export default VideoComponent;

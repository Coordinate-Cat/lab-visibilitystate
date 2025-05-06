"use client";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // タブが非アクティブになったら動画を停止
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <video ref={videoRef} controls width="640">
      <source src="sample.mp4" type="video/mp4" />
      お使いのブラウザは video タグをサポートしていません。
    </video>
  );
}

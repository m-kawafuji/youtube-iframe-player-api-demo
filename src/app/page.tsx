"use client";

import { useRef } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function Home() {
  const playerRef = useRef<React.ComponentRef<typeof YouTubePlayer>>(null);

  return (
    <main>
      <h1>YouTube IFrame Player API</h1>
      <YouTubePlayer
        ref={playerRef}
        options={{
          videoId: "T_WSXXPQYeY",
          playerVars: { origin: "http://localhost:3000" },
        }}
      />
      <button type="button" onClick={() => playerRef.current?.playVideo()}>
        Play
      </button>
      <button type="button" onClick={() => playerRef.current?.pauseVideo()}>
        Pause
      </button>
    </main>
  );
}

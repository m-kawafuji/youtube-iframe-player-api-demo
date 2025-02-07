"use client";

import YouTubePlayer from "@/components/YouTubePlayer";
import { useRef } from "react";

export default function Home() {
  const youtubePlayerRef =
    useRef<React.ComponentRef<typeof YouTubePlayer>>(null);

  return (
    <main>
      <h1>YouTube Player API</h1>
      <YouTubePlayer
        ref={youtubePlayerRef}
        options={{
          videoId: "T_WSXXPQYeY",
          playerVars: { origin: "http://localhost:3000" },
        }}
      />
      <button
        type="button"
        onClick={() => youtubePlayerRef.current?.playVideo()}
      >
        Play
      </button>
      <button
        type="button"
        onClick={() => youtubePlayerRef.current?.pauseVideo()}
      >
        Pause
      </button>
    </main>
  );
}

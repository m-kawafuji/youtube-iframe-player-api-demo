import { YouTubeContext } from "@/providers/YouTubeProvider";
import { use, useEffect, useImperativeHandle, useRef } from "react";

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
}

export default function YouTubePlayer({
  ref,
  options,
}: {
  ref: React.RefObject<YouTubePlayer | null>;
  options: YT.PlayerOptions;
}) {
  const { isApiReady } = use(YouTubeContext);
  const youtubePlayerRef = useRef<YT.Player | null>(null);
  const replacedElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isApiReady) return;
    if (!replacedElementRef.current) return;

    youtubePlayerRef.current = new YT.Player(
      replacedElementRef.current,
      options,
    );

    return () => {
      youtubePlayerRef.current?.destroy();
    };
  }, [isApiReady, options]);

  useImperativeHandle(
    ref,
    () => {
      return {
        playVideo() {
          youtubePlayerRef.current?.playVideo();
        },
        pauseVideo() {
          youtubePlayerRef.current?.pauseVideo();
        },
      };
    },
    [],
  );

  return <div ref={replacedElementRef} />;
}

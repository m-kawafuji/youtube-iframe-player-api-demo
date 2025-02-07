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
  const playerRef = useRef<YT.Player | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isApiReady) return;
    if (!elementRef.current) return;

    playerRef.current = new YT.Player(elementRef.current, options);

    return () => {
      playerRef.current?.destroy();
    };
  }, [isApiReady, options]);

  useImperativeHandle(
    ref,
    () => {
      return {
        playVideo() {
          playerRef.current?.playVideo();
        },
        pauseVideo() {
          playerRef.current?.pauseVideo();
        },
      };
    },
    [],
  );

  return <div ref={elementRef} />;
}

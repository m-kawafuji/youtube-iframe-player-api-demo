"use client";

import { createContext, useEffect, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady(): void;
  }
}

export const YouTubeContext = createContext({
  isApiReady: false,
});

export function YouTubeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };
    setIsMounted(true);
  }, []);

  return (
    <YouTubeContext value={{ isApiReady }}>
      {isMounted && <script src="https://www.youtube.com/iframe_api" async />}
      {children}
    </YouTubeContext>
  );
}

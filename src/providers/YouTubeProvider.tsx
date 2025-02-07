"use client";

import { createContext, useEffect, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export const YouTubeContext = createContext({
  isApiReady: false,
});

export function YouTubeProvider({ children }: { children: React.ReactNode }) {
  const [isApiReady, setIsApiReady] = useState(false);
  const [isApiReadyEventDefined, setIsApiReadyEventDefined] = useState(false);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };
    setIsApiReadyEventDefined(true);
  }, []);

  return (
    <YouTubeContext value={{ isApiReady }}>
      {isApiReadyEventDefined && (
        <script src="https://www.youtube.com/iframe_api" async />
      )}
      {children}
    </YouTubeContext>
  );
}

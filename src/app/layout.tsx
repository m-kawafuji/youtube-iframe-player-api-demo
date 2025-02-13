import type { Metadata } from "next";
import { YouTubeProvider } from "@/providers/YouTubeProvider";

export const metadata: Metadata = {
  title: "YouTube IFrame Player API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <YouTubeProvider>{children}</YouTubeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Papa Yaw Ataamle's comedy videos, stand-up clips, and full specials. Laugh out loud with Ghana's funniest comedian.",
  openGraph: {
    title: "Comedy Videos - Papa Yaw Ataamle",
    description:
      "Watch Papa Yaw Ataamle's comedy videos, stand-up clips, and full specials.",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

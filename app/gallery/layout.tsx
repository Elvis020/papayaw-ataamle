import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Papa Yaw Ataamle - behind-the-scenes moments, show highlights, and tour memories from Ghana's top comedian.",
  openGraph: {
    title: "Photo Gallery - Papa Yaw Ataamle",
    description:
      "Browse photos of Papa Yaw Ataamle - behind-the-scenes moments, show highlights, and tour memories.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

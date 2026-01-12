import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Papa Yaw Ataamle, Ghana's rising comedy star. From humble beginnings to sold-out shows, discover the journey of this talented Ghanaian comedian.",
  openGraph: {
    title: "About Papa Yaw Ataamle",
    description:
      "Learn about Papa Yaw Ataamle, Ghana's rising comedy star. From humble beginnings to sold-out shows.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

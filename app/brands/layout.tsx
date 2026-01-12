import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Partnerships",
  description:
    "Explore Papa Yaw Ataamle's brand collaborations and partnerships. Work with Ghana's most engaging comedian for your next campaign.",
  openGraph: {
    title: "Brand Partnerships - Papa Yaw Ataamle",
    description:
      "Explore Papa Yaw Ataamle's brand collaborations and partnerships.",
  },
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

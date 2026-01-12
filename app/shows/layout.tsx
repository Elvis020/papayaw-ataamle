import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows & Events",
  description:
    "See Papa Yaw Ataamle live! Check upcoming comedy shows, tour dates, and events. Book tickets to see Ghana's funniest comedian perform.",
  openGraph: {
    title: "Live Shows - Papa Yaw Ataamle",
    description:
      "See Papa Yaw Ataamle live! Check upcoming comedy shows, tour dates, and events.",
  },
};

export default function ShowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

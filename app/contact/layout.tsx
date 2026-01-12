import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Papa Yaw Ataamle for your event, venue, or brand partnership. Get in touch for comedy show bookings and media inquiries.",
  openGraph: {
    title: "Contact Papa Yaw Ataamle",
    description:
      "Book Papa Yaw Ataamle for your event, venue, or brand partnership.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

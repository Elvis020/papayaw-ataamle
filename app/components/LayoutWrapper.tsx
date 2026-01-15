"use client";

import TopLoadingBar from "./TopLoadingBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopLoadingBar />
      {children}
    </>
  );
}

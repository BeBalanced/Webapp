"use client";
import Sidebar from "@/components/providers/sidebar";
export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}

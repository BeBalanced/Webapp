import Sidebar from "@/components/layout/sidebar";
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

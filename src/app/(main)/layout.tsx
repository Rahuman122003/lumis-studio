import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      {children}
    </>
  );
}

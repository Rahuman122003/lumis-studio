import Link from "next/link";
import { MetalButton } from "@/components/ui/metal-button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#B5B5B5] text-[#111111]">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[#333333] max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <MetalButton href="/" variant="primary">
        Return Home
      </MetalButton>
    </main>
  );
}

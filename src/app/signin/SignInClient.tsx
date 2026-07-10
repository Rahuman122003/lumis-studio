"use client";

import dynamic from "next/dynamic";

// ssr:false prevents @react-three/fiber from running on the server
const SignInPage = dynamic(
  () => import("@/components/ui/sign-in-flow-1").then((m) => ({ default: m.SignInPage })),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen w-full items-center justify-center bg-black">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    ),
  }
);

export default function SignInClient() {
  return <SignInPage />;
}

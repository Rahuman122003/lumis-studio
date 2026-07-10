// Force this route to be server-dynamic so Next.js never tries to
// prerender it at build time (three.js needs a real browser context).
export const dynamic = "force-dynamic";

import SignInClient from "./SignInClient";

export default function SignInRoute() {
  return <SignInClient />;
}

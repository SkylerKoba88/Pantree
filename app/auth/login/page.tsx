import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback="Loading...">
      <section>
        <h1>Login</h1>
        <p>Please log in to your account.</p>
      </section>
    </Suspense>

  );
}
import { createFileRoute } from "@tanstack/react-router";

import WelcomePage from "~/features/public/welcome/pages";

export const Route = createFileRoute("/(public)/_public/welcome")({
  component: () => <WelcomePage />,
  errorComponent: ({ error }) => (
    <div
      role="alert"
      className="flex min-h-screen items-center justify-center p-4"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Error Loading Welcome Page</h1>
        <pre className="mt-4">{error.message}</pre>
      </div>
    </div>
  ),
});

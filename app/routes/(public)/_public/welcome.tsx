import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import WelcomePage from "~/features/public/welcome/pages";

const stepSearchSchema = z.object({
  step: fallback(z.number(), 1).default(1),
  submit: fallback(z.boolean(), false).default(false),
});

export const Route = createFileRoute("/(public)/_public/welcome")({
  validateSearch: zodValidator(stepSearchSchema),
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

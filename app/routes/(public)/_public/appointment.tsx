import { createFileRoute } from "@tanstack/react-router";

import AppointmentPage from "~/features/public/appointment/pages";

export const Route = createFileRoute("/(public)/_public/appointment")({
  component: () => <AppointmentPage />,
  errorComponent: ({ error }) => (
    <div
      role="alert"
      className="flex min-h-screen items-center justify-center p-4"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Error Loading Appointment Page</h1>
        <pre className="mt-4">{error.message}</pre>
      </div>
    </div>
  ),
});

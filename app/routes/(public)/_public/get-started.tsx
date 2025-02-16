import { createFileRoute } from "@tanstack/react-router";

import GetStartedPage from "~/features/public/get-started/pages";

export const Route = createFileRoute("/(public)/_public/get-started")({
  component: () => <GetStartedPage />,
});

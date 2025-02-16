import { createFileRoute } from "@tanstack/react-router";

import WelcomePage from "~/features/public/welcome/pages";

export const Route = createFileRoute("/(public)/_public/welcome")({
  component: () => <WelcomePage />,
});

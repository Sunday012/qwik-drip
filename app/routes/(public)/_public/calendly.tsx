import { createFileRoute } from "@tanstack/react-router";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export const Route = createFileRoute("/(public)/_public/calendly")({
  component: RouteComponent,
});

function RouteComponent() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  return (
    <InlineWidget
      styles={{
        height: "1000px",
      }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      }}
      url="https://calendly.com/dr-u-e-ekong/weight-loss-consultation-1"
    />
  );
}

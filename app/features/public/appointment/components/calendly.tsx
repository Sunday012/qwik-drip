import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export function Calendly() {
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
        height: "768px",
      }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "4272DD",
        textColor: "4d5055",
      }}
      url={CALENDLY_URL}
    />
  );
}

import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export function Calendly() {
  useCalendlyEventListener({
    onProfilePageViewed: (e) =>
      console.log("onProfilePageViewed", e.data.payload),
    onDateAndTimeSelected: (e) =>
      console.log("onDateAndTimeSelected", e.data.payload),
    onEventTypeViewed: (e) => console.log("onEventTypeViewed", e.data.payload),
    onEventScheduled: (e) => console.log("onEventScheduled", e.data.payload),
    onPageHeightResize: (e) =>
      console.log("onPageHeightResize", e.data.payload),
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

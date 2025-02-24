import { Loader2 } from "lucide-react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

import { useEventStore } from "~/features/public/welcome/store/use-event-store";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export function Calendly() {
  const { setEvent, setInvitee } = useEventStore();

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log("onEventScheduled", e.data.payload);
      setEvent(e.data.payload.event.uri);
      setInvitee(e.data.payload.invitee.uri);
    },
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
      LoadingSpinner={() => (
        <div className="flex h-full w-full items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}
      url={CALENDLY_URL}
    />
  );
}

import { createServerFn } from "@tanstack/start";
import { setResponseStatus } from "@tanstack/start/server";
import { z } from "zod";

import { EventResource, EventResponse } from "../types";

export const getServerTime = createServerFn({ method: "GET" }).handler(
  async () => {
    setResponseStatus(200);
    return new Date().toISOString();
  },
);

const Event = z.object({
  url: z.string().url(),
});

export const getCalendlyEvent = createServerFn({ method: "GET" })
  .validator((event: unknown) => {
    return Event.parse(event);
  })
  .handler(async (ctx) => {
    const response = await fetch(`${ctx.data.url}/invitees`, {
      headers: {
        Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
      },
    });
    console.log("Event", response);
    return response.json() as unknown as EventResponse;
  });

export const getEventResource = createServerFn({ method: "GET" })
  .validator((event: unknown) => {
    return Event.parse(event);
  })
  .handler(async (ctx) => {
    const response = await fetch(`${ctx.data.url}`, {
      headers: {
        Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
      },
    });
    console.log("EventResource", response);
    return response.json() as unknown as EventResource;
  });

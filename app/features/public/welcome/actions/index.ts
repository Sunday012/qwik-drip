import { createServerFn } from "@tanstack/start";
import { z } from "zod";

import { EventResource, EventResponse } from "../types";

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

    return response.json() as unknown as EventResource;
  });

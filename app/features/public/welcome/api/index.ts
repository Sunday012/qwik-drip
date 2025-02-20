import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/start";
import { createQuery } from "react-query-kit";

import { getCalendlyEvent, getEventResource, getServerTime } from "../actions";
import { EventResource, EventResponse } from "../types";

type GetEventVariables = { url: string };
type GetEventResponse = EventResponse;

type GetEventResourceVariables = { url: string };
type GetEventResourceResponse = EventResource;

export const useGetEventQuery = createQuery<
  GetEventResponse,
  GetEventVariables
>({
  queryKey: ["get-event"],
  fetcher: async (variables) => {
    const getEventServerFn = useServerFn(getCalendlyEvent);
    return getEventServerFn({ data: variables });
  },
});

export const useGetEventResourceQuery = createQuery<
  GetEventResourceResponse,
  GetEventResourceVariables
>({
  queryKey: ["get-event-resource"],
  fetcher: async (variables) => {
    const getEventResourceServerFn = useServerFn(getEventResource);
    return getEventResourceServerFn({ data: variables });
  },
});

export const useGetServerTimeQuery = createQuery<string, void>({
  queryKey: ["get-server-time"],
  fetcher: async () => {
    const getServerTimeServerFn = useServerFn(getServerTime);
    return getServerTimeServerFn();
  },
});

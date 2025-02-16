import { type AxiosError } from "axios"
import { createQuery } from "react-query-kit"

import { httpClient, type ErrorResponse } from "~/lib/client"

type LessonsVariables = { child_id: string }
type LessonsResponse = any[]

export const useGenerateLessonQuery = createQuery<
  LessonsResponse,
  LessonsVariables,
  AxiosError<ErrorResponse>
>({
  queryKey: ["generate-lessons"],
  fetcher: async (variables) => {
    return httpClient
      .get("/webapp/recommender/generate-schedule", {
        params: {
          child_id: variables.child_id,
        },
      })
      .then((res) => res.data as LessonsResponse)
  },
})

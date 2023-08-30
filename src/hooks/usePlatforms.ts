import { FetchResponse } from "../sevices/api-client"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../sevices/api-client.js"
import platforms from "../data/platforms.js"

export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  })

export default usePlatforms

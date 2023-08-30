import APIClient from "../sevices/api-client"
import { useQuery } from "@tanstack/react-query"
import platforms from "../data/platforms.js"
import ms from "ms"

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  })

export default usePlatforms

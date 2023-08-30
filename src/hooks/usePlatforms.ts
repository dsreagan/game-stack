import useData, { FetchResponse } from "./useData.js"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../sevices/api-client.js"
import PlatformSelector from "../components/PlatformSelector.js"

interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000
  })

export default usePlatforms

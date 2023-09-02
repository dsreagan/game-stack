import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre.js"
import usePlatform from "../hooks/usePlatform.js"
import useGameQueryStore from "../store.js"

export default function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const genre = useGenre(genreId)

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  )
}

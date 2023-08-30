import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App.js"
import useGenres from "../hooks/useGenres.js"
import usePlatforms from "../hooks/usePlatforms.js"

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres()
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId)

  const { data: platforms } = usePlatforms()
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  )
}

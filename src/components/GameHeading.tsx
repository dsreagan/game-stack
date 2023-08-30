import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App.js"
import useGenre from "../hooks/useGenre.js"
import usePlatform from "../hooks/usePlatform.js"

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`
  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  )
}
import { Text, SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames.js"
import GameCard from "./GameCard.js"
import GameCardContainer from "./GameCardContainer.js"
import GameCardSkeleton from "./GameCardSkeleton.js"

const GameGrid = () => {
  const { data, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid

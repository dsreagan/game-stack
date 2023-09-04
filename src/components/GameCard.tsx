import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Game } from "../hooks/useGames.js"
import getCroppedImageUrl from "../sevices/image-url.js"
import CriticScore from "./CriticScore.js"
import Emoji from "./Emoji.js"
import PlatformIconList from "./PlatformIconList.js"

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

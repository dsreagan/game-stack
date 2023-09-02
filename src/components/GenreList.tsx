import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres.js"
import getCroppedImageUrl from "../sevices/image-url.js"
import useGameQueryStore from "../store.js"


export default function GenreList() {
  const { data, isLoading, error } = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

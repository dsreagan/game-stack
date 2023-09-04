import useTrailers from "../hooks/useTrailer"

interface Props {
  gameId: number
}

export default function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId)

  if (isLoading) return null

  if (error) throw error

  const first = data?.results[0]

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null
}

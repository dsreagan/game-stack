import useGenres from "../hooks/useGenres.js"

export default function GenreList() {
  const { genres } = useGenres()
  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

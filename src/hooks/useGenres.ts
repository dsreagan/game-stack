import useData from "./useData.js"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => useData<Genre>("/genres")

export default useGenres

import axios from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '66218bbb86e74f5a9142b45c8ecccede'
    }
})
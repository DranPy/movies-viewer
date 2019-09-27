import axios, { CancelToken, isCancel } from 'axios'
import get from 'lodash/get'
import humps from 'humps'
import { toast } from 'react-toastify'

// TODO: to .env
const baseURL = 'https://www.omdbapi.com/'

const instance = axios.create({
  baseURL,
  transformRequest: [
    data => humps.decamelizeKeys(get(data, 'data')),
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [...axios.defaults.transformResponse, data => humps.camelizeKeys(data)],
})

// TODO: to .env
instance.interceptors.request.use(config => ({
  ...config,
  params: { apikey: '42b36700', ...config.params },
}))

instance.interceptors.response.use(
  response => response,
  error => {
    if (!isCancel(error)) {
      toast.error('Something went wrong.')
    }

    return Promise.reject(error)
  },
)

export const getCanceller = () => CancelToken.source()

export default instance

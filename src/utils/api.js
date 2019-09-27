import axios from 'utils/axios'

/**
 * Get movie
 * @param {object} params
 * @param {string} params.id
 * @param {string} params.title
 * @param {string} [params.type]
 * @param {number} [params.year]
 * @param {string} [params.plot]
 * @param {{}} [config] - axios config
 */
export const fetchMovie = (params, config) => {
  const { id, title, type, year, plot, ...rest } = params

  return axios
    .get('/', {
      params: {
        type,
        plot,
        i: id,
        t: title,
        y: year,
        ...rest,
      },
      ...config,
    })
    .then(({ data }) => data)
}

/**
 * Get movies by query string
 * @param {object} params
 * @param {string} params.search
 * @param {string} [params.type]
 * @param {number} [params.year]
 * @param {string} [params.plot]
 * @param {number} [params.page]
 * @param {{}} [config] - axios config
 */
export const fetchMovies = (params, config) => {
  const { search, page, type, year, plot, ...rest } = params

  return axios
    .get('/', {
      params: {
        type,
        plot,
        page,
        s: search,
        y: year,
        ...rest,
      },
      ...config,
    })
    .then(({ data }) => data)
}

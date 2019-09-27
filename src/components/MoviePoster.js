import React from 'react'
import PropTypes from 'prop-types'

import NoPoster from 'assets/images/no-poster.png'

const MoviePoster = props => {
  const { poster, title } = props

  return (
    <div className="movie-poster">
      <h3 className="movie-poster__title">{title}</h3>
      <img
        alt="Movie poster"
        className="movie-poster__img"
        src={poster !== 'N/A' ? poster : NoPoster}
      />
    </div>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MoviePoster

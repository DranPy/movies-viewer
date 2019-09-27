import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetchMovie } from 'utils/api'
import MoviePoster from 'components/MoviePoster'

class DetailsPage extends Component {
  state = {
    movie: {},
    isMovieLoading: true,
  }

  componentDidMount() {
    const {
      params: { id },
    } = this.props.match
    this.getMovie(id)
  }

  getMovie = id => {
    this.setState({
      isMovieLoading: true,
    })

    fetchMovie({ id }).then(movie => {
      this.setState({
        movie,
        isMovieLoading: false,
      })
    })
  }

  render() {
    const { movie, isMovieLoading } = this.state

    return (
      <div className="details-page">
        <Link className="details-page__back" to="/">
          Back to main
        </Link>
        {isMovieLoading ? (
          'Loading...'
        ) : (
          <div className="movie">
            <MoviePoster poster={movie.poster} title={movie.title} />
            <div className="movie__info">
              <p>Autors: {movie.actors}</p>
              <p>Year: {movie.year}</p>
              <p>Country: {movie.country}</p>
              <p>Genre: {movie.genre}</p>
              <p>Type: {movie.type}</p>
              <p>Released: {movie.released}</p>
              <p>Production: {movie.production}</p>
              <p>Awards: {movie.awards}</p>
              <p>
                IMDB rating/votees: {movie.imdbRating}/{movie.imdbVotes}
              </p>
              <hr />
              <p>{movie.plot}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
}

export default DetailsPage

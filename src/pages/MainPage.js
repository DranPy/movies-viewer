import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchMovies } from 'utils/api'
import MoviePoster from 'components/MoviePoster'

class Main extends Component {
  state = {
    searchString: 'Gallipoli',
    year: '',
    type: '',
    movies: [],
    isMoviesLoading: true,
  }

  componentDidMount() {
    this.getMovies({
      search: this.state.searchString,
    })
  }

  getMovies = params => {
    this.setState({
      isMoviesLoading: true,
    })

    fetchMovies(params).then(result => {
      let movies = []

      if (result.response === 'True') {
        movies = result.search
      }

      this.setState({
        movies,
        isMoviesLoading: false,
      })
    })
  }

  handleChangeSearchString = event => this.setState({ searchString: event.target.value })

  handleChangeYear = event => this.setState({ year: event.target.value })

  handleChangeType = event => this.setState({ type: event.target.value })

  handleSearch = event => {
    event.preventDefault()
    const { searchString, year, type } = this.state
    this.getMovies({ search: searchString, year, type })
  }

  render() {
    const { isMoviesLoading, movies, searchString, year, type } = this.state

    return (
      <div className="main-page">
        <form className="main-page__filter" onSubmit={this.handleSearch}>
          <input
            className="main-page__filter-title"
            onChange={this.handleChangeSearchString}
            placeholder="Type movie title"
            type="text"
            value={searchString}
          />
          <input
            className="main-page__filter-year"
            onChange={this.handleChangeYear}
            placeholder="Year"
            type="text"
            value={year}
          />
          <input
            className="main-page__filter-type"
            onChange={this.handleChangeType}
            placeholder="Type: movie, series..."
            type="text"
            value={type}
          />
          <button className="main-page__filter-btn" type="submit">
            Search
          </button>
        </form>
        <div className="movies-list">
          {isMoviesLoading
            ? 'Loading...'
            : movies.map(movie => (
                <Link
                  className="movies-list__item"
                  key={movie.imdbID}
                  to={`/movie/${movie.imdbID}`}
                >
                  <MoviePoster poster={movie.poster} title={movie.title} />
                </Link>
              ))}
        </div>
      </div>
    )
  }
}

export default Main

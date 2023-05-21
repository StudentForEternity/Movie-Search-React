import React from "react"
import MovieCard from "./MovieCard"
export default function SearchMovie() {
  const [query, setQuery] = React.useState("")
  const [movie, setMovie] = React.useState([])

  const url = `https://api.themoviedb.org/3/search/movie?api_key=00080e671eebb6cb0e837ddce2c629ff&language=en-US&query=${query}&page=1&include_adult=false`

  async function searchMovies(e) {
    e.preventDefault()

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovie(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  function handleSubmit(e) {
    console.log(`typing`)
    setQuery(e.target.value)
  }

  return (
    <section>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          placeholder="i.e. Jurassic Park"
          name="query"
          value={query}
          onChange={handleSubmit}
        />
        <button className="button" type="submit">
          search
        </button>
      </form>
      <div className="card-list">
        {movie
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />
          })}
      </div>
    </section>
  )
}

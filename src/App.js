import { render } from "react-dom";
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";

//컴포넌트는 html을 반환하는 함수.
class App extends  React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({movies, isLoading: false});
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? <div className="loader">
                    <span className="loader text">Loading</span>
                </div>: (
                    <div className="movies">
                        {movies.map(movie =>  (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                    </div>
                )}
            </section>
        )
    }
}
export default App;
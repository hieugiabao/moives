import React from "react";
import {useParams} from "react-router-dom"
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import Grid from "./Grid";
import Spinner from './Spinner'
import {useMovieFetch} from '../hooks/useMovieFetch'
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from './MovieInfoBar'
import Actor from "./Actor";
import NoImage from "../images/no_image.jpg"

const Movie = () => {
    const {movieId} = useParams()
    const {state: movie, loading, error} = useMovieFetch(movieId)
    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
              time={movie.runtime} 
              budget={movie.budget}
              revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor
                      key={actor.credit_id}
                      name={actor.name}
                      character={actor.character}
                      imageurl={
                        actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                      }
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie
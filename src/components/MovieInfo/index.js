import React from "react";
import Thumb from '../Thumb'
import { Wrapper, Content, Text } from "./Movie.styles";

import {IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'
 
const MovieInfo = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
              clickable={false}
              alt='movie-thumb'
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <ul className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <li key={director.credit_id}>{director.name}</li>
                        ))}
                    </ul>
                </div>
            </Text>
        </Content>
    </Wrapper>

)

export default MovieInfo
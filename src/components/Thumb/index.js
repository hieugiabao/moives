import React from "react";
import {Link} from 'react-router-dom'
import { Image } from './Thumb.styled'

const Thumb = ({ image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' unclick/>
        )}
    </div>
)

export default Thumb
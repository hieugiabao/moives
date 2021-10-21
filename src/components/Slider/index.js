import React, {useState, useEffect} from "react";
import { Wrapper, Content, Navigation } from './Slider.styles'
import HeroImage from './HeroImgae'
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../../config'

const Slider = ({movies}) => {
    const movieCount = movies.length
    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlideInfinite = () => {
        if (currentSlide === movies.length-1)
            setCurrentSlide(0)
        else setCurrentSlide(prev => prev+1)
    }
    const nextSlide = (nextSlide) => {
        if (nextSlide <= currentSlide && typeof slideId!=='undefined') return
        const current = document.querySelector(`#slide-${currentSlide}`)
        // if (current)
            current.setAttribute('class', 'singleSlide slideOutLeft')
        
        const id = nextSlide ?? currentSlide===movieCount-1 ? 0 : currentSlide+1
        const next = document.querySelector(`#slide-${id}`)
        // if (next)
            next.setAttribute('class', 'singleSlide display slideInRight')
    }

    useEffect(() => {
        
        setTimeout(()=> {
            nextSlide()
            // showSlideInfinite()
        }, 3000)
    }, [currentSlide])
       
    return (
        <Wrapper>
            <Content>
                {movies.map((movie,index) => (
                    <HeroImage 
                        className="singleSlide"
                        defi={`slide-${index}`}
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                        title={movie.original_title}
                        text={movie.overview}
                    />
                ))}
                
            </Content> 
        </Wrapper>
    )
}

export default Slider
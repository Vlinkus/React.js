
import { useState } from 'react';
import india from '../Images/India.jpg';
import kenya from '../Images/Kenya.jpg';
import guatemala from '../Images/Guatemala.jpg';
import { useEffect } from 'react';
import './carousel.css';

export default function Carousel() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [maxIndex, setMaxIndex] = useState(3);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function nextSlide() {  
        const index = slideIndex === maxIndex ? 1: slideIndex + 1;
        setSlideIndex(index);
    }
    function prevSlide() {  
        const index = slideIndex === 1? maxIndex: slideIndex - 1;
        setSlideIndex(index);
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > maxIndex) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(maxIndex);
        }
        for (let i = 0; i < maxIndex; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("activeDot");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add("activeDot");
    }
    return (
        <div className='slide-Show-component'>
            <div className="slideshow-container">
                <div className="mySlides">
                    <div className="relativeCarouselDiv">
                        <img src={india} className="CarouselImage" alt="Slide 1 background" />
                        <div className='absoluteCarouselDivLeft'>
                            <h3>Slide 1 Left Side</h3>
                        </div>
                        <div className='absoluteCarouselDivRight'>
                            <h3>Slide 1 Right Side</h3>
                        </div>
                    </div>
                </div>
                <div className="mySlides">
                    <div className="relativeCarouselDiv">
                        <img src={kenya} className="CarouselImage" alt="Slide 2 background" />
                        <div className='absoluteCarouselDivLeft'>
                            <h3>Slide 2 Left Side</h3>
                        </div>
                        <div className='absoluteCarouselDivRight'>
                            <h3>Slide 2 Right Side</h3>
                        </div>
                    </div>
                </div>
                <div className="mySlides">
                    <div className="relativeCarouselDiv">
                        <img src={guatemala} className="CarouselImage" alt="Slide 3 background" />
                        <div className='absoluteCarouselDivLeft'>
                            <h3>Slide 3 Left Side</h3>
                        </div>
                        <div className='absoluteCarouselDivRight'>
                            <h3>Slide 3 Right Side</h3>
                        </div>

                    </div>
                </div>
                <a className="prev" onClick={() => prevSlide()}>❮</a>
                <a className="next" onClick={() => nextSlide()}>❯</a>
            </div>
            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    );
}
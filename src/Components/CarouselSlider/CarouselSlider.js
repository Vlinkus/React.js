import { useEffect, useState } from "react";
import "./carouselSlider.css";
import { faLongArrowAltLeft, faLongArrowAltRight, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flower1 from "../Images/flower1.jpg";
import flower2 from "../Images/flower2.jpg";
import flower3 from "../Images/flower3.jpg";
import flower4 from "../Images/flower4.jpg";
import flower5 from "../Images/flower5.jpg";


const initialSlidesList = [
    {text: "Content Section 1", picture: flower1}, 
    {text: "Content Section 2", picture: flower2}, 
    {text: "Content Section 3", picture: flower3}
];
const flowerList = [flower1, flower2, flower3, flower4, flower5];

export default function CarouselSlider(){
    const [sliderTransForm, setSliderTransform] = useState("translateX(0)");
    const [slideIndex, setSlideIndex] = useState(0);
    const [transformationPercentage, setTransformationPercentage] = useState(0);
    const [sliderWidth, setSliderWidth] = useState("100 %");
    const [slidesList, setSlidesList] = useState(initialSlidesList);

    useEffect(() => {
        setTransformationPercentage((100 / slidesList.length));
        setSliderWidth(`${100 * slidesList.length}%`);
        setSliderTransform("translateX(0)");
        setSlideIndex(0);
    }, [slidesList]);
    const handlePrevious = () => {
        setSlideIndex((previousSlideIndex) => {
            const nextIndex = previousSlideIndex === 0 ? slidesList.length - 1 : slideIndex - 1;
            setSliderTransform("translateX(" + (-nextIndex * transformationPercentage) + "%)");
            return nextIndex
        })
    }
    const handleNext = () => {
        setSlideIndex((previousSlideIndex) => {
            const nextIndex = previousSlideIndex === slidesList.length - 1 ? 0 : slideIndex + 1;
            setSliderTransform("translateX(" + (-nextIndex * transformationPercentage) + "%)");
            return nextIndex;
        })
    }
    const addSlide = () => {
        const newSlide = {text: `Content Section ${slidesList.length + 1}`, picture: getFlower()};
        setSlidesList([...slidesList, newSlide]);
    }
    const removeSlide = () => {
        const newSlideList = slidesList.length === 1 ? slidesList : slidesList.slice(0, -1);
        setSlidesList(newSlideList);
    }
    const getFlower = () => {
        const floweIndex = Math.floor(Math.random() * flowerList.length);
        return flowerList[floweIndex];
    }
    return (
            <div className="container-slider">
                {/* <div className="carouselInformation">
                    <h4>Carousel</h4>
                </div> */}
                <div className="carouselSlider">
                    <div className="slider" style={{ transform: sliderTransForm, width: sliderWidth }}>
                        {slidesList.map((slides, index) =>
                            <section key={index} className="slides" >
                                <img src={slides.picture} alt="flower" className="slideImage" />
                                 <div className='absolutePositionInSlide'>
                                    {slides.text}
                                </div>
                            </section>
                        )}
                    </div>
                    <div className="controls">
                        <span className="arrow left" onClick={handlePrevious} > 
                            <FontAwesomeIcon className="fontArrow" icon={faLongArrowAltLeft} size="2x"/> 
                        </span>
                        <span className="arrow right" onClick={handleNext} > 
                            <FontAwesomeIcon className="fontArrow" icon={faLongArrowAltRight} size="2x"/> 
                        </span>
                    </div>
                </div>
            <div className="slidesAddition">
                <div className="centered-content">
                    <button onClick={addSlide} type="button" className="btn btn-outline-success btn-sm slideButton">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span>Change Slide Count</span>
                    <button onClick={removeSlide} type="button" className="btn btn-outline-danger btn-sm slideButton">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <div className="slidesCount">
                    <span>Slides Count:</span>
                    <div className="slidesCount-box">{slidesList.length}</div>
                </div>
                <div className="slidesInfo">
                    <h5>Carousel Information</h5>
                    <div className="slidesInfo-box">
                            Carousel slide change made using<br/> transfor: translateX
                    </div>
                </div>
            </div>
            </div>
    );
}
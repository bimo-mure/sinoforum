import { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Image,
  LeftArrow,
  RigthArrow,
  InfoBox,
  Title,
  Author,
  Shadow,
} from "./HeroSliderStyles";
import { SlideShow } from "../../Anim/Animation";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HeroSlider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const timeRef = useRef();

  function goToPreviousSlide() {
    setIsNext(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNextSlide = useCallback(() => {
    setIsNext(true);
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, data]);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goToNextSlide();
    }, 6000);

    return () => clearTimeout(timeRef.current);
  }, [goToNextSlide]);

  return (
    <Container>
      <LeftArrow
        onClick={goToPreviousSlide}
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <FiChevronLeft />
      </LeftArrow>
      <Image
        src={data[currentIndex].imgUrl}
        variants={SlideShow}
        initial="initial"
        animate="animate"
        exit="exit"
        key={currentIndex}
        custom={isNext}
      />
      <Shadow />
      <InfoBox>
        <Link to={data[currentIndex].to}>
          <Title>{data[currentIndex].title}</Title>
          <Author>{data[currentIndex].author}</Author>
        </Link>
      </InfoBox>
      <RigthArrow
        onClick={goToNextSlide}
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <FiChevronRight />
      </RigthArrow>
    </Container>
  );
}

HeroSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroSlider;

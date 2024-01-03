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

const slide = [
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Priska Limandar",
    imgUrl: "/1.jpg",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Johanes Herlinajto",
    imgUrl: "/2.jpg",
  },
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const timeRef = useRef();

  function goToPreviousSlide() {
    setIsNext(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNextSlide = useCallback(() => {
    setIsNext(true);
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

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
        src={slide[currentIndex].imgUrl}
        variants={SlideShow}
        initial="initial"
        animate="animate"
        exit="exit"
        key={currentIndex}
        custom={isNext}
      />
      <Shadow />
      <InfoBox>
        <Title>{slide[currentIndex].title}</Title>
        <Author>{slide[currentIndex].author}</Author>
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

export default HeroSlider;

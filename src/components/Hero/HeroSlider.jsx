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
import { PostPropTypes } from "../../data/PostPropType";

function HeroSlider({ isLoading, data }) {
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

  if (isLoading) return <div>Loading...</div>;

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

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
        src={
          import.meta.env.VITE_URL +
          data[currentIndex]?.attributes?.featuredImage?.image?.data?.attributes
            ?.url
        }
        variants={SlideShow}
        initial="initial"
        animate="animate"
        exit="exit"
        key={currentIndex}
        custom={isNext}
      />
      <Shadow />
      <InfoBox>
        <Link
          to={`${data[currentIndex]?.attributes?.category?.data?.attributes?.slug}/${data[currentIndex]?.attributes.slug}`}
        >
          <Title>{data[currentIndex]?.attributes?.postTitle}</Title>
          <Author>
            {
              data[currentIndex]?.attributes?.postInfo?.author?.data?.attributes
                ?.fullName
            }
          </Author>
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

HeroSlider.defaultProps = {
  data: [],
};

HeroSlider.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
};

export default HeroSlider;

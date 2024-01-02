export const Slide = {
  hidden: { x: -500, transition: { duration: 0.3 } },
  visible: { x: 0, transition: { duration: 0.3 } },
};

export const NavItem = {
  visible: { transition: { staggerChildren: 0.09 } },
};

export const SlideShow = {
  initial: (isNext) => {
    return {
      x: isNext ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3 },
    };
  },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: (isNext) => {
    return {
      x: isNext ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3 },
    };
  },
};

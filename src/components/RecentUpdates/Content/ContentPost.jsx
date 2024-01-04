import { Link } from "react-router-dom";
import {
  ContainerWraper,
  GridContainer,
  Image,
  ContentContainer,
  Category,
  PostTitle,
  Author,
} from "./ContentPostStyles";
import PropTypes from "prop-types";

function ContentPost({ children }) {
  return (
    <ContainerWraper>
      <GridContainer>
        {children.map((item) => (
          <>
            <Link to={item.to}>
              <Image src={item.imgUrl} />
            </Link>
            <ContentContainer to={item.to}>
              <Category>{item.category}</Category>
              <PostTitle>{item.title}</PostTitle>
              <Author>{item.author}</Author>
              <p>{item.excerpt}</p>
            </ContentContainer>
          </>
        ))}
      </GridContainer>
    </ContainerWraper>
  );
}

ContentPost.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContentPost;

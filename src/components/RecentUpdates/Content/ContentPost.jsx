import {
  ContainerWraper,
  Container,
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
      {children.map((item, index) => (
        <Container key={index} to={item.to}>
          <Image src={item.imgUrl} />
          <ContentContainer>
            <Category>{item.category}</Category>
            <PostTitle>{item.title}</PostTitle>
            <Author>{item.author}</Author>
            <p>{item.excerpt}</p>
          </ContentContainer>
        </Container>
      ))}
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

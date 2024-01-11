import {
  Section,
  Container,
  Image,
  PostTitle,
  Category,
  Author,
  TextBox,
} from "./SidebarContentStyles";
import PropTypes from "prop-types";

function SidebarContent({ children }) {
  return (
    <Section>
      {children.map((item, index) => (
        <Container key={index}>
          <Image src={item.imgUrl} />
          <TextBox>
            <Category>{item.category}</Category>
            <PostTitle>{item.title}</PostTitle>
            <Author>{item.author}</Author>
          </TextBox>
        </Container>
      ))}
    </Section>
  );
}

SidebarContent.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SidebarContent;

import {
  GridContainer,
  Sidebar,
  Main,
  Section,
  Container,
  Heading,
  MainContainer,
  Image,
  PostTitle,
  Author,
  SidebarImg,
  TextBoxSidebar,
  SidebarPostTitle,
} from "./GridPostStyles";
import PropTypes from "prop-types";

function GridPost({ title, data }) {
  return (
    <Section>
      <Container>
        <Heading>{title}</Heading>
        <GridContainer>
          <Main>
            <MainContainer>
              <Image src={data[0].imgUrl}></Image>
              <PostTitle>{data[0].title}</PostTitle>
              <Author>{data[0].author}</Author>
            </MainContainer>
          </Main>
          {data.slice(1).map((item, index) => (
            <Sidebar key={index}>
              <SidebarImg src={item.imgUrl}></SidebarImg>
              <TextBoxSidebar>
                <SidebarPostTitle>{item.title}</SidebarPostTitle>
                <Author>{item.author}</Author>
              </TextBoxSidebar>
            </Sidebar>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}

GridPost.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GridPost;

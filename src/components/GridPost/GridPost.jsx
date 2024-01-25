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
  ImageWraper,
} from "./GridPostStyles";
import PropTypes from "prop-types";
import { PostPropTypes } from "../../data/PostPropType";

function GridPost({ title, data, isLoading }) {
  if (isLoading) return <div>Loading...</div>;

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }
  // console.log(data);
  return (
    <Section>
      <Container>
        <Heading>{title}</Heading>
        <GridContainer>
          <Main>
            <MainContainer
              to={`${data[0]?.attributes?.category?.data?.attributes?.slug}/${data[0]?.attributes.slug}`}
            >
              <ImageWraper>
                <Image
                  src={
                    import.meta.env.VITE_URL +
                    data[0]?.attributes?.featuredImage?.image?.data?.attributes
                      ?.url
                  }
                />
              </ImageWraper>

              <PostTitle>{data[0]?.attributes?.postTitle}</PostTitle>
              <Author>
                {
                  data[0]?.attributes?.postInfo?.author?.data?.attributes
                    ?.fullName
                }
              </Author>
            </MainContainer>
          </Main>
          {data.slice(1).map((item, index) => (
            <Sidebar
              key={index}
              to={`${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes.slug}`}
            >
              <SidebarImg
                src={
                  import.meta.env.VITE_URL +
                  item?.attributes?.featuredImage?.image?.data?.attributes?.url
                }
              />
              <TextBoxSidebar>
                <SidebarPostTitle>
                  {item?.attributes?.postTitle}
                </SidebarPostTitle>
                <Author>
                  {
                    item?.attributes?.postInfo?.author?.data?.attributes
                      ?.fullName
                  }
                </Author>
              </TextBoxSidebar>
            </Sidebar>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}

GridPost.defaultProps = {
  data: [],
};

GridPost.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
};

export default GridPost;

import {
  Image,
  ImageWrapper,
  Container,
  Section,
  Heading,
  Desc,
  TextBox,
  ContainerList,
  ImagePost,
  ImagePostWrapper,
  PostWrapper,
  TextBoxPost,
  HeadingPost,
  CategoryPost,
  Author,
  Excerpt,
  Date,
} from "./CategoriesStyles";
import PropTypes from "prop-types";
import { PostPropTypes } from "../../data/PostPropType";

function CategoriesPage({ isLoading, data }) {
  if (isLoading) return <div>Loading...</div>;

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }
  // console.log(data);

  return (
    <Section>
      <Container>
        <ImageWrapper>
          <Image src="/banner.png" />
        </ImageWrapper>
        <TextBox>
          <Heading>Opinion</Heading>
          <Desc>
            Pandangan dan analisis mengenai isu-isu terkini tentang China,
            hubungan China dengan Indonesia dan negara-negara lainnya, dan
            mengenai etnik Tionghoa di Indonesia, yang ditulis oleh peneliti
            Forum Sinologi Indonesia (FSI) dan peneliti peneliti sahabat FSI.
          </Desc>
        </TextBox>
      </Container>
      <ContainerList>
        {data.map((item, index) => (
          <PostWrapper key={index}>
            <ImagePostWrapper>
              <ImagePost
                src={
                  import.meta.env.VITE_URL +
                  item?.attributes?.featuredImage?.image?.data?.attributes?.url
                }
              />
            </ImagePostWrapper>
            <TextBoxPost>
              <CategoryPost>
                {item?.attributes?.category?.data?.attributes?.name}
              </CategoryPost>
              <HeadingPost>{item?.attributes?.postTitle}</HeadingPost>
              <Author>
                {item?.attributes?.postInfo?.author?.data?.attributes?.fullName}
              </Author>
              <Date>{item?.attributes?.postInfo?.postDate}</Date>
            </TextBoxPost>
            <TextBoxPost>
              <Excerpt>{item?.attributes?.postExcerpt}</Excerpt>
            </TextBoxPost>
          </PostWrapper>
        ))}
      </ContainerList>
    </Section>
  );
}

CategoriesPage.defaultProps = {
  data: [],
};

CategoriesPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
};

export default CategoriesPage;

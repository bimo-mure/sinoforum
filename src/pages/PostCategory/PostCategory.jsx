import {
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
  Grid2Cols,
  Gap,
  ContainerWrapper,
  PostInfoWrapper,
  PostHeadingWrapper,
} from "./PostCategoryStyles";
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
      <Grid2Cols>
        <Gap />
        <ContainerWrapper>
          <Container>
            <TextBox>
              <Heading>
                {data[0]?.attributes?.category?.data?.attributes?.name}
              </Heading>
              <Desc>
                {data[0]?.attributes?.category?.data?.attributes?.description}
              </Desc>
            </TextBox>
          </Container>
          <ContainerList>
            {data.map((item, index) => (
              <PostWrapper key={index} to={item?.attributes.slug}>
                <ImagePostWrapper>
                  <ImagePost
                    src={
                      import.meta.env.VITE_URL +
                      item?.attributes?.featuredImage?.image?.data?.attributes
                        ?.url
                    }
                  />
                </ImagePostWrapper>
                <TextBoxPost>
                  <PostHeadingWrapper>
                    <CategoryPost>
                      {item?.attributes?.category?.data?.attributes?.name}
                    </CategoryPost>
                    <HeadingPost>{item?.attributes?.postTitle}</HeadingPost>
                    <PostInfoWrapper>
                      <Author>
                        {
                          item?.attributes?.postInfo?.author?.data?.attributes
                            ?.fullName
                        }
                      </Author>
                      <Date>{item?.attributes?.postInfo?.postDate}</Date>
                    </PostInfoWrapper>
                  </PostHeadingWrapper>
                  <PostHeadingWrapper>
                    <Excerpt>{item?.attributes?.postExcerpt}</Excerpt>
                  </PostHeadingWrapper>
                </TextBoxPost>
              </PostWrapper>
            ))}
          </ContainerList>
        </ContainerWrapper>
      </Grid2Cols>
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

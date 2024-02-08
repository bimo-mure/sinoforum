import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/PostRequest";
import {
  Container,
  Section,
  Heading,
  TextBox,
  Grid2Cols,
  Gap,
  ContainerWrapper,
  Banner,
  Hero,
  Author,
  Date,
  BoxAuthor,
  PostText,
} from "./PostStyles";
import DOMPurify from "dompurify";

function SinglePage() {
  const slug = useParams().slug;
  const { isLoading: isLoading, data: data = [] } = useQuery({
    queryKey: ["singlePost", slug],
    queryFn: getSinglePost,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data.data || data.data.length === 0) {
    return <div>No data available.</div>;
  }

  const sanitizedHTML = DOMPurify.sanitize(
    data.data[0]?.attributes?.postContent
  );

  return (
    <Section>
      <Hero>
        <Banner
          src={
            import.meta.env.VITE_URL +
            data.data[0]?.attributes?.featuredImage?.image?.data?.attributes
              ?.url
          }
        />
      </Hero>
      <Grid2Cols>
        <Gap />
        <ContainerWrapper>
          <Container>
            <Heading>{data.data[0]?.attributes?.postTitle}</Heading>
            <BoxAuthor>
              <Author>
                {
                  data.data[0]?.attributes?.postInfo?.author?.data?.attributes
                    ?.fullName
                }
              </Author>

              <TextBox>
                <Date>{data.data[0]?.attributes?.postInfo?.postDate}</Date>
                <Date>{data.data[0]?.attributes?.postInfo?.postTime}</Date>
              </TextBox>
            </BoxAuthor>

            <PostText dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </Container>
        </ContainerWrapper>
      </Grid2Cols>
    </Section>
  );
}

export default SinglePage;

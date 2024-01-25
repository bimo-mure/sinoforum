import { useQuery } from "@tanstack/react-query";
import {
  ContainerWraper,
  Container,
  Image,
  ContentContainer,
  Category,
  PostTitle,
  Author,
  Excerpt,
  ImageWraper,
  Shadow,
} from "./ContentPostStyles";
import { getRecentUpdates } from "../../../services/PostRequest";

function ContentPost() {
  const { isLoading, data: recentUpdate = [] } = useQuery({
    queryKey: ["recentUpdates"],
    queryFn: getRecentUpdates,
  });

  // console.log(recentUpdate);

  if (isLoading) return <div>Loading...</div>;

  if (!recentUpdate || recentUpdate.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <ContainerWraper>
      {recentUpdate.data.map((item, index) => (
        <Container
          key={index}
          to={`${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes.slug}`}
        >
          <ImageWraper>
            <Image
              src={
                import.meta.env.VITE_URL +
                item?.attributes?.featuredImage?.image?.data?.attributes?.url
              }
            />
            <Shadow />
          </ImageWraper>
          <ContentContainer>
            <Category>
              {item?.attributes?.category?.data?.attributes?.name}
            </Category>
            <PostTitle>{item?.attributes?.postTitle}</PostTitle>
            <Author>
              {item?.attributes?.postInfo?.author?.data?.attributes?.fullName}
            </Author>
            <Excerpt>{item?.attributes?.postExcerpt}</Excerpt>
          </ContentContainer>
        </Container>
      ))}
    </ContainerWraper>
  );
}

export default ContentPost;

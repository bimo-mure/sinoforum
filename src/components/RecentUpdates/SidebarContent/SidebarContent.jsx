import {
  Section,
  Container,
  Image,
  PostTitle,
  Category,
  Author,
  TextBox,
} from "./SidebarContentStyles";
import { useQuery } from "@tanstack/react-query";
import { getFeatured } from "../../../services/PostRequest";

function SidebarContent() {
  const { isLoading, data: featuredSidebar = [] } = useQuery({
    queryKey: ["featuredSidebar"],
    queryFn: getFeatured,
  });

  // console.log(featuredSidebar);

  if (isLoading) return <div>Loading...</div>;

  if (!featuredSidebar || featuredSidebar.length === 0) {
    return <div>No data available.</div>;
  }
  return (
    <Section>
      {featuredSidebar.data.map((item, index) => (
        <Container
          key={index}
          to={`${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes.slug}`}
        >
          <Image
            src={
              import.meta.env.VITE_URL +
              item?.attributes?.featuredImage?.image?.data?.attributes?.url
            }
          />
          <TextBox>
            <Category>
              {item?.attributes?.category?.data?.attributes?.name}
            </Category>
            <PostTitle>{item?.attributes?.postTitle}</PostTitle>
            <Author>
              {item?.attributes?.postInfo?.author?.data?.attributes?.fullName}
            </Author>
          </TextBox>
        </Container>
      ))}
    </Section>
  );
}

export default SidebarContent;

import ContentPost from "./Content/ContentPost";
import SidebarContent from "./SidebarContent/SidebarContent";
import {
  Container,
  Heading,
  SectionWraper,
  Section,
} from "./RecentUpdatesStyles";

const data = [
  {
    title: "Neque porro quisquam est qui dolorem ipsum",
    category: "Opinion",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    author: "Priska Limandar",
    imgUrl: "/1.jpg",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    category: "Comentaries",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    author: "Johanes Herlinajto",
    imgUrl: "/2.jpg",
  },
  {
    title: "Neque porro quisquam est qui dolorem ipsum",
    category: "Opinion",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    author: "Priska Limandar",
    imgUrl: "/1.jpg",
  },
];

function RecentUpdates() {
  return (
    <SectionWraper>
      <Section>
        <Heading>Recent Updates</Heading>
        <Container>
          <ContentPost>{data}</ContentPost>
          <SidebarContent>{data}</SidebarContent>
        </Container>
      </Section>
    </SectionWraper>
  );
}

export default RecentUpdates;

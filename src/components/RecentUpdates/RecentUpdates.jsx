import ContentPost from "./Content/ContentPost";
import SidebarContent from "./SidebarContent/SidebarContent";
import {
  Container,
  Heading,
  SectionWraper,
  Section,
} from "./RecentUpdatesStyles";
import PropTypes from "prop-types";

function RecentUpdates({ data }) {
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

RecentUpdates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecentUpdates;

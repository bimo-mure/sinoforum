import ContentPost from "./Content/ContentPost";
import SidebarContent from "./SidebarContent/SidebarContent";
import {
  Container,
  Heading,
  SectionWraper,
  Section,
} from "./RecentUpdatesStyles";

function RecentUpdates() {
  return (
    <SectionWraper>
      <Section>
        <Heading>Recent Updates</Heading>
        <Container>
          <ContentPost />
          <SidebarContent />
        </Container>
      </Section>
    </SectionWraper>
  );
}

export default RecentUpdates;

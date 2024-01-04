import HeroSlider from "../components/Hero/HeroSlider";
import SidebarNavigation from "../components/ButtonNav/ButtonNav";
import HomeNav from "../components/HomeNav/HomeNav";
import RecentUpdates from "../components/RecentUpdates/RecentUpdates";

function Home() {
  return (
    <div>
      <SidebarNavigation />
      <HeroSlider />
      <HomeNav />
      <RecentUpdates />
    </div>
  );
}

export default Home;

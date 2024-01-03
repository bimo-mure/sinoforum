import HeroSlider from "../components/Hero/HeroSlider";
import SidebarNavigation from "../components/ButtonNav/ButtonNav";
import HomeNav from "../components/HomeNav/HomeNav";

function Home() {
  return (
    <div>
      <SidebarNavigation />
      <HeroSlider />
      <HomeNav />
    </div>
  );
}

export default Home;

import HeroSlider from "../components/Hero/HeroSlider";
import { useQuery } from "@tanstack/react-query";
import HomeNav from "../components/HomeNav/HomeNav";
import RecentUpdates from "../components/RecentUpdates/RecentUpdates";
import GridPost from "../components/GridPost/GridPost";
import {
  getOpinion,
  getFSIOnTheNews,
  getHeroData,
} from "../services/PostRequest";

function Home() {
  const { isLoading: isHeroLoading, data: hero = [] } = useQuery({
    queryKey: ["hero"],
    queryFn: getHeroData,
  });

  const { isLoading: isOpinionLoading, data: opinion = [] } = useQuery({
    queryKey: ["opinion"],
    queryFn: getOpinion,
  });

  const { isLoading: isFsiOnNewsLoading, data: fsiOnNews = [] } = useQuery({
    queryKey: ["fsiOnNews"],
    queryFn: getFSIOnTheNews,
  });

  return (
    <div>
      <HeroSlider isLoading={isHeroLoading} data={hero.data} />
      <HomeNav />
      <RecentUpdates />
      <GridPost
        data={opinion.data}
        title="Opinion"
        isLoading={isOpinionLoading}
      />
      <GridPost
        data={fsiOnNews.data}
        title="FSI On The News"
        isLoading={isFsiOnNewsLoading}
      />
    </div>
  );
}

export default Home;

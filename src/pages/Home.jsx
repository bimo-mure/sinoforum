import HeroSlider from "../components/Hero/HeroSlider";
import SidebarNavigation from "../components/ButtonNav/ButtonNav";
import HomeNav from "../components/HomeNav/HomeNav";
import RecentUpdates from "../components/RecentUpdates/RecentUpdates";
import GridPost from "../components/GridPost/GridPost";

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
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    category: "Comentaries",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    author: "Johanes Herlinajto",
    imgUrl: "/2.jpg",
  },
];

function Home() {
  return (
    <div>
      <SidebarNavigation />
      <HeroSlider />
      <HomeNav />
      <RecentUpdates data={data} />
      <GridPost data={data} title="Opinion" />
      <GridPost data={data} title="Comentaries" />
      <GridPost data={data} title="FSI Analysis" />
      <GridPost data={data} title="FSI On The News" />
    </div>
  );
}

export default Home;

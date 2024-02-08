import Categories from "./PostCategory/PostCategory";
import { useQuery } from "@tanstack/react-query";
import { getCategoryOpinion } from "../services/PostRequest";

function Opinion() {
  const { isLoading, data: opinion = [] } = useQuery({
    queryKey: ["opinionCategory"],
    queryFn: getCategoryOpinion,
  });

  return (
    <>
      <Categories isLoading={isLoading} data={opinion.data} />
    </>
  );
}

export default Opinion;

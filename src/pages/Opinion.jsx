import Categories from "../components/Categories/Categories";
import { useQuery } from "@tanstack/react-query";
import { getCategoryOpinion } from "../services/PostRequest";

function Opinion() {
  const { isLoading, data: opinion = [] } = useQuery({
    queryKey: ["opinionCategory"],
    queryFn: getCategoryOpinion,
  });

  return (
    <div>
      <Categories isLoading={isLoading} data={opinion.data} />
    </div>
  );
}

export default Opinion;

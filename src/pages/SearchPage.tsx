import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="text-white">{searchParams.get("barbershop")}</div>
  )
}

export default SearchPage
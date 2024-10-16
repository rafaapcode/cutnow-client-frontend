import useQueryParams from "@/hooks/useQueryParams";

const SearchPage = () => {
  const { value } = useQueryParams("barbershop");
  return (
    <div className="text-white">{value}</div>
  )
}

export default SearchPage
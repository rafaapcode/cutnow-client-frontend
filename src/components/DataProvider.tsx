import { useQuery } from "@tanstack/react-query";

const DataProvider = ({ getData, render, queryKey, timeInCache }: any) => {
  const { data, error, isLoading } = useQuery(
    {
      queryKey,
      staleTime: (timeInCache || 0) * 1000, 
      queryFn: async () => {
        const res = await getData();
        if(!res.error) {
          return {error: false, data: res.data};
        } else {
          return {error: true, data: res.data}
        }
      }
    }
  );

  console.log("Dados ",data);
  console.log("Erro ", error);
  return render({data, error, isLoading});
}

export default DataProvider
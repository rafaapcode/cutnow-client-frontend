import { useQuery } from "@tanstack/react-query";

type PropsToRenderComponent = {
  data: any;
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
};

type IDataProviderProps = {
  getData: () => Promise<{status: boolean; data: any}>;
  render: (props: PropsToRenderComponent) => void;
  queryKey: string[];
  timeInCache?: number;
}

const DataProvider = ({ getData, render, queryKey, timeInCache }: IDataProviderProps) => {
  const { data, isFetching, error, isLoading } = useQuery(
    {
      queryKey,
      staleTime: (timeInCache || 0) * 1000, 
      queryFn: async () => {
        const res = await getData();
        if(res.status) {
          return res.data;
        } else {
          return undefined;
        }
      }
    }
  );

  console.log("Dados ",data);
  console.log("Erro ", error);
  return render({data, error, isFetching, isLoading});
}

export default DataProvider
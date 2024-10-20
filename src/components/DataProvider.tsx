import { useQuery } from "@tanstack/react-query";

type PropsToRenderComponent = {
  data: any;
  isLoading: boolean;
  error: Error | null;
};

type IDataProviderProps = {
  getData: () => Promise<{status: boolean; data: any}>;
  render: (props: PropsToRenderComponent) => void;
  queryKey: string[];
}

const DataProvider = ({ getData, render, queryKey }: IDataProviderProps) => {
  const { data, isFetching, error } = useQuery(
    {
      queryKey,
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
  return render({data, error, isLoading: isFetching});
}

export default DataProvider
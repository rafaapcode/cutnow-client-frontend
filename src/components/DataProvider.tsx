import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

type IDataProviderProps = {
  getData: () => Promise<{error: boolean; message: string; data?: any}>;
  render: (props: any) => ReactNode;
  queryKey: any[];
  timeInCache?: number;
}

const DataProvider = ({ getData, render, queryKey, timeInCache }: IDataProviderProps): ReactNode => {
  const { data, error, isLoading } = useQuery(
    {
      queryKey,
      staleTime: (timeInCache || 0) * 1000, 
      gcTime: 3600,
      refetchOnWindowFocus: false,
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
  return render({data, error, isLoading})
}

export default DataProvider
import { useEffect, useState } from "react";

type IDataProviderProps = {
  getData: () => Promise<{status: boolean; data: any}>;
  render: (props: any) => void;
}

const DataProvider = ({ getData, render }: IDataProviderProps) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (
      async () => {
        const res = await getData();
        if(res.status) {
          setData(res.data);
        } else {
          setData(undefined);
        }
      }
    )()
  }, [getData]);

  return render(data);
}

export default DataProvider
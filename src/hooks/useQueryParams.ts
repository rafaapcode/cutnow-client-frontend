import { NavigateOptions, URLSearchParamsInit, useSearchParams } from "react-router-dom";

type UseQueryParams = {
  value: string | null;
  setSearchParams: (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit), navigateOpts?: NavigateOptions) => void
}

export default function useQueryParams(key: string = ""): UseQueryParams {
  const [searchParams, setSearchParams] = useSearchParams();

 
  return {value: searchParams.get(key), setSearchParams};
}
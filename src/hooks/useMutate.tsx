import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";

type IMutateProps = {
  getData: () => Promise<{ error: boolean; message: string }>;
};

type IMutateResponse = {
  mutateAsync: UseMutateAsyncFunction<
    {
      error: boolean;
      message: string;
    },
    Error,
    void,
    unknown
  >;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export const useMutate = ({ getData }: IMutateProps): IMutateResponse => {
  const { mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: async () => {
      return await getData();
    },
  });

  return { mutateAsync, isPending, isError, isSuccess };
};

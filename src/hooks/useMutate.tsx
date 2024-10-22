import { useMutation } from "@tanstack/react-query";

type IMutateProps = {
  getData: () => Promise<{error: boolean; message: string;}>;
}

export const useMutate = ({ getData }: IMutateProps) => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async () => {
      return await getData();
    }
  });

  return {mutate, isPending, isError, isSuccess};
};
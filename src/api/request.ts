import client from "@/utils/axios";

export type ResponseRequest = {
  error: boolean;
  message: string;
};

export type NewSchedule = {
  tipoServico: string;
  nomeCliente: string;
  data: string;
  emailCliente:string;
  barbearia_id: string;
  barbeiro_id: string;
};

export async function CreateSchedule(
  newSchedule: NewSchedule
): Promise<ResponseRequest> {
  try {
    const { data } = await client.post("/request", newSchedule);

    return {
      error: data.error,
      message: data.message,
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      error: true,
      message: "Erro ao criar a REQUISIÇÃO , tente mais tarde",
    };
  }
}

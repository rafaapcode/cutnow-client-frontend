import client from "@/utils/axios";

export type Response = {
  error: boolean;
  data?: any;
  message: string;
};

export async function getSchedules(email: string): Promise<Response> {
  try {
    const { data } = await client.get(`/user/${email}`);

    return {
      error: data.error,
      message: data.message,
      data: data.schedules
    }
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao buscar todos os agendamentos do usuário",
    };
  }
}

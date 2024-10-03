import client from "../lib/axios";

type Response = {
  status: boolean;
  data?: any;
  message: string;
};

export async function AuthUser(code: string): Promise<Response> {
  try {
    const { data } = await client.post("/auth", { code });

    return {
      status: false,
      message: "User authenticated",
      data,
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      status: false,
      message: "Erro ao autenticar o usuário",
    };
  }
}

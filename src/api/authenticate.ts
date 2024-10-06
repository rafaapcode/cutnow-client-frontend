import client from "../utils/axios";

type Response = {
  error: boolean;
  data?: any;
  message: string;
};

export async function AuthUser(code: string): Promise<Response> {
  try {
    const { data } = await client.post("/auth", { code });
    return {
      error: false,
      message: "User authenticated",
      data
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao autenticar o usuário",
    };
  }
}

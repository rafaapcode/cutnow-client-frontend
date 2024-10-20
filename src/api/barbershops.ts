import client from "@/utils/axios";

export type Response<T> = {
  error: boolean;
  data?: T;
  message: string;
};

export type AllBarbershopsResponse = {
  barbershops: {
    id: string;
    nomeDaBarbearia: string;
    informacoes: {
      logo: string;
      status: string;
    }
  }[];
}

export async function GetAllBarbershops(): Promise<Response<AllBarbershopsResponse>> {
  try {
    const {data} = await client.get("/barbershop");

    return {
      error: data.error,
      message: data.message,
      data: data.barbershops
    }
  } catch (error: any ) {
    console.log(error.response);
    return {
      error: true,
      message: error.message
    }
  }
}
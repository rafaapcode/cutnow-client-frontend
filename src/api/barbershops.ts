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

export type BarbershopByNameResponse = {
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
      message: "Erro ao buscar todas barbearias"
    }
  }
}

export async function GetBarbershopByName(nome: string): Promise<Response<BarbershopByNameResponse>> {
  try {
    const {data} = await client.get(`/barbershop/barbershopbyname?name=${nome}`);
    return {
      error: data.error,
      message: data.message,
      data: data.barbershops
    }
  } catch (error: any ) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao filtrar as barbearias pelo nome"
    }
  }
}

export async function GetBarbershop(id: string): Promise<Response<any>> {
  try {
    const {data} = await client.get(`/barbershop/${id}`);

    return {
      error: data.error,
      message: data.message,
      data: data.barbershop
    }
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao buscar a barbearia"
    }
  }
}
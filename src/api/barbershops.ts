import client from "@/utils/axios";

export type Response<T> = {
  error: boolean;
  data?: T;
  message: string;
};

export type AllBarbershopsResponse = {
  id: string;
  nomeDaBarbearia: string;
  logo: string;
  status: string;
};

export type BarbershopByNameResponse = {
  barbershops: {
    id: string;
    nomeDaBarbearia: string;
    informacoes: {
      logo: string;
      status: string;
    };
  }[];
};

export type BarberResponse = {
  nome: string;
  informacoes: {
    foto: string;
    descricao: string;
    portfolio: string[];
  };
};

export type ServiceResponse = {
  nomeService: string;
  preco: number;
};

export async function GetAllBarbershops(userLat: number, userLong: number): Promise<Response<AllBarbershopsResponse[]>> {
  try {
    const { data } = await client.get(`https://6rh4k5xs6eewbfmon6t5sbnlm40mbmme.lambda-url.us-east-1.on.aws?userlat=${userLat}&userlong=${userLong}&dist=5`);
    console.log(data);
    return {
      error: false,
      message: "Barbearias encontradas",
      data: data,
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao buscar todas barbearias",
    };
  }
}

export async function GetBarbershopByName(
  nome: string
): Promise<Response<BarbershopByNameResponse>> {
  try {
    const { data } = await client.get(
      `/barbershop/barbershopbyname?name=${nome}`
    );
    return {
      error: data.error,
      message: data.message,
      data: data.barbershops,
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao filtrar as barbearias pelo nome",
    };
  }
}

export async function GetBarbershop(id: string): Promise<Response<any>> {
  try {
    const { data } = await client.get(`/barbershop/${id}`);

    return {
      error: data.error,
      message: data.message,
      data: data.barbershop,
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao buscar a barbearia",
    };
  }
}

export async function GetBarber(id: string): Promise<Response<BarberResponse>> {
  try {
    const { data } = await client.get(`/barber/${id}`);

    return {
      error: false,
      message: "Barbeiro encontrado",
      data: data.barber,
    };
  } catch (error: any) {
    console.log(error.response);
    return {
      error: true,
      message: "Erro ao buscar o barbeiro",
    };
  }
}

export async function GetServices(
  id: string
): Promise<Response<ServiceResponse>> {
  try {
    const { data } = await client.get(`/barbershop/services/${id}`);

    return {
      error: data.error,
      message: data.message,
      data: data.services,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
}

import { AllBarbershopsResponse, GetAllBarbershops, GetBarbershop, GetBarbershopByName, Response } from "@/api/barbershops";



export class BarbershopService {
  static async GetAllBarbershop(): Promise<Response<AllBarbershopsResponse>> {
    const allBarbershops = await GetAllBarbershops();

    return allBarbershops;
  }

  static GetBarbershopByName(name: string) {
    return async () => {
      const barbershop = await GetBarbershopByName(name);

      return barbershop;
    };
  }

  static GetBarbershop(id: string) {
    return async () => {
      const barbershop = await GetBarbershop(id);

      return barbershop;
    };
  }
}
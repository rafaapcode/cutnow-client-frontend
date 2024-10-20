import { AllBarbershopsResponse, GetAllBarbershops, GetBarbershopByName, Response } from "@/api/barbershops";



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
}
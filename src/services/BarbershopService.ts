import { AllBarbershopsResponse, GetAllBarbershops, GetBarber, GetBarbershop, GetBarbershopByName, GetServices, Response } from "@/api/barbershops";



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

  static GetBarber(id: string) {
    return async () => {
      const barber = await GetBarber(id);

      return barber;
    };
  }

  static GetServices(id: string) {
    return async () => {
      const services = await GetServices(id);

      return services;
    };
  }
}
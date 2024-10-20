import { AllBarbershopsResponse, GetAllBarbershops, Response } from "@/api/barbershops";



export class BarbershopService {
  static async GetAllBarbershop(): Promise<Response<AllBarbershopsResponse>> {
    const allBarbershops = await GetAllBarbershops();

    return allBarbershops;
  }
}
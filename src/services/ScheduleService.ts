import { getSchedulesOfTheUser } from "../api/getSchedules";

type SchedulesResponse = {
  error: boolean;
  data?: any;
  message: string;
};

export class ScheduleService {
  static async getSchedules(email: string): Promise<SchedulesResponse> {
    return await getSchedulesOfTheUser(email);
  }
}
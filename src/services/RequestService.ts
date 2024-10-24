import { CreateSchedule, NewSchedule } from "@/api/request";

export class RequestService {
  static createRequest(newSchedule: NewSchedule) {
    return async () => {
      return await CreateSchedule(newSchedule);
    }
  }
};
import client from "../utils/axios";

type SchedulesResponse = {
  error: boolean;
  data?: any;
  message: string;
};
export async function getSchedulesOfTheUser(email: string): Promise<SchedulesResponse> {
    try {
      const {data} = await client.get(`/user/${email}`);
      console.log(data);
      return {
        error: false,
        message: "Schedules returned",
        data
      }
    } catch (error: any) {
      if(error.response)  {
        return {
          error: true,
          message: error.response.data.message
        }
      }
      return {
        error: true,
        message: error.message
      }
    }
}
import { Airline, AirlineList } from "../../types"
import { apiClient } from "../apiClient/apiClient"
import { Endpoints } from "../apiClient/endpoints"
import { IGlobalResponse } from "../apiClient/IGlobalResponse"

async function getAirlines(): Promise<AirlineList> {
  const response = await apiClient.get(Endpoints.airlines);
  return response.data;
}


async function getAirlineByAirline(airline: string): Promise<IGlobalResponse<Airline>> {
  const response = await apiClient.get(Endpoints.airlinesById(airline));
  return response.data;
}

export const airlineApi = {
  getAirlines,
  getAirlineByAirline,
};

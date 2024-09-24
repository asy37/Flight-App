import { Flight, FlightList } from "../../types"
import { apiClient } from "../apiClient/apiClient"
import { Endpoints } from "../apiClient/endpoints"
import { IGlobalResponse } from "../apiClient/IGlobalResponse"


async function getFlights(): Promise<IGlobalResponse<FlightList>> {
  const response = await apiClient.get(Endpoints.flights);
  return response.data;
}

async function getFlightById(id: string): Promise<IGlobalResponse<Flight>> {
  const response = await apiClient.get(Endpoints.flightsById(id));
  return response.data;
}

export const flightsApi = {
  getFlights,
  getFlightById,
};

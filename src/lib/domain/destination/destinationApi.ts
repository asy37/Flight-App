import { Destination, DestinationList } from "../../types"
import { apiClient } from "../apiClient/apiClient"
import { Endpoints } from "../apiClient/endpoints"
import { IGlobalResponse } from "../apiClient/IGlobalResponse"

async function getDestinations(): Promise<DestinationList> {
  const response = await apiClient.get(Endpoints.destinations);
  return response.data;
}

async function getDestinationByIata(iata: string): Promise<IGlobalResponse<Destination>> {
  const response = await apiClient.get(Endpoints.destinationsByIata(iata));
  return response.data;
}

export const destinationApi = {
  getDestinations,
  getDestinationByIata,
};

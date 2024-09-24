

import { AircraftTypeList } from "../../types"
import { apiClient } from "../apiClient/apiClient"
import { Endpoints } from "../apiClient/endpoints"
import { IGlobalResponse } from "../apiClient/IGlobalResponse"

async function getAircraftTypes(): Promise<IGlobalResponse<AircraftTypeList>> {
  const response = await apiClient.get(Endpoints.aircrafttypes);
  return response.data;
}


export const aircraftTypeApi = {
  getAircraftTypes,
};

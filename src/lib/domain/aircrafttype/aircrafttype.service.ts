import { AircraftTypeList } from '../../types'
import { IGlobalResponse } from '../apiClient/IGlobalResponse'
import { aircraftTypeApi } from './aircrafttypeApi'

async function getAllFlights(): Promise<
  IGlobalResponse<AircraftTypeList>
> {
  try {
    return await aircraftTypeApi.getAircraftTypes()
  } catch (error) {
    throw new Error(`Error getting all departments tree: ${error}`)
  }
}


export const flightsService = {
    getAllFlights,
}
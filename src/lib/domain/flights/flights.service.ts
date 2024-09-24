import { Flight, FlightList } from '../../types'
import { IGlobalResponse } from '../apiClient/IGlobalResponse'
import { flightsApi } from './flightsApi';

async function getAllFlights(): Promise<
  IGlobalResponse<FlightList>
> {
  try {
    return await flightsApi.getFlights()
  } catch (error) {
    throw new Error(`Error getting all departments tree: ${error}`)
  }
}

async function getAllFlightsById(
    id: string,
  ): Promise<IGlobalResponse<Flight>> {
    try {
      return await flightsApi.getFlightById(id)
    } catch (error) {
      throw new Error(`Error getting report: ${error}`)
    }
  }

export const flightsService = {
    getAllFlights,
    getAllFlightsById,
}
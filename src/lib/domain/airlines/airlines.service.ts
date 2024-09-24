import { Airline, AirlineList } from '../../types'
import { IGlobalResponse } from '../apiClient/IGlobalResponse'
import { airlineApi } from './airlinesApi'

async function getAllAirlines(): Promise<
  AirlineList
> {
  try {
    return await airlineApi.getAirlines()
  } catch (error) {
    throw new Error(`Error getting all departments tree: ${error}`)
  }
}
async function getAirlinesById(
    id: string,
  ): Promise<IGlobalResponse<Airline>> {
    try {
      return await airlineApi.getAirlineByAirline(id)
    } catch (error) {
      throw new Error(`Error getting report: ${error}`)
    }
  }

export const airlinesService = {
    getAllAirlines,
    getAirlinesById,
}
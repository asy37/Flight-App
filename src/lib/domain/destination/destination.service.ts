import { Destination, DestinationList } from '../../types'
import { IGlobalResponse } from '../apiClient/IGlobalResponse'
import { destinationApi } from './destinationApi'

async function getAllDestination(): Promise<
  DestinationList
> {
  try {
    return await destinationApi.getDestinations()
  } catch (error) {
    throw new Error(`Error getting all departments tree: ${error}`)
  }
}
async function getDestinationById(
    id: string,
  ): Promise<IGlobalResponse<Destination>> {
    try {
      return await destinationApi.getDestinationByIata(id)
    } catch (error) {
      throw new Error(`Error getting report: ${error}`)
    }
  }

export const destinationService = {
    getAllDestination,
    getDestinationById,
}
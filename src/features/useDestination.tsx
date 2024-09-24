import { useQuery } from '@tanstack/react-query'
import { destinationService } from '../lib/domain/destination/destination.service'

export const useDestinations = () => {
    const useGetAllDestinations = () => {
        return useQuery({
            queryKey: ['destination'],
            queryFn: () => destinationService.getAllDestination(),
        })
    }


    const useGetDestinationById = (iata: string) => {
        return useQuery({
            queryKey: ['destination', iata],
            queryFn: () => destinationService.getDestinationById(iata),
            enabled: !!iata,
        })
    }

    return {
        useGetAllDestinations,
        useGetDestinationById,
    }
}

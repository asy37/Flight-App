import { useQuery } from '@tanstack/react-query'
import { flightsService } from '../lib/domain/flights/flights.service'


export const useFlights = () => {
    const useGetAllFlights = () => {
        return useQuery({
            queryKey: ['flights'],
            queryFn: () => flightsService.getAllFlights(),
        })
    }

    const useGetFlightById = (flightId: string) => {
        return useQuery({
            queryKey: ['flight', flightId],
            queryFn: () => flightsService.getAllFlightsById(flightId),
            enabled: !!flightId,
        })
    }

    return {
        useGetAllFlights,
        useGetFlightById,
    }
}

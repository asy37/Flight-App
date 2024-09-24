import { useQuery } from '@tanstack/react-query'
import { airlinesService } from '../lib/domain/airlines/airlines.service'

export const useAirlines = () => {
    const useGetAllAirlines = () => {
        return useQuery({
            queryKey: ['airline'],
            queryFn: () => airlinesService.getAllAirlines(),
        })
    }

    const useGetFlightById = (airlineId: string) => {
        return useQuery({
            queryKey: ['airline', airlineId],
            queryFn: () => airlinesService.getAirlinesById(airlineId),
            enabled: !!airlineId,
        })
    }

    return {
        useGetAllAirlines,
        useGetFlightById,
    }
}

import { useQuery } from '@tanstack/react-query'
import { aircraftTypeApi } from '../lib/domain/aircrafttype/aircrafttypeApi'


export const useAircraft = () => {
    const useGetAllAircraft = () => {
        return useQuery({
            queryKey: ['aircraft'],
            queryFn: () => aircraftTypeApi.getAircraftTypes(),
        })
    }

    return {
        useGetAllAircraft,
    }
}

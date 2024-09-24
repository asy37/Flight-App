    import { Endpoint } from "../../types"

    export const Endpoints: Endpoint = {
        flights: "/flights",
        flightsById: (id: string) => `/${id}`,
        airlines: "/airlines",
        airlinesById: (airline: string) => `/airlines/${airline}`,
        destinations: "/destinations",
        destinationsByIata: (iata: string) => `/destinations/${iata}`,
        aircrafttypes: "/aircrafttypes"
    }
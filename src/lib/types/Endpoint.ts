export interface Endpoint{
    flights: string;
    flightsById: (id: string) => string;
    airlines: string;
    airlinesById: (airline: string) => string;
    destinations: string;
    destinationsByIata: (iata: string) => string;
    aircrafttypes: string;
}
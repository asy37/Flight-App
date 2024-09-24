export interface Airline {
    iata?: string;
    icao?: string;
    nvls?: number;
    publicName?: string;
  }
  
  export interface AirlineList {
    airlines?: Airline[];
  }
  
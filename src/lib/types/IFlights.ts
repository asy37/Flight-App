export interface FlightList {
  flights?: Flight[];
  }
  
  export interface Flight {
    lastUpdatedAt?: string;
    actualLandingTime?: string; 
    actualOffBlockTime?: string; 
    aircraftRegistration?: string;
    aircraftType?: AircraftTypeType;
    baggageClaim?: BaggageClaimType;
    checkinAllocations?: CheckinAllocationsType;
    codeshares?: CodesharesType;
    estimatedLandingTime?: string; 
    expectedTimeBoarding?: string; 
    expectedTimeGateClosing?: string; 
    expectedTimeGateOpen?: string; 
    expectedTimeOnBelt?: string;
    expectedSecurityFilter?: string;
    flightDirection?: 'A' | 'D';
    flightName?: FlightName;
    flightNumber?: number;
    gate?: string;
    pier?: string;
    id: string;
    isOperationalFlight?: boolean;
    mainFlight?: string;
    prefixIATA?: string;
    prefixICAO?: string;
    airlineCode?: number;
    publicEstimatedOffBlockTime?: string; 
    publicFlightState?: PublicFlightStateType;
    route?: RouteType;
    scheduleDateTime?: string;
    scheduleDate?: string; 
    scheduleTime?: string; 
    serviceType?: string; 
    terminal?: number;
    transferPositions?: TransferPositionsType;
    schemaVersion?: string;
    flightDuration?: string;
    departureInfo?: DepartureInfo;
    arrivalInfo?: ArrivalInfo;
    ticketType?: string;
    price?: PriceInfo[]
    totalPrice: string
}

export type ClassType = 'Economy' | 'EconomyFirst' | 'Business' | 'BusinessFirst' | 'FirstClass';

export interface PriceInfo {
  classType?: ClassType; 
  amount?: string;
}[]

export interface FlightName {
  iata: string
  icao: string
  nvls: number
  publicName: string
}

export interface ArrivalInfo {
  country: string
  iata: string
  publicName: object;
  city: string
}
export interface DepartureInfo {
  country: string
  iata: string
  publicName: object;
  city: string
}
  
  export interface AircraftTypeType {
    iataMain?: string;
    iataSub?: string;
  }
  
  export interface BaggageClaimType {
    belts?: string[];
  }
  
  export interface CheckinAllocationsType {
    checkinAllocations?: CheckinAllocationType[];
    remarks?: RemarksType;
  }
  
  export interface CheckinAllocationType {
    endTime?: string;
    rows?: RowsType;
    startTime?: string;
  }
  
  export interface RowsType {
    rows?: RowType[];
  }
  
  export interface RowType {
    position?: string;
    desks?: DesksType;
  }
  
  export interface DesksType {
    desks?: DeskType[];
  }
  
  export interface DeskType {
    checkinClass?: CheckinClassType;
    position?: number;
  }
  
  export interface CheckinClassType {
    code?: string;
    description?: string;
  }
  
  export interface RemarksType {
    remarks?: string[];
  }
  
  export interface CodesharesType {
    codeshares?: string[];
  }
  
  export interface PublicFlightStateType {
    flightStates?: string[];
  }
  
  export interface RouteType {
    destinations?: string[];
    eu?: 'S' | 'E' | 'N'; 
    visa?: boolean; 
  }
  
  export interface TransferPositionsType {
    transferPositions?: number[];
  }
  
export interface AircraftType {
    iataMain?: string;
    iataSub?: string;
    longDescription?: string;
    shortDescription?: string;
  }
  
  export interface AircraftTypeList {
    aircraftTypes?: AircraftType[];
  }
  
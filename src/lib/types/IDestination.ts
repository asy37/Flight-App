export interface PublicName {
    dutch?: string;
    english?: string;
  }
  
  export interface Destination {
    city?: string;
    country?: string;
    iata?: string;
    publicName?: PublicName;
  }
  
  export interface DestinationList {
    destinations?: Destination[];
  }
  
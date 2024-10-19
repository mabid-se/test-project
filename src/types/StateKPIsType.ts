export interface StateKPIsType {
  zip: string;
  state: string;
  maxListPriceForSale: number;
  minListPriceForSale?: number;
  maxListPriceSold?: number;
  minListPriceSold?: number;
  maxAcreageForSale: number;
  minAcreageForSale?: number;
  maxAcreageSold?: number;
  minAcreageSold?: number;
  medianPriceForSale?: number;
  medianPriceSold?: number;
  avgHousePriceForSale: number;
  avgHousePriceSold: number;
  avgLandPriceForSale: number;
  avgPriceRatio: number;
  lotsToHousesRatio: number;
  percentiles: PercentilesType;
  soldVsSaleRatio: number;
  avgDaysOnZillowForSale: number;
  avgDaysOnZillowSold: number;
  salesListing: number;
  soldListing: number;
  longitude: string;
  latitude: string;
  city: string;
  avgLatLng: AvgLatLngType;
  pricePerAcreSold: PricePerAcreType;
  pricePerAcreSale: PricePerAcreType;
}

export interface PercentilesType {
  "25th"?: number;
  "50th"?: number;
  "75th"?: number;
}

export interface AvgLatLngType {
  averageLatitude?: number;
  averageLongitude?: number;
}

export interface PricePerAcreType {
  max?: number;
  min?: number;
  average: number;
}

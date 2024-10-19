export interface ZipCodeKPIsType {
  maxListPriceForSale: number;
  minListPriceForSale: number;
  maxListPriceSold: any;
  minListPriceSold: any;
  maxAcreageForSale: number;
  minAcreageForSale: number;
  maxAcreageSold: number;
  minAcreageSold: number;
  medianPriceForSale: number;
  medianPriceSold: any;
  avgHousePriceForSale: number;
  avgHousePriceSold: number;
  avgPriceRatio: number;
  lotsToHousesRatio: number;
  percentiles: Percentiles;
  soldVsSaleRatio: number;
  avgDaysOnZillowForSale: number;
  avgDaysOnZillowSold: number;
  pricePerAcreSold: PricePerAcreType;
  pricePerAcreSale: PricePerAcreType;
  salesListing: ZipcodeListing[];
  soldListing: ZipcodeListing[];
}

export interface Percentiles {
  "25th": number;
  "50th": number;
  "75th": number;
}

export interface PricePerAcreType {
  max: any;
  min: any;
  average: number;
}

export interface ZipcodeListing {
  id: number;
  listing_url: string;
  address: string;
  address_street: string;
  address_city: string;
  address_state: string;
  zip_code: string;
  days_on_zillow: number;
  rent_z_estimate: number;
  lot_area: number;
  latitude: string;
  longitude: string;
  price: number;
  sold_date: any;
  creation_time: string;
  broker_name: string;
  images: string[];
  property_type: string;
}

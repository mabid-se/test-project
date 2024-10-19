import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { ZipcodeListing } from "@/types/ZipCodeKPIsType";

interface ZipCodeListingsTrackerProps {
  listings: ZipcodeListing[];
}
const ZipCodeListingsTracker: React.FC<ZipCodeListingsTrackerProps> = (
  props
) => {
  const { listings } = props;

  return (
    <Table className="shadow-md rounded-md">
      <TableHeader className="sticky top-0 z-10 bg-white">
        <TableRow>
          <TableHead className="font-semibold">Price</TableHead>
          <TableHead>Broker Name</TableHead>
          <TableHead className="min-w-30">Days on Zillow</TableHead>
          <TableHead className="min-w-20">Est. Rent</TableHead>
          <TableHead className="min-w-20">Lot Area</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="max-h-24 overflow-auto">
        {listings.map((listing) => (
          <TableRow key={listing.id}>
            <TableCell className="text-xs font-normal">
              ${listing.price}
            </TableCell>
            <TableCell className="text-xs font-normal">
              {listing.broker_name}
            </TableCell>
            <TableCell className="text-xs font-normal">
              {listing.days_on_zillow}
            </TableCell>
            <TableCell className="text-xs font-normal">
              {listing.rent_z_estimate}
            </TableCell>
            <TableCell className="text-xs font-normal">
              {listing.lot_area}
            </TableCell>
            <TableCell className="text-xs font-normal">
              {listing.address}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ZipCodeListingsTracker;

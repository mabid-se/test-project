import { getZipCodesKPIs } from "@/services/ZipCodesKPI";
import React from "react";
import ZipCodeListingsTracker from "@/app/_components/ZipCodeListingsTracker";

interface ZipCodeDataProps {
  zipCode: number;
}

const ZipCodeData: React.FC<ZipCodeDataProps> = async (props) => {
  const { zipCode } = props;

  const zipCodeKPIs = await getZipCodesKPIs(zipCode);

  console.log("zipCodeKPIs: ", zipCodeKPIs);

  return (
    <div className="h-full flex flex-col gap-3">
      <p className="text-center text-lg font-semibold">
        Listings for Zip Code: {zipCode}
      </p>
      {zipCodeKPIs?.salesListing && (
        <div className="flex flex-grow overflow-auto h-full max-h-96 shadow-lg rounded-md border">
          <ZipCodeListingsTracker listings={zipCodeKPIs.salesListing} />
        </div>
      )}
    </div>
  );
};

export default ZipCodeData;

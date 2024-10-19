import React from "react";
import ZipCodeDetailsDialog from "@/app/_components/ZipCodeDetailsDialog";
import { StateKPIsType } from "@/types/StateKPIsType";
import ClockSvg from "@/assets/svg/ArrowDownSvg copy";

interface ZipCodeCardProps {
  zipData: StateKPIsType;
  index: number;
}
const ZipCodeCard: React.FC<ZipCodeCardProps> = (props) => {
  const { zipData, index } = props;

  const getColor = (ratio: number) => {
    if (ratio < 1) return "#eb005e";
    else if (ratio >= 1 && ratio <= 3) return "#ffd000";
    else if (ratio > 3) return "#01a73b";
  };

  // console.log("zipData: ", zipData);

  const color = getColor(zipData?.soldVsSaleRatio);

  if (!zipData?.zip && !zipData?.city && !zipData?.state) return;

  return (
    <div
      className={`group relative col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-2 shadow-md px-4 lg:px-6 py-4 rounded-lg border-l-2 lg:border-l-4 hover:bg-gray-100`}
      style={{ borderColor: color }}
    >
      <ZipCodeDetailsDialog zipCode={Number(zipData.zip)} />
      <div className="flex gap-2 items-center">
        <ClockSvg className="fill-current w-5 h-5" />
        <p className="text-sm font-medium">
          {zipData?.avgDaysOnZillowSold.toFixed()}
          <i className="text-xs"> days ago</i>
        </p>
      </div>
      <p className="text-lg font-semibold capitalize border-b">
        {zipData?.city}, {zipData?.state}, ZIP: {zipData?.zip}
      </p>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-base font-medium">List Price For Sale</p>
        <div className="flex justify-between">
          <p className="text-sm font-medium">
            Min:{" "}
            <b>
              {zipData?.minListPriceForSale
                ? `$${zipData?.minListPriceForSale.toFixed(2)}`
                : "N/A"}
            </b>
          </p>
          <p className="text-sm font-medium">
            Max:{" "}
            <b>
              {zipData?.maxListPriceForSale
                ? `$${zipData?.maxListPriceForSale.toFixed(2)}`
                : "N/A"}
            </b>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-medium">Average House Price</p>
        <div className="flex justify-between">
          <p className="text-sm font-medium">
            Sale:{" "}
            <b>
              {zipData?.avgHousePriceForSale
                ? `$${zipData?.avgHousePriceForSale.toFixed(2)}`
                : "N/A"}
            </b>
          </p>
          <p className="text-sm font-medium">
            Sold:{" "}
            <b>
              {zipData?.avgHousePriceSold
                ? `$${zipData?.avgHousePriceSold.toFixed(2)}`
                : "N/A"}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZipCodeCard;

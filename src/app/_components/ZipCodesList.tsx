import React from "react";
import ZipCodeCard from "@/app/_components/ZipCodeCard";
import { StateKPIsType } from "@/types/StateKPIsType";

interface ZipCodesListProps {
  stateKPIsData: StateKPIsType[];
}

const ZipCodesList: React.FC<ZipCodesListProps> = (props) => {
  const { stateKPIsData } = props;

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-5 xl:gap-6">
      {stateKPIsData.map((zipCode, index) => (
        <ZipCodeCard key={zipCode.zip} zipData={zipCode} index={index} />
      ))}
    </div>
  );
};

export default ZipCodesList;

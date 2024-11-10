import ZipCodesList from "@/app/_components/ZipCodesList";
import { getStateKPIsBySate } from "@/services/ZipCodesKPI";

export const dynamic = "force-dynamic";

const Home = async () => {
  const stateKPIsData = await getStateKPIsBySate("Alaska");

  // console.log("stateKPIsData has: ", stateKPIsData);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-screen-xl w-full px-6 lg:p-4 mx-auto">
        <ZipCodesList stateKPIsData={stateKPIsData} />
      </div>
    </div>
  );
};

export default Home;

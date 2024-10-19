import fetcher from "@/lib/fetcher";

export const getStateKPIsBySate = async (stateName: string) => {
  const data = await fetcher(`v1/kpi/kpi-by-state/${stateName}`, {
    cache: "no-store",
  });
  return data;
};

export const getZipCodesKPIs = async (zipCode: number) => {
  const data = await fetcher(`v1/kpi/${zipCode}`, {
    cache: "no-store",
  });
  return data;
};

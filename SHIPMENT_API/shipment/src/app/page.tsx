import ShipmentForm from "@/components/shipmentForm";


import { GetMethod } from "@/service/shipmentapi";

export default async function Home() {
  try {
    const GetDataApi = await GetMethod();

    if (!GetDataApi || !Array.isArray(GetDataApi.carriers) || GetDataApi.carriers.length === 0) {
      throw new Error("Invalid or empty data received from API");
    }

    const carrierId = GetDataApi.carriers[0].carrier_id;
    
    const serviceCode = GetDataApi.carriers[0].services;
    const serviceCodeArray = serviceCode.map((item: any) => item.service_code);

    return (
      <div>
          <ShipmentForm/>
      </div>
    );
  } catch (error) {
    console.error("Error in Home component:", error);
    return <div>Error loading data. Please try again later.</div>;
  }
}


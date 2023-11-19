import useData from "./useData";

export interface Vehicle {
    vehicle_class: string,
    model: string,
    name: string,
    manufacturer:string
}

const useVehicles =() => useData<Vehicle>("/vehicles");

export default useVehicles;
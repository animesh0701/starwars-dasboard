import useData from "./useData";

export interface Species{
    name: string,
    classification: string,
    designation: string,
    average_height:string
}

const useSpecies =() => useData<Species>("/species");

export default useSpecies;
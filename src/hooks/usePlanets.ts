import useData from "./useData";

export interface Planet {
    name: string,
    population: string,
    climate: string,
    gravity:string
}

const usePlanets =() => useData<Planet>("/planets");

export default usePlanets;
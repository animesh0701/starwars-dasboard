import useData from "./useData";

export interface Ship {
    name: string,
    model: string,
    manufacturer: string,
    crew:string
}

const useStarships =() => useData<Ship>("/starships");

export default useStarships;
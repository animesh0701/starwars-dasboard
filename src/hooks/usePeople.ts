import useData from "./useData";

export interface People {
    name: string,
    gender: string,
    height: string,
    mass:string
}

const usePeople =() => useData<People>("/people");

export default usePeople;
import useData from "./useData";

export interface Film {
    title: string,
    director: string,
    release_date: Date,
    opening_crawl:string
}                                  //creating an interface for a custom kind of data using the use data generic hook

const useFilms =() => useData<Film>("/films");         //defining the end point for this specific data

export default useFilms;

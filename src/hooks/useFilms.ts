import useData from "./useData";

export interface Film {
    title: string,
    director: string,
    release_date: Date,
    opening_crawl:string
}

const useFilms =() => useData<Film>("/films");

export default useFilms;

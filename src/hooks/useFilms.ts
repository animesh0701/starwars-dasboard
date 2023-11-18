import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";

export interface Film {
    title: string,
    director: string,
    release_date: Date,
    opening_crawl:string
}

export interface FetchFilmsResponse{
    count: number,
    results: Film[],
}

const useFilms =() => {
    const [films, setFilms] = useState<Film[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const controller = new AbortController();
      apiClient.get<FetchFilmsResponse>("/films",{
        signal: controller.signal,
       })
        .then((res) => {
          setFilms(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
    }, []);

    return {films,error,loading}
}

export default useFilms;

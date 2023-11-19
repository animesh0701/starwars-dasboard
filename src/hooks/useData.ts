import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";



export interface FetchResponse<T>{
    count: number,
    results: T[],
}

const useData =<T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const controller = new AbortController();
      apiClient.get<FetchResponse<T>>(endpoint,{
        signal: controller.signal,
       })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
    }, []);

    return {data,error,loading}
}

export default useData;
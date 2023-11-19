import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "../services/api-client";



export interface FetchResponse<T>{          //Interface to fecth only the result object of the fetch request
    count: number,
    results: T[],
}

const useData =<T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);  //this state varible manages the lading state
  
    useEffect(() => {
      setLoading(true);
      const controller = new AbortController();  //defined a controller to  use abort controller
      apiClient.get<FetchResponse<T>>(endpoint,{
        signal: controller.signal,
       })
        .then((res) => {                        //Then fucntion to receive data from the promise and change loading state
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;    //Error handling 
          setError(err.message);
          setLoading(false);
        });
  
    }, []);

    return {data,error,loading}             //returning data,error and loading states
}

export default useData;

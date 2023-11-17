import apiClient from "./api-client";

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

class UserService {
    getAllfilms() {
        const controller = new AbortController();
        const request = apiClient.get<FetchFilmsResponse>("/films",{
            signal: controller.signal,
        });

        return {request,cancel: ()=>controller.abort()}
    }
}

export default new UserService();
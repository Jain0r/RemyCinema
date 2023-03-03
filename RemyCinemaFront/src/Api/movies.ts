import Api from "."
import { BASE_URL_API} from "./config"



export default class MoviesService{

    static async getAllMovies (){
        try {
            const rsp = await Api.get(`${BASE_URL_API}/movie`);
            const rspJson = await rsp.json()
            return rspJson
        } catch(error){
            console.log(error)
        }
    }

    static async getMovieById (id:number){
       try{
        const rsp = await Api.get(`${BASE_URL_API}/movie/${id}`);
        const rspJson = await rsp.json()
        return rspJson
       }catch(error){
        console.log(error)
       }
    }


    static async postMovie (data:any) {
        try {
            const rsp = await Api.post(`${BASE_URL_API}/movie/`,data);
            const rspJson = await rsp.json()
            return rspJson
        } catch(error){
            console.log(error)
        }
    }
}
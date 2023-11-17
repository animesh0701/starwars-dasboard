import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://swapi.dev/api'
})

export {CanceledError};
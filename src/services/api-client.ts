import axios, {CanceledError} from "axios"; //axios imports

export default axios.create({
    baseURL: 'https://swapi.dev/api'
})

export {CanceledError};
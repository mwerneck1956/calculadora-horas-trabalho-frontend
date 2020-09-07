import Axios from 'axios'

let developmentUrl = "http://localhost:3033"

export default Axios.create({
    baseURL : developmentUrl
})
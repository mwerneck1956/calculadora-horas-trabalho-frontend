import Axios from 'axios'

let cors = "https://cors-anywhere.herokuapp.com/" 
let developmentUrl = "http://localhost:3333"

export default Axios.create({

    baseURL : developmentUrl,
    headers: {
      'Access-Control-Allow-Origin': 'true',
       "X-Requested-With": "XMLHttpRequest" ,
       "Content-Type" : "application/json",

     },
})
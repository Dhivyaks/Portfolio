import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://backend-portfoliio.onrender.com/'
})

export default  Api
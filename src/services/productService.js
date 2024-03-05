import axios from 'axios'

const instance = axios.create({
    url: 'https://fakestoreapi.com/products/'
})

export default instance;
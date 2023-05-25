import axios from "axios";

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})

export const getPosts = async () => {
    const response = await api.get('/categories')
    return response.data
}
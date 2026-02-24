import axios from "axios"

const api_Igreja = axios.create({
    baseURL: "http://localhost:3001/"
})

api_Igreja.interceptors.request.use( async config => {
    const userData = localStorage.getItem("@igreja:userData")
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api_Igreja
const baseURL = "http://localhost:3001/projects";

import axios from "axios"

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = (data) => {
    const request = axios.post(baseURL, data)
    return request.then(response => response.data)
}

export {getAll, create}
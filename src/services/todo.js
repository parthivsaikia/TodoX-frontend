const baseURL = `http://localhost:3001/todos`;
import axios from "axios";

const getAllTodos = (projectId) => {
    const request = axios.get(`${baseURL}/${projectId}`)
    return request.then(response => response.data)
}

export {getAllTodos}
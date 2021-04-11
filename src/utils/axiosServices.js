import axios from 'axios'

const url = 'http://localhost:3020'

export const get = (end_point) => {
    return axios.get(`${url}/${end_point}`)
}
export const post = (end_point, body) => {
    return axios.post(`${url}/${end_point}`, body)
}
export const remove = (end_point, id) =>{
    return axios.delete(`${url}/${end_point}/${id}`)
}
export const put = (end_point, id, body) =>{
    return axios.put(`${url}/${end_point}/${id}`, body)
}
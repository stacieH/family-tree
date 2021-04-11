import { get, post, remove, put } from './axiosServices'

export const getMembers = () => {
    return get('members')
}
export const createMember = (body) => {
    return post('members', body)
}
export const deleteMember = (id) =>{
    return remove('members', id)
}
export const updateMember = (id, body) =>{
    return put('members', id, body)
}
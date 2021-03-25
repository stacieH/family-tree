const url = 'http://localhost:3020'
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const getMembers = () => {
    return fetch(`${url}/members`)
    .then(res=>res.json())
}

export const createMembers = (body) => {
    return fetch(`${url}/members`,{
        method: 'POST',
        headers,
        body:JSON.stringify(body)
    })
    .then(res=>res.json())
}

export const deleteMember = (id) =>{
    return fetch(`${url}/members/${id}`, {
        method:'DELETE'
    })
    .then(res=>res.json())
}
export const updateMember = (id, body) =>{
    return fetch(`${url}/members/${id}`, {
        method:'PUT',
        headers,
        body:JSON.stringify(body)
    })
    .then(res=>res.json())
}
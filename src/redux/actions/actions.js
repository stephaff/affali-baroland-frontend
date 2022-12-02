
export function getQuestion(data){
    return {
        type : 'GET_QUESTION',
        payload : data
    }
}

export function authentification(user){
    return {
        type : 'LOGIN',
        payload : user
    }
}

export function logout(user){
    return {
        type : 'LOGOUT',
        payload : null
    }
}

export function getQuestion(data){
    return {
        type : 'GET_QUESTION',
        payload : data
    }
}

export function addQuestion(data){
    return {
        type : 'ADD_QUESTION',
        payload : data
    }
}

export function login(user){
    return {
        type : 'LOGIN',
        payload : user
    }
}

export function logout(user){
    return {
        type : 'LOGOUT'
    }
}
const initialState = {
    
}

export function authReducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN':{
            return{ ...state,
                user : action.payload 
            }
        }
        case 'LOGOUT':{
            return{ }
        }
        default:{
            return state
        }
    }
}
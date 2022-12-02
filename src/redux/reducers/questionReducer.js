const initialState = {
    questions : []
}

export function questionReducer(state = initialState, action){
    switch(action.type){
        case 'GET_QUESTION':{
            return {
                ...state, 
                questions : action.payload
            }
        }
        default:{
            return state
        }
    }
}
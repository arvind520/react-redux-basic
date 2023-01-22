const initialState = {
    counter: 0,
}
export function counterReducer(state = initialState, action){
    switch(action.type){
        case 'increment':
            return {
                ...state,
                counter: state.counter+1,
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter-1,
            }
        default:
            return state
    }
}
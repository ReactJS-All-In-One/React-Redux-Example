import * as actionType from '../actions/actions';

const initialState ={
    counter:0,
    results : []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.INCREMENT :
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionType.DECREMENT :
            return { 
                ...state,
                counter : state.counter -1
            }
        case actionType.ADD :
            return{
                ...state,
                counter : state.counter + action.value
            }
        case actionType.SUBTRACT :
            return {
                ...state,
                counter : state.counter - action.value
            }
        case actionType.STORE_RESULT : 
            return {
                ...state,
                results : state.results.concat({ myid : new Date(), res : action.res })
            }
        case actionType.DELETE_RESULT :
        
            const updatedResult = state.results.filter(result=> result.myid !== action.id)

            return{
                ...state,
                results : updatedResult 
            }
    }
    return state;
}

export default reducer;
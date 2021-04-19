import * as actionType from '../actions/actionTypes';

const initialState ={
    results : [],
    userList : [],
    photosList:[],
    loading : true
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.STORE_RESULT : 
        // change data 
        // const updatedRes = action.res * 5;
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
        case actionType.FETCH_DATA:
            console.log(action.res)
            return { 
                ...state,
                userList:action.res
            };
        case actionType.FETCH_PHOTOS:
            return{
                ...state,
                photosList : action.res
            }
        // case actionType.LOADER:
        //     return{
        //         ...state,
        //         loading : action.falseLoading
        //     }
            // default : 
            // return state
    }
    return state;
}

export default reducer;
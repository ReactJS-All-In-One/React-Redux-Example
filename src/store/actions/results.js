
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveResult =(result)=>{
   // const updatedRes = result * 2;
    return {
        type : actionTypes.STORE_RESULT,
        res : result,
    }
}

export const storeResult =(result)=> {
    return (dispatch,getState) => {
        setTimeout(()=>{
            // const oldCounter = getState().ctrReducer.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result))
        },2000);
    }
}

export const deleteResult =(id)=> {
    return {
           type : actionTypes.DELETE_RESULT,
           id : id
    }
}

export const userList=(res)=>{
    return { 
        type : actionTypes.FETCH_DATA,
        res :res
    }
}

export const fetchData =()=>{
   return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response =>{
                //  console.log(response.data)
                 dispatch(userList(response.data))
             })
        // setTimeout(() => {
        //     dispatch(userList())            
        // }, 2000);
   }
}

export const photosList =(res)=>{
    return{
        type : actionTypes.FETCH_PHOTOS,
        res :res
    }
} 

// export const fetchPhotos =()=> {
//     return (dispatch)=> {
//         axios.get('https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10')
//         .then(res=>{
//             dispatch(photosList(res.data))
//         })
//     }
// }

export const fetchPhotos =()=> {
    const APP_ID = '60783bf2d2def1200a5b60e9';
    return (dispatch)=> {
        axios.get('https://dummyapi.io/data/api/user?limit=50',{ headers: { 'app-id': APP_ID } })
        .then(res=>{
            // console.log(res.data)
            dispatch(photosList(res.data.data))
        })
    }
}

// export const loader =(falseLoading)=>{
//     return{
//         type : actionTypes.LOADER,
//         falseLoading : falseLoading
//     }
// }


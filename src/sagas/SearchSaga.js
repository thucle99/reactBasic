import {put,takeEvery} from 'redux-saga/effects'
import searchAPI from '../fetchAPI/searchAPI'
import * as types from '../constant'
// chỉ * ms dùng được yield
function* searchData(action){
    try{
        const res = yield searchAPI(action.payload)    // res bên addAPI
        console.log('day la:',res)
        yield put({  // ban xang reduce kiểu success
            type :types.SEARCH_ITEM_SUCCESS,  // them du lieu vao
            payload :res     
        })
        // yield put({
        //     type :types.GET_ITEM_REQUEST   // load lại luôn
        // })
    }catch(error){
        yield put({
            type : types.SEARCH_ITEM_FAILURE,
            payload :{
                errorMessage : error.message
                // gửi lỗi xang 
            }
        })
    }
}
export const SearchSaga =[ // nhận connect từ container
    takeEvery(types.SEARCH_ITEM_REQUEST,searchData)
    // nhan tu ben saga thấy request thì gọi getListItem
];
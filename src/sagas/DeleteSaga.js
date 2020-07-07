import {put,takeEvery} from 'redux-saga/effects'
import deleteAPI from '../fetchAPI/deleteAPI'
import * as types from '../constant'
// chỉ * ms dùng được yield
function* deleteData(action){
    try{
        const res = yield deleteAPI(action.payload)    // res bên addAPI
        yield put({  // ban xang reduce kiểu success
            type :types.DELETE_ITEM_SUCCESS,  // them du lieu vao
            payload :res     
        })
        yield put({
            type :types.GET_ITEM_REQUEST   // load lại luôn
        })
    }catch(error){
        yield put({
            type : types.DELETE_ITEM_FAILURE,
            payload :{
                errorMessage : error.message
                // gửi lỗi xang 
            }
        })
    }
}
export const DeleteSaga =[ // nhận connect từ container
    takeEvery(types.DELETE_ITEM_REQUEST,deleteData)
    // nhan tu ben saga thấy request thì gọi getListItem
];
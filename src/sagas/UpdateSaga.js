import {put,takeEvery} from 'redux-saga/effects'
import updateAPI from '../fetchAPI/updateAPI'
import * as types from '../constant'
// chỉ * ms dùng được yield
function* updateData(action){
    try{
        console.log('action...',action);
        console.log('payload...',action.payload);
        const res = yield updateAPI(action.payload)    // res bên addAPI
        yield put({  // ban xang reduce kiểu success
            type :types.UPDATE_ITEM_SUCCESS,  // them du lieu vao
            payload :res     
        })
        yield put({
            type :types.GET_ITEM_REQUEST   // load lại luôn
        })
    }catch(error){
        yield put({
            type : types.UPDATE_ITEM_FAILURE,
            payload :{
                errorMessage : error.message
                // gửi lỗi xang 
            }
        })
    }
}
export const UpdateSaga =[ // nhận connect từ container
    takeEvery(types.UPDATE_ITEM_REQUEST,updateData)
    // nhan tu ben saga thấy request thì gọi getListItem
];
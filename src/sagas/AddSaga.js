import {put,takeEvery} from 'redux-saga/effects'
import addApi from '../fetchAPI/addAPI'
import * as types from '../constant'
// chỉ * ms dùng được yield
function* addData(action){
    try{
        const res = yield addApi(action.payload)    // res bên addAPI
        console.log('day la:',action.payload)
        yield put({  // ban xang reduce kiểu success
            type :types.ADD_ITEM_SUCCESS,  // them du lieu vao
            payload :res     
        })
        yield put({
            type :types.GET_ITEM_REQUEST   // load lại luôn
        })
    }catch(error){
        yield put({
            type : types.ADD_ITEM_FAILURE,
            payload :{
                errorMessage : error.message
                // gửi lỗi xang 
            }
        })
    }
}
export const AddSaga =[ // nhận connect từ container
    takeEvery(types.ADD_ITEM_REQUEST,addData)
    // nhan tu ben saga thấy request thì gọi getListItem
];
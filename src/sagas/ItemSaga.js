import {put,takeEvery} from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import * as types from '../constant'
// dùng để chạy từng dòng 1
function* getListItem(){
    try{
        const res =yield getItems()
        // lấy dữ liệu từ hàm getItems(chứa dữ liệu của file json) và gán cho 1 hằng số res
        yield put({  // ban xang reduce kiểu success
            type :types.GET_ITEM_SUCCESS,
            payload :res     //có dữ liệu thì lưu ở đây
        })
    }catch(error){
        yield put({
            type : types.GET_ITEM_FAILURE,
            payload :{
                errorMessage : error.message
                // gửi lỗi xang 
            }
        })
    }
}
export const ItemSaga =[ // nhận connect từ container
    takeEvery(types.GET_ITEM_REQUEST,getListItem)
    // nhan tu ben saga thấy request thì gọi getListItem
];
import *as types from '../constant'
const DeFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
}

export default (state = DeFAULT_STATE, action) => {
    
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
            // 
            return {
                ...state,
                isFetching: true  // dang trong qua trinh load
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,  // chính là default 
                isFetching: false, // đẫ load xong
                dataFetched: true,  // có dữ liệu
                error: false,
                errorMessage: null,
                listItem: action.payload  // dlieu từ saga gửi xang

            }
        case types.GET_ITEM_FAILURE:
            return {   //t,hop IteamSaga catch
                ...state,
                isFetching: false,   // không có dlieu
                error: true,  // xuất hiện lỗi
                errorMessage: action.payload.errorMessage
            }
        //================================



        //==================================
        case types.ADD_ITEM_REQUEST:
            // 
            return {
                ...state,
                isFetching: true  // dang trong qua trinh load
            }
        case types.ADD_ITEM_SUCCESS:
            return {
                ...state,  // chính là default 
                isFetching: false, // đẫ load xong
                dataFetched: true,  // có dữ liệu
                error: false,
                errorMessage: null,
                //
            }
        case types.ADD_ITEM_FAILURE:
            return {   //t,hop IteamSaga catch
                ...state,
                isFetching: false,   // không có dlieu
                error: true,  // xuất hiện lỗi
                errorMessage: action.payload.errorMessage
            }
        //==================================
        case types.DELETE_ITEM_REQUEST:
            // 
            return {
                ...state,
                isFetching: true  // dang trong qua trinh load
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,  // chính là default 
                isFetching: false, // đẫ load xong
                dataFetched: true,  // có dữ liệu
                error: false,
                errorMessage: null,
                //
            }
        case types.DELETE_ITEM_FAILURE:
            return {   //t,hop IteamSaga catch
                ...state,
                isFetching: false,   // không có dlieu
                error: true,  // xuất hiện lỗi
                errorMessage: action.payload.errorMessage
            }
        //==================================
        case types.UPDATE_ITEM_REQUEST:
            // 
            return {
                ...state,
                isFetching: true  // dang trong qua trinh load
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,  // chính là default 
                isFetching: false, // đẫ load xong
                dataFetched: true,  // có dữ liệu
                error: false,
                errorMessage: null,
                //
            }
        case types.UPDATE_ITEM_FAILURE:
            return {   //t,hop IteamSaga catch
                ...state,
                isFetching: false,   // không có dlieu
                error: true,  // xuất hiện lỗi
                errorMessage: action.payload.errorMessage
            }   
            
        //==================================
        case types.SEARCH_ITEM_REQUEST:
            // 
            return {
                ...state,
                isFetching: true  // dang trong qua trinh load
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,  // chính là default 
                isFetching: false, // đẫ load xong
                dataFetched: true,  // có dữ liệu
                error: false,
                errorMessage: null,
                listItem :action.payload
                //
            }
        case types.SEARCH_ITEM_FAILURE:
            return {   //t,hop IteamSaga catch
                ...state,
                isFetching: false,   // không có dlieu
                error: true,  // xuất hiện lỗi
                errorMessage: action.payload.errorMessage
            }    
        default:
            return state;
    }
}
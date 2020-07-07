import *as types from '../constant'
export function getListItem(payload){
    return({
        type :types.GET_ITEM_REQUEST,  // bdau load du lieu
        payload         //dữ liệu nhập vào
    })
}
export function addListItem(payload){  //payload là data
    return({
        type :types.ADD_ITEM_REQUEST,
        payload
    })
}
export function deleteItem(payload){  //payload là data
    return({
        type :types.DELETE_ITEM_REQUEST,
        payload
    })
}
export function updateItem(payload){  //payload là data
    return({
        type :types.UPDATE_ITEM_REQUEST,
        payload
    })
}

export function searchListItem(payload){  //payload là data
    return({
        type :types.SEARCH_ITEM_REQUEST,
        payload
    })
}
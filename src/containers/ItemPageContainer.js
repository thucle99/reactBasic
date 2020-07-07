import React from 'react'
import Item from '../components/Items'
import *as actions from '../actions/ItemPageActions'
import {connect}  from 'react-redux'
class ItemPageContainer extends React.Component{
    componentDidMount(){   // gọi các action
        this.props.initLoad()
    }

    render(){
        return(
            <Item {...this.props} />
            // ... đại diện cho truyền tất cả dlieu vào prop ném cho component
        );
    }
}

const mapStateToProps =(state) =>{// dữ liệu
    return{
        items : state.items.listItem // items lấy từ reduce 
    } // listItem là defaustate
}
const mapDispatchToProps = (dispatch) =>{
    return{
        initLoad :() =>{
            dispatch( actions.getListItem() )
        },
        add:(data)=>{         // data bên Item bắn xang
            dispatch(actions.addListItem(data));
        }, 
        delete :(id) =>{
            dispatch(actions.deleteItem(id))
        }, 
        update :(data) =>{
            dispatch(actions.updateItem(data))
        },
        
        search:(data)=>{         // data bên Item bắn xang
            dispatch(actions.searchListItem(data));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)
import React, { Component } from "react";

class Items extends Component {
    constructor(){
        super()
        this.state = {
            statename:'',
            stateage:'',
            statesearch:'',
            id:0
        }   
    }
    add = (data)=>{    // add là this.state.statename
        this.props.add(data)  //gọi add bên container 
    }
    update = (data)=>{    // data là 1 string
        console.log('data....',data);
        
        this.props.update(data)  //gọi add bên container 
    }

    search =(data) =>{
        console.log('search...',data);
        this.setState({
            statesearch:data
        })
        this.props.search(data);
    }
    render() {
        let listData = [];
        if (this.props.items) {  // item gui từ container xang
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key} >
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th> <button  onClick={()=>{       // delete data
                            this.props.delete(item.id)
                        }}>Delete</button>
                        </th>

                        <th> <button  onClick={()=>{  // update data
                            this.setState({   // lay du lieu tai thanh nhap
                                statename:item.name,
                                stateage:item.age,
                                id:item.id
                            })
                        }}>Update</button>
                        </th>
                    </tr>
                )
            })
        }
        return (
            <div className="container">
                <div>
                    <div>
                        Username:
                        <input
                            type="text"
                            value={this.state.statename}
                            onChange={(e)=>{ this.setState( {
                                statename:e.target.value 
                            })
                        }}
                        />

                        Age:
                        <input
                            type="text"
                            value={this.state.stateage}
                            onChange={(e)=>{ this.setState( {
                                stateage:e.target.value 
                            })
                        }}
                        />

                        <button onClick={()=> {     // thêm vào dữ liệu
                            this.add({
                                name:this.state.statename,
                                age:this.state.stateage
                            })  
                            this.setState({
                                statename:'',
                                stateage:''
                            })
                            }
                        } >Add</button>    

                        <button onClick={()=> {  // thay doi gtri
                            this.update({
                                name:this.state.statename,
                                age:this.state.stateage,
                                id:this.state.id
                            })  
                        }
                        } >AcceptUpdate</button>
                    </div>
                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id"> ID cuả dữ liệu---</th>
                                <th className="name">Tên--</th>
                                <th className="name">---Tuổi</th>
                            </tr>

                            {listData}
                        </tbody>
                    </table>
                    <div className='search'>
                        <input
                            type="text"
                            value={this.state.statesearch}
                            onChange={(e)=>{ this.setState( 
                                this.search(e.target.value)
                               
                            )
                        }}
                        />
                        <button onClick={()=>
                            this.search(this.state.statesearch)
                        }> Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Items;
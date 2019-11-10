import React from 'react'
import roomsDropDownList from './roomsdropdownlist'
class roomsMenue extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activelist:false
        }
    }
    make_list_active=()=>{
        this.state.activelist ?this.setState({activelist:false}):this.setState({activelist:true})
   }
    render(){
        return(
            <button style={{...btn_style,position:"relative"}} onClick={()=>{this.make_list_active()}}>
                rooms
                {this.state.activelist && <roomsDropDownList/>}
            </button>

        )
    }
}

let btn_style={
    border:"1px solid gray",
    borderRadius:"3px",
    background:"white"
}
export default roomsMenue;
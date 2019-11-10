import React from 'react';
class roomsDropDownList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            button_values:["any","1","2","3","4","5"]
        }
    }
    render(){
        let buttons=this.state.button_values.map((value)=>{
            return(
                <div className="radio">
                <button style={{...btn_style}} value={value}>
                    {value}
                </button>
                </div>
            )
        })
        return(
            <div style={{width:"363px",height:"214px",position:"absolute",zIndex:"999",background:"white"
            ,top:"36px",left:"12px",}} className="row flex-column shadow-sm">
                <div>
                    <p>
                    rooms
                    </p>
                </div>
                <div className="d-flex flex-wrap m-3">
                    {buttons}
                </div>
            </div>
        )
    }
}

let btn_style={
    border: "1px solid red",
    borderRadius:"50%",
    width:"52px",
    height: "43px",
    background:"white",
    margin:"5px"
}
export default roomsDropDownList;
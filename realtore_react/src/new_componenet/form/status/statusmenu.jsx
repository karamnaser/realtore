import React from 'react';
class StatusMenu extends React.Component{
    constructor(props){

        super(props)

        this.state={

            activelist:false,

            button_values:["sell","rent"],
            button_number:[1,2]

        }
    }

    make_list_active=()=>{

        this.state.activelist ?this.setState({activelist:false}):this.setState({activelist:true})

   }

    render(){

        let buttons=this.state.button_number.map((value,i)=>{

            return(

                <div style={{display:"flex",alignItems:"center"}} 
                     className="radio">

                    <button style={{...status_menue_style}} 
                            value={value}
                            name="status"
                            onClick={(e)=>{
                                this.props.sendvaluetostate(e) 
                               } 
                        }  
                    >
                        
                            {this.state.button_values[i]}    

                    </button>

                   <p style={{margin:"0"}}>

                         {value}

                   </p>


                </div>
            )
        })
        return(

        <div id="status-menu" 
             style={{position:"relative"}}
        >
            

            <button style={{...status_btn_style}} 
                    onClick={()=>{this.make_list_active()}}>

                status

           
            </button>

            {   
                    
                    this.state.activelist 
    
                        &&
                        
                        
                    <div style={{width:"263px",height:"444px",position:"absolute"
                                ,zIndex:"999",background:"white"
                                ,top:"36px",left:"0px"}} className="shadow-sm">
    
                     <div style={{background:"gray"}} 
                          className="d-flex justify-content-between">
    
                            <p>
    
    
                                statuse
    
    
                            </p>
    
    
                        </div>
    
                    <div>
    
                        {buttons}
    
                    </div>
    
                </div>
    
            }
    
    
        </div>

        )
    }

}
let status_btn_style={
    border:"1px solid gray",
    borderRadius:"3px",
    background:"white"
}

let status_menue_style={
    border: "1px solid red",
    borderRadius:"50%",
    width:"52px",
    height: "52px",
    background:"white",
    marginTop:"20px"
    }
export default StatusMenu;
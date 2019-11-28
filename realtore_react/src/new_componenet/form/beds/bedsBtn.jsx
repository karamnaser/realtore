import React from 'react'
class BedsBtn extends React.Component{
    constructor(props){
        super(props)
    
    }



    render(){

        
        return(

        <div id="beds-menu" 
             className="menue" 
             style={{position:"relative"}}>


            <button style={{...beds_style}}
                    value="beds" 
                    onClick={()=>{


                        this.props.make_list_active(3);
                        
                        
                        }}>

                Beds

               

            </button>

        </div>

        )
    }
}
export default BedsBtn;


let beds_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
}


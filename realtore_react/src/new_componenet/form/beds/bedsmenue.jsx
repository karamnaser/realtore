import React from 'react'
class BedsMenue extends React.Component{
    constructor(props){
        super(props)
        this.state={
            activelist:false,
            button_values:["any",1,2,3,4,5]
        }
    }

    make_list_active=()=>{
        this.state.activelist ?this.setState({activelist:false}):this.setState({activelist:true})

   }

    render(){

        let buttons=this.state.button_values.map((value)=>{

            return(

                <div className="radio">

                <button style={{...beds_menue_style}} 
                        name="number_of_beds"
                        value={value}
                        onClick={(e)=>this.props.sendvaluetostate(e)}
                >


                    {value}


                </button>

                </div>
            )
        })
        return(

        <div id="beds-menu" 
             style={{position:"relative"}}>


            <button style={{...beds_style}} 
                    onClick={()=>{this.make_list_active()}}>

                Beds

               

            </button>


            {
                    this.state.activelist 

                 && 

                 <div style={{width:"363px",height:"214px"
                             ,position:"absolute",zIndex:"999",background:"white"
                             ,top:"36px",left:"20px",}} 
                       className="row flex-column shadow-sm">


                <div style={{background:"gray",textAlign:"left"}}>

                    <p>

                    Bedrooms

                    </p>
                    
                </div>
                
                <div className="d-flex flex-wrap m-3">

                    {buttons}

                </div>

            </div>
        }

        </div>

        )
    }
}
export default BedsMenue;
let beds_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
}

let beds_menue_style={

    border: "1px solid red",

    borderRadius:"50%",

    width:"52px",

    height: "43px",

    background:"white",

    margin:"5px"
}
import React from 'react'
class Price_btn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activelist:false,
            pricelinks:["600k","1.2M","1.8M","4M"]
        }
    }
    make_list_active=()=>{
         this.state.activelist ?this.setState({activelist:false}):this.setState({activelist:true})
    }
    render(){
        return(
            <div id="price-menu" 
                 style={{position:"relative"}}>
                
            <button style={{...price_btn_style}} onClick={()=>{this.make_list_active()}}>

                Price

            </button>

            {

                this.state.activelist

                &&

                <div style={{...price_menue_style,position:"absolute"}} 
                     className="price-menue shadow-sm">


            <div style={{textAlign:"left",background:"gray"}}>

                <p style={{margin:"0px",marginBottom:"20px"}}>

                Price range

                </p>

            </div>

            <div style={{display:"flex"}}>

                <input name="price" type="text"
                       onKeyPress={(e)=>this.props.sendvaluetostate(e)}
                                      
                />

            </div>

                <ul style={{listStyle:"none",width:"60%"}}>

                {this.state.pricelinks.map((link)=>{

                    return(

                         <li data-valu={link}>

                         {link}

                         </li>

                    )

                })}

            </ul>

            </div>

        }

            </div>
        )
    }

}
let price_btn_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
    
}

let price_menue_style={

    zIndex:"999",

    background:"white",

    top:"36px",

    left:"5px",

    textAlign:"right"

}

export default Price_btn;
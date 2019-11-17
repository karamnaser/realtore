import React from 'react'

class BigImgSection extends React.Component{

    render(){

        let navbar=["buy","rent","just sold","home value"]

        return(

            <div style={{backgroundImage:"url(https://du858p10xk-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/54.jpg)",padding: "88px",
            backgroundSize :"cover"}}>

                 <div style={paragraph_style}>
        
        
                     <p>The Home of Home Search℠</p>
        
        
                    <p>With the most complete source of homes for sale & real estate near you</p>
        
        
                </div>
        
                <div>
                    <ul style={list_style}>
                        {navbar.map((iteam)=>{
                          return(
        
                                <li><a style={{color:"white",textDecoration:"none"}} href="/">{iteam}</a></li>        
        
                            )
        
                        })}
                    </ul>
        
                </div>
        
                <div style={{display:"flex",margin:"100px auto",width:"10%"}}>
        
                    <div>
        
                        <input id="search-input"
                               style={{...input_style,width:"201px",height:"36px"}} 
                               type="text"/>
        
                    </div>
        
                    <div style={{width:"40px", height:"36px"}}>
        
                        <button onClick={()=>this.search()} style={btn_style}>
        
                                search
        
                         </button>
        
                     </div>
        
            </div>
        
        </div>
        

        )
    }

}

let paragraph_style={

    color:"white",
    margin:"40px 0"

}

let list_style={

    listStyle: "none",

    display: "flex",

    width: "40%",

    justifyContent: "space-around",

    margin: "20px auto",

    color: "white"

}

let input_style={
    border:"1px solid gray",

    borderTopLeftRadius:"2px",

    borderBottomLeftRadius:"2px"

}

let btn_style={

    height:"100%",

    background:"red",

    border:"1px solid gray",

    borderTopRightRadius:"2px",

    borderBottomRightRadius:"2px"

}
export default BigImgSection
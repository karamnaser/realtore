import React from 'react';
import '../../header.css';
class HeaderRightside extends React.Component{
    render(){
        
        const leftsidearr=this.props.leftsidearr.map((iteam)=>{
         return(
            <div>
                <a href={iteam[1]}>{iteam[0]}</a>
            </div>
         )   
        });
        return(
            <div className="right-side-links">
                {leftsidearr}
            </div>
        )
        
    }
}
export default HeaderRightside;
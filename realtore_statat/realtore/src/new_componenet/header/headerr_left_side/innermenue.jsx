import React from 'react';
class InnerMenue extends React.Component{
    
    render(){
        
        let Innermenuelist=this.props.innermenue.map((iteam)=>{
            return(
                <ul className="inneriteam-list">
                {iteam.map((link_arr)=>{
                    return(
                        <li className="inneriteam">
                        <a href={link_arr[1]}>{link_arr[0]}</a>
                        </li>)})}
                        </ul>)});
                    
                        return (
                            <div onMouseLeave={()=>this.props.onMouseLeave(this.props.index)} 
                            id={this.props.index}  className="container-fluid inner-iteam-container shadow-sm">
                            {Innermenuelist}
                            </div>);
                        }
                    } 
                    export default  InnerMenue;
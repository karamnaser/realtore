import React from 'react';
class InnerMenue extends React.Component{
    constructor(props){
        super(props)
        this.state={
            iteams:this.props.iteam
        };
    }
    render(){
        console.log(this.state.iteams);
        let Innermenuelist=this.state.iteams.map((iteam)=>{
            
            return(
    
                iteam.map((obj)=>{
                    return(
                        <li className="inneriteam">
                        <a href={obj["href"]}>{obj["title"]}</a>
                        </li>)})
                    
                    
                    )
                });

                return (
                    <ul className="inneriteam-list">{Innermenuelist}</ul>
                    )
                    
                    
                }
            } 
            export default  InnerMenue;
import React from 'react';
class InnerMenue extends React.Component{
    constructor(props){
        super(props)
        this.state={
            iteams:this.props.iteam
        };
    }
    render(){
        
        let Innermenuelist=this.state.iteams.map((iteam)=>{
            console.log("iteam is:",iteam)
            return(
                <ul className="inneriteam-list">
                {iteam.map((obj)=>{
                    return(
                        <li className="inneriteam">
                        <a href={obj["href"]}>{obj["title"]}</a>
                        </li>)})}
                        </ul>)
                    }
                    );
                    return (
                        {Innermenuelist}
                        )
                        
                        
                    }
                } 
                export default  InnerMenue;
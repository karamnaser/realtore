import React from 'react';
class HeaderIcon extends React.Component{
    render(){
        return (<div onMouseOver={()=>{this.props.onMouseOver(this.props.div)}}
        className="header-icon">
        <img src={this.props.icon}/>
        </div>)
    }
} 
export default HeaderIcon;
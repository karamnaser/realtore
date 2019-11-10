import React from 'react';
import  HeaderIcon from './header-icon';
import icon from '../../icons/logo.png';
import NaveMenue from './headerr_left_side/nave-menue';
import HeaderRightside from './header_right_side/headerrightside';
import '../header.css'
    class HeaderNave extends React.Component{
        render(){
        let donothing=()=>{

        }
        return (<div style={{position:"relative"}} 
        className="container-fluid header">
        <div id="header-left-side">
        <HeaderIcon onmousehover={donothing}  icon={icon}/>
        <NaveMenue/>
        </div>
        <div id="header-right-side">
        <HeaderRightside leftsidearr={[["log-in","/"],["sign-up","/"],["advertise","/"]]}/>
        </div>
        </div>)
    }
} 
export default  HeaderNave;
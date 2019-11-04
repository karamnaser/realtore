import React from 'react';
import  HeaderIcon from './header-icon';
import icon from '../../icons/logo.png';
import iphonicon from '../../icons/iphon.png';
import NaveMenue from './headerr_left_side/nave-menue';
import HeaderRightside from './header_right_side/headerrightside';
import IphoneHiddinBox from './header_right_side/iphone_hiddin_box'
    import '../header.css'
    class HeaderNave extends React.Component{
        render(){
            function disable_div_on_leave(id) {
                let elemnt=document.getElementById(id);
                if(elemnt){
                    elemnt.style.display="none";
                }
            }
            function displayDivonHover(id) {
                let elemnt=document.getElementById(id);
                if(elemnt){
                    elemnt.style.display="flex";
                }
            }
            function doNothing(id){

            }
            
        const iphone_inner_list=[
            [["Realtor.com® mobile apps","/",true],["FIND HOME FOR SELL OR RENT ON"+ 
            "IPHONE IPADE ANDROIED","",false]],[["Realtor.com® Real Estate","",false],["iOS","",true],
            ["Android","/",true]]
        ];
        
        return (<div className="container-fluid header">
        <div id="header-left-side">
        <HeaderIcon onMouseOver={doNothing} icon={icon}/>
        <NaveMenue/>
        </div>
        <div onMouseLeave={()=>{
            disable_div_on_leave("iphone-hiddin-box-id");
        }}  id="header-right-side">
        <HeaderIcon div="iphone-hiddin-box-id" onMouseOver={displayDivonHover}
         icon={iphonicon}/>
        <HeaderRightside leftsidearr={[["log-in","/"],["sign-up","/"],["advertise","/"]]}/>
        <IphoneHiddinBox div="iphone-hiddin-box-id" 
          iteam={iphone_inner_list}/>
        </div>
        </div>)
    }
} 
export default  HeaderNave;
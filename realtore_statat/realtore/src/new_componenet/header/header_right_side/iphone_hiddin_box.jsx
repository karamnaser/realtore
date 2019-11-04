import React from 'react';
import IphoneHiddinBoxElemnt from './iphone_hiddin_box_elemnt';
import './iphon_hiddin_box.css'
class IphoneHiddinBox extends React.Component{
    render(){
        let iphon_box_iteams=this.props.iteam.map((arr_iteam)=>{
            return(
            <div className="iphon-hiddin-box-elemnt">
            <IphoneHiddinBoxElemnt  arr={arr_iteam}/> 
            </div>
        )})
        return(
           <div id="iphone-hiddin-box-id" 
           className="iphone-hiddin-box shadow-sm">
               {iphon_box_iteams}
           </div>
        )
    }

}
export default IphoneHiddinBox;
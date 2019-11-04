import React from 'react';
import '../../nav-menue.css';
import InnerMenue from './innermenue';
import {buy_link1,buy_link2,buy_link3,sell_link1,sell_link2,rent_link1,rent_link2,rent_link3,
    mortgage_link1,mortgage_link2,mortgage_link3,find_realtore_link1,
    find_realtore_link2,find_realtore_link3,news_and_insigth_link1, 
    news_and_insigth_link2,news_and_insigth_link3}
    from './links_data.jsx'  
class NaveMenue extends React.Component{
    render(){
        function display_div_on_hover(id,id_arr) {
            let elemnt=document.getElementById(id);
            if(elemnt){
                elemnt.style.display="flex";
            }
            for(var i=0;i<id_arr.length;i++){
                let elemnt2=document.getElementById(id_arr[i]);
                if(elemnt2 != elemnt){
                    elemnt2.style.display="none";
                }
            }
        }
        function disable_div_on_leave(id_arr) {
            for(var i=0;i<id_arr.length;i++){
                let elemnt=document.getElementById(id_arr[i]);
                if(elemnt){
                    elemnt.style.display="none";
                }
            }
        }
    
        const links = this.props.links_arr.map((link)=>{  
            return (
                <li id={"link-"+link[2]} onMouseOver={()=>
                    {display_div_on_hover("div-"+link[2],
                    ["div-1","div-2","div-3","div-4","div-5","div-6"])}} 
                    className="menue-iteam">
                    <a href={link[1]}>{link[0]}</a>
                    </li>
                    )
                });
                
                return (
                    <div onMouseLeave={()=>{
                        disable_div_on_leave(["div-1","div-2","div-3","div-4","div-5","div-6"])
                    }} className="nave-menue">
                    <ul>{links}</ul>
                    <InnerMenue onMouseLeave={disable_div_on_leave} index={"div-1"} 
                    innermenue={[buy_link1,buy_link2,buy_link3]}/>
                    <InnerMenue onMouseLeave={disable_div_on_leave} 
                    index={"div-2"} innermenue={[sell_link1,sell_link2]}/>
                    <InnerMenue onMouseLeave={disable_div_on_leave} index={"div-3"} 
                    innermenue={[rent_link1,rent_link2,rent_link3]}/>
                    <InnerMenue onMouseLeave={disable_div_on_leave} index={"div-4"} 
                    innermenue={[mortgage_link1,mortgage_link2,mortgage_link3]}/>
                    <InnerMenue onMouseLeave={disable_div_on_leave} index={"div-5"} 
                    innermenue={[find_realtore_link1,find_realtore_link2,find_realtore_link3]}/>
                    <InnerMenue onMouseLeave={disable_div_on_leave} index={"div-6"} 
                    innermenue={[news_and_insigth_link1,news_and_insigth_link2,news_and_insigth_link3]}/>
                    </div>
                    )
                }
            } 
            export default NaveMenue;
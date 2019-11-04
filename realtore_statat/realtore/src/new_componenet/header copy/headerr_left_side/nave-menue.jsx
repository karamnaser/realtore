import React from 'react';
import '../../nav-menue.css';
import InnerMenue from './innermenue';
import {navigation} from '../nav-data/links_data'
class NaveMenue extends React.Component{
    constructor(props){
        super(props);
        this.state={
            objs:navigation,
            hoverdlink:null
        };
        
    }
    render(){
        let onHover=(i)=>{
            console.log("im hover function:",i)
            this.setState({hoverdlink:i})
        }
        const links = this.state.objs.map((obj_iteam,i)=>{  
            return (
                <ul>
                <li onMouseOver={()=>onHover(i)} className="menue-iteam">
                <a href="/">{obj_iteam.label}</a>
                {this.state.hoverdlink &&<li> 
                    <InnerMenue iteam={obj_iteam.innerMenu}/>
                    </li>}
                    </li>
                    </ul>
            )
            });
            
            return (
                <div>
                {links}
                </div>
                )
            }
        } 
        export default NaveMenue;
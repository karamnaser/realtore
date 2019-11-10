import React from 'react';
import magglass from '../../icons/magglass.png'
import Price_btn from './price_btn/price_btn';
import PropertyMenue from './property/propertymenu'
import BedsMenue from './beds/bedsmenue'
import roomsMenue from './rooms/roomsmenue'
import StatusMenu from './status/statusmenu'
import {apartments} from '../galary_data/apartments_data.jsx';
import {cities} from '../galary_data/citie_data.jsx';
import Gallary from '../gallary/gallary.jsx';
class Form extends React.Component{

    constructor(props){

        super(props)

        this.state={
            choosin_city_apartments : this.props.iteam ,

            choosin_city_apartments_copy:this.props.iteam,  
            
            filter_sell_apartments:this.props.is_for_sell,

            btn_names : {}
            
        }

    }

    search=()=>{
        let input=document.getElementById("search-input");
        let value=input.value;
        let city=cities
        let choosen_aprtment=[]
        for(var i=0;i<apartments.length;i++){
            if(value==city[i]["label"]){
                choosen_aprtment.push(apartments[i])
            }
            
        }
        if(choosen_aprtment.length==0){
            choosen_aprtment=apartments
        }

        this.setState({
            choosin_city_apartments: [...choosen_aprtment]
          })

          console.log(this.state.choosin_city_apartments)

          this.setState({
            choosin_city_apartments_copy: [...this.state.choosin_city_apartments]
          })

    }

    getbuttonvalu=(e)=>{
        
        let target=e.target;

        let name=target.name

        let value=target.value

        this.state.btn_names[name]=value

        console.log(this.state.btn_names)

        this.filter()

    }


    filter=()=>{
        
        let choosin_appartment=[]

        let filterd_arr=this.state.choosin_city_apartments_copy

        let bool=false

        console.log(filterd_arr)
        
        for(var i=0;i<filterd_arr.length;i++){

            for(let key in this.state.btn_names){
            
            if(filterd_arr[i][key]!=this.state.btn_names[key]){
                    bool=false

                    break

            }

            bool=true

        }
        if(bool==true){

            choosin_appartment.push(filterd_arr[i])

            bool=false
        }

    }
        
        this.setState({

            choosin_city_apartments: [...choosin_appartment]
            
          })

        }

    

    render(){
        
        return(
             <div>

                <div id="form" className="d-flex m-4">

                    <div style={{display:"flex",margin:"0 10px"}}>

                        <div>

                            <input id="search-input"
                                   style={{...input_style,width:"201px",height:"36px"}} 
                                   type="text"/>

                        </div>

                        <div style={{width:"40px", height:"36px"}}>

                                <button onClick={()=>this.search()} style={{...style}}>

                                <img style={{width:"100%",height:"100%"}} 
                                     src={magglass}/>

                                 </button>

                        </div>

                    </div>


                <Price_btn sendvaluetostate={this.getbuttonvalu}/>

                <PropertyMenue sendvaluetostate={this.getbuttonvalu}/>

                <BedsMenue sendvaluetostate={this.getbuttonvalu}/>

                <StatusMenu  sendvaluetostate={this.getbuttonvalu}/>

                <roomsMenue/>

                
            </div>


            <Gallary items={this.state.choosin_city_apartments}
                     main_image={this.props.main_image} 
                     title={this.props.title}  
                     gotfooter={this.props.bool}/>


            </div>
        )
    }
}

let style={
    widows:"100%",

    height:"100%",

    background:"red",

    border:"1px solid gray",

    borderTopRightRadius:"2px",

    borderBottomRightRadius:"2px"

}

let input_style={
    border:"1px solid gray",

    borderTopLeftRadius:"2px",

    borderBottomLeftRadius:"2px"

}

export default Form;

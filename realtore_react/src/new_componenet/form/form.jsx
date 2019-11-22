import React from 'react';
import magglass from '../../icons/magglass.png'
import Price_btn from './price_btn/price_btn';
import PropertyMenue from './property/propertymenu'
import BedsMenue from './beds/bedsmenue'
import StatusMenu from './status/statusmenu'
import Gallary from '../gallary/gallary.jsx';
class Form extends React.Component{

    constructor(props){

        super(props)

        this.state={
            choosin_city_apartments : [],

            choosin_city_apartments_copy:[],
            
            cities: [],

            openfilterlist:false,
            
            filter_sell_apartments:this.props.is_for_sell,

            img_type:this.props.img_type,

            img_sorce:this.props.img_sorce,

            btn_names : {}
            
        }

    }

    componentDidMount(){


        this.getDatafromServer();
        this.getcitydatafromserver();
        console.log(this.state.choosin_city_apartments)

    }

     slice_arr=()=>{

            
    
        let choosin_appartment=[]
    
        let filterd_arr=this.state.choosin_city_apartments_copy
    
        for(var i=0;i<filterd_arr.length;i++){
    
            if(filterd_arr[i]["for_sale"]==true){
    
                choosin_appartment.push(filterd_arr[i])
    
            }
    
    }
    console.log(this.state.choosen_aprtment)
    return choosin_appartment;
}


    getDatafromServer = () => {

        fetch(` https://storage.googleapis.com/realtour/${this.props.gallarydata}-rt.json`, {
              method: 'GET',
        }
    
        ).then(response => response.json()
    
        ).then(success => {
    
            this.setState({
    
                choosin_city_apartments : success,

                choosin_city_apartments_copy:success
    
        })
    
        }
    
        ).catch(error => console.log(error))
    
    
        };

        getcitydatafromserver(){


            fetch(` https://storage.googleapis.com/realtour/cities-rt.json`, {
                method: 'GET',
          }
      
          ).then(response => response.json()
      
          ).then(success => {
      
              this.setState({
      
                 cities : success,
      
          })
      
          }
      
          ).catch(error => console.log(error))
      
      
          };


         

  
    search=()=>{
        let input=document.getElementById("search-input");
        let value=input.value;
        let choosen_aprtment=[]
        for(var i=0;i<this.state.choosin_city_apartments_copy.length;i++){
            if(value==this.state.cities[i]["label"]){
                choosen_aprtment.push(this.state.choosin_city_apartments_copy[i])
            }
            
        }
        if(choosen_aprtment.length==0){
            choosen_aprtment=this.state.choosin_city_apartments_copy
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


        openfilterlist=()=>{

            this.setState({openfilterlist:!this.state.openfilterlist})


        }

    

    render(){

        console.log(this.props)
        
        return(
             <div>

              {
                this.props.img_type=="apartments" 

                      &&
                  

                    <div id="form" className="d-flex m-4">

                        <div style={{display:"flex",margin:"0 10px",position:"relative"}}>

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


                    <div>

                     
                     <button className="d-lg-none"
                             style={filter_btn_style}
                             onClick={()=>this.openfilterlist()}>  
                             

                        filter


                     </button>

                    {
                        this.state.openfilterlist 

                            &&

                        <div style={{padding: "35px 0px",
                             display:"flex",
                             justifyContent:"flex-start",
                             position:"absolute",
                             zIndex:"999",
                             background:"white",
                             left:"0px",
                             top:"160px",                            
                             width:"107vw"}}>


                            <Price_btn sendvaluetostate={this.getbuttonvalu}/>

                            <PropertyMenue sendvaluetostate={this.getbuttonvalu}/>

                            <BedsMenue sendvaluetostate={this.getbuttonvalu}/>

                            <StatusMenu  sendvaluetostate={this.getbuttonvalu}/>

                                
                     </div>
                     }
                       

                    </div>

                <div className="d-none d-lg-flex">


                    <Price_btn sendvaluetostate={this.getbuttonvalu}/>

                    <PropertyMenue sendvaluetostate={this.getbuttonvalu}/>

                    <BedsMenue sendvaluetostate={this.getbuttonvalu}/>

                    <StatusMenu  sendvaluetostate={this.getbuttonvalu}/>

                </div>

                
            </div>
    }


            <Gallary items={window.location.pathname=="/Sell" ? this.slice_arr() :this.state.choosin_city_apartments}
                     img_type={this.state.img_type} 
                     img_sorce={this.state.img_sorce} 
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

let filter_btn_style={

    border:"1px solid gray",

    borderRadius:"3px",

    background:"white",

    margin:"0 5px"
    
}


export default Form;

import React from 'react';
import magglass from '../../icons/magglass.png'
import Price_btn from './price_btn/price_btn';
import PriceMenue from './price_btn/price_menue'
import PropertyBtn from './property/property_btn'
import PropertyMenu from './property/property_menue'
import BedsBtn from './beds/bedsBtn'
import BedsMenu  from './beds/beds_menu'
import StatusBtn from './status/status_Btn'
import StatusMenu from './status/status_menue'
import Gallary from '../gallary/gallary.jsx';

class Form extends React.Component{

    constructor(props){

        super(props)

        this.state={

            choosin_city_apartments : [],

            apartments:[],
            
            cities: [],

            openfilterlist : false,

            opendmenue: -1 ,

            img_type:this.props.img_type,

            img_sorce:this.props.img_sorce,

            btn_names : {},

            search: ''
            
        }

    }

    componentDidMount(){


        if(window.location.pathname=="/Sell"){

            this.getcitydatafromserver();
            this.getsellapartmentfromserver();

        }

        else{

        this.getDatafromServer();
        this.getcitydatafromserver();

    }
}

    make_list_active = (i)=> {
        this.setState({
            opendmenue: this.state.opendmenue === i ? -1 : i
        })
    }


    getsellapartmentfromserver=() => {

        fetch(` https://storage.googleapis.com/realtour/${this.props.gallarydata}-rt.json?`, {
              method: 'GET',
        }
    
        ).then(response => response.json()
    
        ).then(success => {
        
            for(var i=0;i<success.length;i++){
        
                if(success[i]["for_sale"]!=true){
        
                     success.shift();
        
                }
        
        }
    
            this.setState({
    
                choosin_city_apartments : success,

                apartments:success
    
        })
    
        }
    
        ).catch(error => console.log(error))
    
    
        };

    




    getDatafromServer = () => {

        fetch(` https://storage.googleapis.com/realtour/${this.props.gallarydata}-rt.json`, {
              method: 'GET',
        }
    
        ).then(response => response.json()
    
        ).then(success => {
    
            this.setState({
    
                choosin_city_apartments : success,

                apartments:success
    
        })
    
        }
    
        ).catch(error => console.log(error))
    
    
        };

        updateSearch = (e) => {
            this.setState({ search: e.target.value });
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
        let choosen_aprtment=[]
        for(var i=0;i<this.state.apartments.length;i++){
            if(this.state.search===this.state.cities[i]["label"]){
                choosen_aprtment.push(this.state.apartments[i])
            }
            
        }
        if(choosen_aprtment.length==0){
            choosen_aprtment=this.state.apartments
        }

        this.setState({
            choosin_city_apartments: [...choosen_aprtment]
          })

          console.log(this.state.choosin_city_apartments)

          this.setState({
            apartments: [...this.state.choosin_city_apartments]
          })

    }

    getbuttonvalu=(e)=>{

        console.log("getbuttonvalue")
        
        let target=e.target;

        let name=target.name

        let value=target.value

        this.state.btn_names[name]=value

        this.filter()

    }


    filter=()=>{

        console.log("filter")
        
        let choosin_appartment=[]

        let filterd_arr=this.state.apartments

        let bool=false

        
        for(var i=0;i<filterd_arr.length;i++){

            for(let key in this.state.btn_names){

                if(key=="status"){

                    if(!filterd_arr[i][this.state.btn_names[key]]){

                        bool=false;

                        break;
                    }

            }
        
               else if(filterd_arr[i][key]!=this.state.btn_names[key]){

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
            choosin_city_apartments: choosin_appartment
        })

         
        }


        openfilterlist=()=>{

            this.setState({openfilterlist:!this.state.openfilterlist})


        }

    

    render(){
 

        console.log("chosen aprtment arr", this.state.choosin_city_apartments, 'search', this.state.search);

        return(
             <div>

              {
                this.props.img_type=="apartments" 

                      &&
                  

                    <div id="form" className="d-flex my-4 container justify-content-center">

                        <div style={{display:"flex",margin:"0 10px",position:"relative"}}>

                            <div>

                                <input id="search-input"
                                      style={{...input_style,width:"201px",height:"36px"}} 
                                      type="text"
                                      onChange={ this.updateSearch }/>

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

                        <div className="filter_list" 
                             style={{padding: "35px 0px",
                                     display:"flex",
                                     justifyContent:"space-evenly",
                                     position:"absolute",
                                     zIndex:"999",
                                     background:"white",
                                     left:"0px",
                                     top:"220px",                            
                                     width:"107vw"}}>
                    
                            <div>
                                <Price_btn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==1 && <PriceMenue sendvaluetostate={this.getbuttonvalu}/>}
                            </div>
                            
                            <div>
                                <PropertyBtn make_list_active={this.make_list_active}/>
                                {this.opendmenue==2 && <PropertyMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div>

                            <div>
                                <BedsBtn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==3 && <BedsMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div> 

                            <div>   
                                <StatusBtn make_list_active={this.make_list_active}/>
                                {this.state.opendmenue==4 && <StatusMenu sendvaluetostate={this.getbuttonvalu}/>}
                            </div>


                     </div>
                     }
                       

                    </div>

                <div className="d-none d-lg-flex">


                     <div style={{position:"relative"}}>

                                <Price_btn make_list_active={this.make_list_active}/>

                                
                                {
                                    this.state.opendmenue==1 
                                
                                         &&

                                    <PriceMenue sendvaluetostate={this.getbuttonvalu}/>    

                                }    

                               

                    </div>

                    <div style={{position:"relative"}}>

                        <PropertyBtn make_list_active={this.make_list_active}/>

                        {
                            this.state.opendmenue==2

                                 &&

                             <PropertyMenu sendvaluetostate={this.getbuttonvalu}/>

                        }

                    </div>
                    <div style={{position:"relative"}}>

                        <BedsBtn make_list_active={this.make_list_active}/>

                        {this.state.opendmenue==3 && <BedsMenu sendvaluetostate={this.getbuttonvalu}/>}

                    </div>

                    <div style={{position:"relative"}}>


                        <StatusBtn make_list_active={this.make_list_active}/>

                        {this.state.opendmenue==4 && <StatusMenu sendvaluetostate={this.getbuttonvalu}/>}

                    </div>

                </div>

                
            </div>
    }


            <Gallary items={this.state.choosin_city_apartments}
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

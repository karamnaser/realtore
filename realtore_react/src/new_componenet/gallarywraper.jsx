import React from 'react';
import Form from './form/form.jsx'
import {apartments} from './galary_data/apartments_data.jsx';
import {cities} from './galary_data/citie_data.jsx';
import Gallary from './gallary/gallary.jsx';
class GallaryWraper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            choosin_inpute:apartments
        }
    }
     search=(event)=>{
        event.preventDefault()
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
            choosin_inpute: [...choosen_aprtment]
          })
        console.log(this.state.choosin_inpute)
    }

    getbuttonvalu=(e,property)=>{

        console.log("im in getbuttonvalue")

        let target=e.target;

        let value=target.value

        console.log(value)

        this.setState({
            [property]:value 
          })
    }
    
    render(){
        return(
            <div>
            <Form onclick={this.search} getbtnvalue={this.getbuttonvalu}/>
            <Gallary items={this.state.choosin_inpute} title={"title"}  
            gotfooter={true}/>

            </div>
        )

    }
}
export default GallaryWraper
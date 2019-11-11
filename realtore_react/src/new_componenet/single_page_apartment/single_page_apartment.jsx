import React from 'react'
import {apartments} from '../galary_data/apartments_data'
import GallarymenDetails from '../gallary/gallarydetails';
import GallaryImg from '../gallary/gallary_img';
import Heart from '../gallary/heart'
import './apartment.css'
import rightarrowicon from '../../icons/right-arrow.png'
import leftarrowicon from '../../icons/left-arrow.png'

function SinglePageApartment(props){

    let pathway=window.location.pathname

    pathway=pathway.slice(pathway.length-1)

    let id=parseInt(pathway)

    let previous_img=0;
    return (
        
        <div  className="apartment  position-relative">


              <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">

                    <GallarymenDetails header={apartments[id]["title"]}/>

                    <GallaryImg src={require("../"+apartments[id]["main_image"])}/>

                        
                   <GallarymenDetails header={getapartmentDiscreption(apartments[id])}/>


                   <Heart onMouseOver={display_heart_on_hover.bind(this)}
                          onMouseLeave={disaple_heart_on_leave.bind(this)}/>


                    <p className="apartment-price">{apartments[id]["price"] &&"$"+apartments[id]["price"]}</p>


                    {apartments[id]["images"].map((iteam,i)=>{

                        return(

                                 <div className="img-wraper position-absolute">
                                

                                        <img src={require("../"+iteam)}/>

            
                                </div>

                             )

                            })}


                </div>

                <button onClick={()=>{
                                    
                                    let target=document.getElementsByClassName("img-wraper")
                                    let index=Math.floor((Math.random()*(target.length-1)))

                                     if(target[index]==""){
                                        if(index>0){
                                        index-=1
                                        }
                                        else{
                                            index+=1                                        }
                                     }

                                     if(target[index].style.width!="100%"){
                                        target[index].style.width="100%"
                                      }
                                      
                                      else{

                                        target[index].style.width="0px"

                                      }

                                        console.log("im clicked")

                                        previous_img=index
                                    }}  
                                    className="right-arrow"><img src={rightarrowicon}/></button>
                    

                <button onClick={()=>{
                                    
                                    let target=document.getElementsByClassName("img-wraper")
                                    let index=Math.floor((Math.random()*(target.length-1)))

                                    if(previous_img==index){
                                        index=Math.floor((Math.random()*(target.length-1)))
                                     }

                                      if(target[index].style.width!="100%" && previous_img!=index){
                                        target[index].style.width="100%"
                                      }
                                      
                                      else{

                                        target[index].style.width="0px"

                                      }

                                      previous_img=index

                                        console.log("im clicked")
                                    }}   className="left-arrow"><img src={leftarrowicon}/></button>
                        
         </div>

    )

}
function display_heart_on_hover(event) {

    let target_elemnt=event.target;

        target_elemnt.style.opacity="1";
        
}

function disaple_heart_on_leave(event) {

    let target_elemnt=event.target;

        target_elemnt.style.opacity="0";

}
function getapartmentDiscreption(aprtment){

    var apartment_discription;

    var apartments_bed=aprtment["number_of_beds"]+" beds ";

    var apartments_rooms=aprtment["number_of_rooms"]+" room ";

    var apartments_size=aprtment["sqft"]+" sqft"+"\n";

    var apartments_addres=aprtment["address"];

    if(apartments_addres!=undefined){

        apartment_discription=apartments_bed+apartments_rooms+apartments_size+apartments_addres;

    }

    else{

        apartment_discription=apartments_bed+apartments_rooms+apartments_size;

    }

    return apartment_discription;
    
}

export default SinglePageApartment;
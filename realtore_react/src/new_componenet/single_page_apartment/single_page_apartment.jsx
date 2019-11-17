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

    let index=0

    let target=document.getElementsByClassName("apartments-imges")
    return (
        
        <div  className="apartment  position-relative">


              <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">

                    <GallarymenDetails header={apartments[id-1]["title"]}/>

                    <GallaryImg src={require("../"+apartments[id-1]["main_image"])}/>

                        
                   <GallarymenDetails header={getapartmentDiscreption(apartments[id])}/>


                   <Heart onMouseOver={display_heart_on_hover.bind(this)}
                          onMouseLeave={disaple_heart_on_leave.bind(this)}/>


                    <p className="apartment-price">{apartments[id-1]["price"] &&"$"+apartments[id-1]["price"]}</p>


                    {apartments[id]["images"].map((iteam,i)=>{

                        return(

                                 <div className="img-wraper position-absolute">
                                

                                        <img className="apartments-imges" src={require("../"+iteam)}/>

            
                                </div>

                             )

                            })}


                </div>

                <button  className="right-arrow" 
                          onClick={()=>{

                            if(index>target.length-1){

                              index=0

                              let counter=0

                              while(counter<=target.length-1){

                                  target[counter].style.left="1000px"
                                  counter++

                              }

                              return

                            }
                            
                              target[index].style.left="1px"
                              

                            index++
                          }
                        }> 
                      
         
                        <img src={rightarrowicon}/>
                                     
                                     
                </button>
                    

                <button className="left-arrow" 
                        onClick={()=>{
                                    
                          if(index>target.length-1){

                            index=0

                            let counter=0

                            while(counter<=target.length-1){

                                target[counter].style.left="1000px"
                                counter++

                            }

                            return
                          }
                        
                          target[index].style.left="1px";

                          index++
                        }
                      }>  


                        <img src={leftarrowicon}/>


                </button>
                        
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

    var apartment_discription="";

    if(aprtment["number_of_beds"]){

        var apartments_bed=aprtment["number_of_beds"]+" beds ";
        apartment_discription+=apartments_bed;

    }


    if(aprtment["number_of_rooms"]){

        var apartments_rooms=aprtment["number_of_rooms"]+" room ";
        apartment_discription+=apartments_rooms;

    }

    if(aprtment["sqft"]){

        var apartments_size=aprtment["sqft"]+" sqft"+"\n";
        apartment_discription+=apartments_size;

    }

    if(aprtment["address"]){

        var apartments_addres=aprtment["address"];
        apartment_discription+= apartments_addres

    }

    return apartment_discription;
    
}

export default SinglePageApartment;
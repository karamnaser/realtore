import React from 'react'

function SinglePageApartment(){

    return (

        <div  className="div col-4 position-relative">

              <div style={{boxShadow:"0px 0px 0px 1px"}} className="shadow-div">

                    <GallarymenDetails header={item[this.props.title]}/>

                    <GallaryImg src={require("../"+item[this.props.main_image])}/>

                    {
                         gallery_got_footer

                             &&

                   <GallarymenDetails header={getapartmentDiscreption(item)}/>


                    }
                   <Heart onMouseOver={display_heart_on_hover.bind(this)}
                          onMouseLeave={disaple_heart_on_leave.bind(this)}/>


                    <p className="apartment-price">{item["price"] &&"$"+item["price"]}</p> 

                </div>
                        
         </div>

    )

}

export default SinglePageApartment;
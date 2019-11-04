import React from 'react';
import GallarymenDetails from './gallarydetails.jsx';
import GallaryImg from './gallary_img.jsx';
import '../img.css';
import '../paragraphs.css';
import Heart from './heart'
class Gallary extends React.Component{
    
    render(){
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
       
        let gallery_got_footer=this.props.gotfooter;
        let iteam_div = this.props.items.map((item) => {
            return <div key={item["id"]} className="-div col-4 position-relative">
                        <div className="shadow-div">
                            <GallarymenDetails header={item[this.props.title]}/>
                            <GallaryImg src={require("../"+item[this.props.img_index_name])}/>
                            {gallery_got_footer && <GallarymenDetails header={getapartmentDiscreption(item)}/>}
                             <Heart onMouseOver={display_heart_on_hover.bind(this)}
                             onMouseLeave={disaple_heart_on_leave.bind(this)}/>
                             <p className="apartment-price">{item["price"] &&"$"+item["price"]}</p> 
                        </div>
                    </div>
        });

        return <div className="row">{iteam_div}</div>;
    }
    
}

export default Gallary;
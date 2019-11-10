
import React from 'react';
import logo from './logo.svg';
import Form from './new_componenet/form/form'
import './App.css';
import HeaderNave from './new_componenet/header copy/header-navigation';
import {apartments} from './new_componenet/galary_data/apartments_data'
import {cities} from './new_componenet/galary_data/citie_data'
import  { BrowserRouter as Router
  ,Switch
  ,Route
} from "react-router-dom";
 
function App() {

  let slice_arr=()=>{

            
    
    let choosin_appartment=[]

    let filterd_arr=apartments

    for(var i=0;i<filterd_arr.length;i++){

        if(filterd_arr[i]["for_sale"]==true){

            choosin_appartment.push(filterd_arr[i])

        }

}


    return choosin_appartment
    
}        
  
  return (
    <Router>
    <div className="App">
    <HeaderNave/>
    <Switch>
      
          <Route path="/sell" component={()=><Form iteam={slice_arr()}
                     main_image={"main_image"}
                     title={"title"}
                     bool={true}
                     />}>
            
          </Route>

        <Route path="/apartments" component={()=><Form iteam={apartments}
                  main_image={"main_image"}
                  title={"title"}
                  bool={true}
                  />}>
  
        </Route>

         <Route path="/city" component={()=><Form iteam={cities}
                  main_image={"image"}
                  title={"label"}
                  bool={false}
                  />}>

        </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
{/* <Gallary items={apartments} title={"title"} img_index_name={"main_image"} gotfooter={true}/>
      <Gallary items={cities} title={"label"} img_index_name={"image"}/> */}
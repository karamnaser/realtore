
import React from 'react';
import logo from './logo.svg';
import Form from './new_componenet/form/form'
import './App.css';
import HomePage  from './new_componenet/homePage/homepage'
import HeaderNave from './new_componenet/header copy/header-navigation';
import {apartments} from './new_componenet/galary_data/apartments_data'
import {cities} from './new_componenet/galary_data/citie_data'
import  { BrowserRouter as Router
  ,Switch
  ,Route
} from "react-router-dom";
import SinglePageApartment from './new_componenet/single_page_apartment/single_page_apartment'
 
function App() {

  
  return (
    <Router>
    <div className="App">
    <HeaderNave/>
    <Switch>

          <Route path="/home" component={HomePage}/>



          <Route path={"/apartment/:id"} component={SinglePageApartment}/>
            
    
      
          <Route path="/sell" component={()=><Form img_type="apartments" img_sorce="main_image" title={"title"} bool={true} gallarydata={"apartments"}/>}>
            
          </Route>
          

        <Route path="/apartments" component={()=><Form
                  img_type="apartments"
                  img_sorce="main_image"
                  main_image={"main_image"}
                  title={"title"}
                  bool={true}
                  gallarydata={"apartments"}
                  />}>
  
        </Route>

         <Route path="/city" component={()=><Form
                  img_type="cities"
                  img_sorce="image"
                  title={"label"}
                  bool={false}
                  gallarydata={"cities"}/>}>

        </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
{/* <Gallary items={apartments} title={"title"} img_index_name={"main_image"} gotfooter={true}/>
      <Gallary items={cities} title={"label"} img_index_name={"image"}/> */}
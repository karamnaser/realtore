import React from 'react';
import logo from './logo.svg';
import './App.css';
import {apartments} from './new_componenet/galary_data/apartments_data.jsx';
import {cities} from './new_componenet/galary_data/citie_data.jsx';
import Gallary from './new_componenet/gallary/gallary.jsx';
import HeaderNave from './new_componenet/header copy/header-navigation';
function App() {
  return (
    <div className="App">
      <HeaderNave/>
      <Gallary items={apartments} title={"title"} img_index_name={"main_image"} gotfooter={true}/>
      <Gallary items={cities} title={"label"} img_index_name={"image"}/>
    </div>
  );
}

export default App;

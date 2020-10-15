import React from 'react';
import './App.css';
import ProfilPhoto from './component/Profile/ProfilPhtoto';
import FullName from './component/Profile/FullName';
import Adresse from './component/Profile/Adresse';

function App() {
  return (
   
   <div className="back">
   <ProfilPhoto/>
   <div className='info-position'>
   <FullName/>
   <Adresse/>
   </div>
   </div>
  
  );
}

export default App;

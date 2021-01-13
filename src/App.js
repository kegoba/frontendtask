import React from 'react';
import './App.css';
import './animate.css';
import "react-notifications/lib/notifications.css";
import {NotificationContainer} from 'react-notifications';
import Footer from "./components/statics/footer"
import Menu from "./components/statics/menu"


function App() {

  //document.body.style="background-color:black"
  return (
    <div className="App" >
      <NotificationContainer/>
      
     <div className="">
       <Menu/>
     </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
     
    
  );
}

export default App;

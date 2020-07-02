import React from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import './App.css';




function App(){
    return(
        <div>
            <Header/>

           <input type="checkbox"/>
           <p>Placeholder text</p>

           <input type="checkbox"/>
           <p>Placeholder text</p>
           
           <input type="checkbox"/>
           <p>Placeholder text</p>

           <input type="checkbox"/>
           <p>Placeholder text</p>

           <Footer/>
        </div>
       
    )
}

export default App;
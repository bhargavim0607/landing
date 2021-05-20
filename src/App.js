import React from 'react';
import Testinomial from './components/test.jsx';
import Header from './components/header';
import Service from './components/service';
import Pricing from './components/pricing';
import Subscribe from './components/subscribe';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import './components/assets/css/default.css';
import './components/assets/css/LineIcons.css';
import './components/assets/css/style.css';
import './components/assets/css/style.css.map';
import './App.css'
import './components/assets/js/vendor/jquery-1.12.4.min';
import './components/assets/js/vendor/modernizr-3.6.0.min';
import './components/assets/js/main';



function App(){
   return( <div>
       <Header/>
       <Service/>
       <Pricing/>
       <Subscribe/>
       <Testinomial/>
       <Contact/>
       <Footer/>
    
</div>);
}

export default App;
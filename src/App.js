import React from 'react';
import Testinomial from './components/test.jsx';
import Header from './components/header';
import Service from './components/service';
import Pricing from './components/pricing';
import Subscribe from './components/subscribe';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Companies from './components/companies.jsx';
import './components/assets/css/style.css';
import './components/assets/css/bootstrap.min.css'
import './components/assets/css/default.css'
import './components/assets/css/LineIcons.css'
import './components/assets/css/magnific-popup.css'
import './components/assets/css/style.css'
import './components/assets/css/style.css.map'
import './components/assets/js/main';
import './App.css';



function App(){
   return( <div>
       <Header/>
       <Service/>
       <Pricing/>
       <Subscribe/>
       <Testinomial/>
       <Companies/>
       <Contact/>
       <Footer/>
    
</div>);
}

export default App;

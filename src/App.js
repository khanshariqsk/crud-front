
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import Peoples from './Main/Peoples/Peoples'
import './App.css'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="main-app">
       <Navigation/>
       <main>
         <Switch>
           <Route component={Peoples} path="/" exact/>
           {/* <Route component={Login} path="/" exact/>
           <Route component={Signup} path="/" exact/> */}
         </Switch>
       </main>
       <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

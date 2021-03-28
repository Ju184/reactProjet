import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './composannts/ListEmployeeComponent';
import HeaderComponent from './composannts/HeaderComponent';
import FooterComponent from './composannts/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployeeComponent from './composannts/CreateEmployeeComponent';
import UpdateEmployeeComponent from './composannts/UpdateEmployeeComponent';
import viewComponent from './composannts/viewComponent';
function App() {
  return (
    <div>
     <Router>
       <div className="container">
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route path='/' exact component={ListEmployeeComponent}></Route>
          <Route path='/employees' component={ListEmployeeComponent}></Route>
          <Route path='/add-employee' component={CreateEmployeeComponent}></Route>
          <Route path='/update-employee/:id' component={UpdateEmployeeComponent}></Route>
          <Route path='/view-employee/:id' component={viewComponent}></Route>
        
        </Switch>
          
      </div>
      <FooterComponent/>
      </div>
      </Router>
    </div>
    
   
  );
}

export default App;

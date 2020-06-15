import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu  from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import Dishdetail from './components/DishdetailComponent'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: DISHES
    };
  }
  render(){
    return (
      <div>
        <Navbar dark color= "primary">
          <div>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
         <Menu dishes={this.state.dishes}/>
         {/* <Dishdetail ></Dishdetail> */}
         
      </div>
    );

  }
  
}

export default App;

import React from 'react';
import './App.css';
import { Shoe } from './components/Shop/shoe';
import { Navbar, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Login from './components/login';
import { Home } from './components/home'; 
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { Checkout } from './components/checkout';
import { Cart } from "./components/Cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; //routes

class App extends React.Component {
  render() { //dispay other componets 
  return (
    <ShopContextProvider>
    <Router>
    <div className="App">
      <header >
        <Navbar bg="danger" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">SHOE DOCTOR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shoe">Book Appointment</Nav.Link>
                <Nav.Link>
                <Link to="/cart"  variant="dark">
                <ShoppingCart size={32} />
                </Link>
                </Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          

        </Navbar>
        <Routes>
          {/* navigate components*/}
          <Route path='/' element={<Home />}></Route>  
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/shoe' element={<Shoe/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
  
      </header>
    </div>
    </Router>
    </ShopContextProvider>
  );
}
}

export default App;
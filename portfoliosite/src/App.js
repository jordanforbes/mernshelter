import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//my created components
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Jordan Forbes",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Imagine',
        subTitle: 'Projects to inspire',
        extraText: 'Check out my projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'React Out'
      }
    }
  }

  render(){
    return(
      <Router>
        <Container className="p-0" fluid = {true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jordan Forbes</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} extraText={this.state.home.extraText}/>} />
          <Route path="/about" render= {() => <AboutPage title={this.state.about.title} /> } />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/> } />

          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;

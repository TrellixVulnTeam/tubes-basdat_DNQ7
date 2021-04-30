import React from 'react'
import {Link, Switch} from 'react-router-dom';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import './Borrow.css';
import '../BorrowCard/BorrowForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteWithSubRoutes from '../../../utils/RouteWithSubRoutes'
import BorrowImage from '/home/dhifaf/Documents/tubes-basdat/frontend/pro-libra/src/assets/Images/borrow-assets.svg';
const Borrow = ({routes})=> {
  return (

    <Container>
    <Row className="borrow-body"> 
    <Col md={3} xs={12} className="leftbar-column" >
      <div className="left-bar-menus">
          <ul>
            <div className="left-bar-menu">
            <li>
              <Link to="/borrow/borrow-form">
                <h2>
                Borrow
                </h2>
              </Link>
            </li>
            </div>
            <div className="left-bar-menu">
            <li >
              <Link to="/borrow/return-form">
                <h2>Return</h2>
              </Link>
            </li>
            </div>
          </ul>
        </div>  
      </Col>
      <Col md={9} xs={12} className="borrow-form-column">
      
      <Switch>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
    ))}
    <div className="temporary-display">
      <h1>Welcome use this page to borrow or return your book</h1>
        <img className="borrow-img"src={BorrowImage} alt="img"/>
      </div>
    </Switch>  
      </Col>
    </Row>
  </Container>
  
  )
}

export default Borrow;

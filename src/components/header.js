import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light">
    <div className="container">  
      

      <form className="form-inline">
      <a className="nav-link btn btn-light p-1 mr-2 shadow-sm" href="https://olifepro.ru">OLIFE<em>pro</em></a>
      <Link className="nav-link btn btn-light p-1 mr-2 shadow-sm" to="/">зарплата</Link> 
      <Link className="nav-link btn btn-light p-1 shadow-sm" to="/60-days/">60 дней</Link>
      </form>


           
  </div>
  </nav>
  );
}

export default Header;

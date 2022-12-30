import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Utils/auth';
import Nav from './Nav'

function Header (props) {
  const { currentTab, setCurrentTab } = props;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <section id="nottheheader">
      <div id="bar">
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
        
          <Link className="text-light" style={{ textDecoration: "none" }} to="/">
            <h1 className="m-0"> D&D Slayers</h1>
          </Link>
          <p style={{ color: "red" }}>We're Gonna Need a Bigger Bad Guy</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <div>
            
            </div>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/Signup">
                Signup
              </Link>
            </>
          )}
      </div>
      </div>
    </section>
  );
};


export default Header;
import React from 'react';
import {link} from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import auth from '../../Utils/auth';

//header
const header = ({value, handleInputChange, handleFormSubmit }) => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };
    return (
        <header id="header">
            <div id="navbar">
            <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
          <Link className="text-light" style={{ textDecoration: "none" }} to="/">
            <h1 className="m-0" style={{ color: "#264c5e" }}><FontAwesomeIcon icon={faDragon} /> DnD Slayers</h1>
          </Link>
          </div>

          <div id="button"><Link className="btn btn-lg btn-info m-2" to="/"> Home </Link>
              <Link className="btn btn-lg btn-info m-2" to="/profile">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/createCharacters">Create Characters</Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              </div>
              </div>
        </header>
    );
};
export default header;
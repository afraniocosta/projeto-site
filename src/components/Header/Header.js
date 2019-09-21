import React from 'react';
import Nav from '../Nav';

function Header() {

  return(
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <h1>AFRÂNIO COSTA</h1>
          </div>
          <div className="col-12 col-lg-9">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )

}    

export default Header;      
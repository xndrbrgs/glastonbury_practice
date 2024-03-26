import React from "react";

function Menu() {
  return (
    <nav className="container ">
    <div id='nav-wrapper'>
        <div id='nav-top' className='pt-[4.2rem]' >
            <div className="row justify-between">
                <div className="col-1">LOGO</div>
                <div className="col-1">MENU</div>
            </div>
        </div>
        <div id='nav-middle'></div>
        <div id='nav-bottom'></div>
    </div>
    </nav>
  );
}

export default Menu;

import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./Toolbar.css";

class Toolbar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        width='30%'
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Link to='/' className='menu-item'>
          Home{" "}
        </Link>

        <Link to='/about' className='menu-item'>
          About{" "}
        </Link>

        <Link to='/resume' className='menu-item'>
          Resume{" "}
        </Link>

        <Link to='/portfolio' className='menu-item'>
          Portfolio
        </Link>

        <Link to='/contact' className='menu-item'>
          Contact{" "}
        </Link>
      </Menu>
    );
  }
}

export default Toolbar;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id='header' className='fixed-top'>
      <div
        className='container-fluid d-flex justify-content-between align-items-center'
        style={{ height: "50px" }}
      >
        <h1 className='logo' style={{ fontSize: "20px", marginLeft: "40px" }}>
          <Link to='/'>Muthouazhagi Dhanapal</Link>
        </h1>

        <nav className='nav-menu d-none d-lg-block'>
          <ul>
            <li>
              <Link to='/'>Home </Link>
            </li>
            <li>
              <Link to='/about'>About </Link>
            </li>
            <li>
              <Link to='/resume'>Resume </Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/contact'>Contact </Link>
            </li>
          </ul>
        </nav>

        <div className='header-social-links'>
          <a
            href='https://www.linkedin.com/in/muthouazhagi-dhanapal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              class='fa fa-linkedin-square fa-2x'
              style={{ color: "#0099CC" }}
            ></i>
          </a>

          <a
            href='https://github.com/mdhanapal1812'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-github-square fa-2x'></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

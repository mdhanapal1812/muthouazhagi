import React from "react";
/* import Modal from "./Modal";
 import history from "./History"; */
import { Link } from "react-router-dom";

class Apartment extends React.Component {
  /*  renderAction() {
    return (
    
      <React.Fragment>
        <Link to='/portfolio' className='ui button'>
          close
        </Link>
      </React.Fragment>
    );
  } */
  renderContent() {
    return (
      <main id='main'>
        <section id='portfolio-details' className='portfolio-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div
                  className='slideshow'
                  data-aos='fade-up'
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    zIndex: 1,
                    ease: "0s",
                    width: "500px",
                    marginLeft: "300px",
                  }}
                >
                  <img
                    src='./../assets/img/aparment.jpg'
                    className='img-fluid'
                    alt=''
                    marginLeft='400px'
                  ></img>
                </div>
              </div>

              <div
                className='ui segment'
                style={{
                  display: "block",
                  marginLeft: "1px",
                  fontFamily: "Poppins",
                }}
              >
                <h3>Project information</h3>
                <ul>
                  <li>
                    Programming Language: JavaServer Pages, XML , HTML , CSS
                    ,MySQL
                  </li>
                </ul>

                <p>
                  Developed a web-based apartment management application which
                  handles the major tasks of managing an apartment such as lease
                  tracking , transactions , maintenance for both owners and
                  tenants
                </p>
                <p>
                  The application was created using JavaServer Pages, XML , HTML
                  , CSS ,MySQL and Apache Tomcat server.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  render() {
    return (
      /* <Modal
        title={
          <h3 className='ui block header'>Aparment Management Software </h3>
        }
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/portfolio")}
        centered={true}
      ></Modal> */
      <main id='main'>
        <div
          className='container'
          data-aos='fade-right'
          style={{ height: "100%" }}
        >
          <div
            style={{
              border: "5px solid black",
              backgroundColor: "#D3D3D3",
              backgroundSize: "100%",
              position: "absolute",
              top: "500",
              marginTop: "70px",
            }}
          >
            <h3
              className='ui block header'
              style={{ backgroundColor: "#38c9b4" }}
            >
              Aparment Management Software
              <Link
                to='/portfolio'
                className='ui button'
                style={{
                  float: "right",
                  marginTop: "-5px ",
                  top: "50%",
                  left: "50%",
                  Backgroundcolor: "red",
                }}
              >
                <i class='close icon'></i>
              </Link>
            </h3>
            {this.renderContent()}
          </div>
        </div>
      </main>
    );
  }
}

export default Apartment;

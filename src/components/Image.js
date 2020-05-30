import React from "react";
/* import Modal from "./Modal";
import history from "./History"; */
import { Link } from "react-router-dom";

class Image extends React.Component {
  renderAction() {
    return (
      /* React.Fragment will allow us use multiple elements to wrap jsx without a div. */
      <React.Fragment>
        <Link to='/portfolio' className='ui button'>
          <i class='close icon'></i>
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    return (
      <React.Fragment>
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
                  <iframe
                    width='100%'
                    height='400'
                    title='image'
                    src='https://www.youtube.com/embed/d-R5Jf8ZwpM'
                    frameborder='100'
                    paddingTop='20px'
                    paddingRight='200px'
                    marginLeft='400px'
                    display='block'
                    align='center'
                    top='0'
                    left='50%'
                    right='50%'
                    padding='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div
                className='ui segment'
                style={{
                  display: "block",
                  marginLeft: "75px",
                  fontFamily: "Poppins",
                }}
              >
                <h4>Project information</h4>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: JAVA , JAVA Swing
                  </li>
                  <li>
                    <strong> Pattern Followed </strong>: MVC Pattern
                  </li>
                  <li>
                    <strong>IDE Used</strong>: IntelliJ
                  </li>
                </ul>

                <p>
                  Implemented a user-friendly image processing application that
                  allows the users to edit , filter images and generate various
                  image patterns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  render() {
    return (
      /* <Modal
        title={
          <h3 className='ui block header'>Image Processing Application</h3>
        }
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/portfolio")}
        centered={true}
      ></Modal> */

      <main id='main'>
        <div className='container' data-aos='fade-right'>
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
              Image Processing Application
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

export default Image;

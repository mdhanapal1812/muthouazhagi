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
        <section
          id='portfolio-details'
          className='portfolio-details'
          style={{
            height: "100%",
          }}
        >
          <div
            className='container'
            style={{
              height: "100%",
            }}
          >
            <div className='row'>
              <div
                className='videocontainer'
                style={{
                  height: "100%",
                }}
              >
                <div className='videoWrapper'>
                  <iframe
                    width='560'
                    height='315'
                    title='video'
                    src='https://www.youtube.com/embed/d-R5Jf8ZwpM'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div
                className='ui segment'
                style={{
                  display: "block",

                  fontFamily: "Poppins",
                  width: "100%",
                  maxWidth: "960px",
                  position: "relative",
                  margin: "20 auto",
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
        <div
          className='container'
          data-aos='fade-right'
          style={{
            width: "90%",
            maxWidth: "960px",
            position: "relative",
            margin: "110 auto",
            height: "100%",
          }}
        >
          <div
            style={{
              border: "5px solid black",
              backgroundColor: "#D3D3D3",
              backgroundSize: "100%",

              top: "500",
              marginTop: "100px",
              width: "90%",
              maxWidth: "960px",
              position: "relative",
              margin: "110 auto",
            }}
          >
            <h3
              className='ui block header'
              style={{ backgroundColor: "#38c9b4", fontSize: "20px" }}
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

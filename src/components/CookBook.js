import React from "react";
/* import Modal from "./Modal";
import history from "./History"; */
import { Link } from "react-router-dom";

class CookBook extends React.Component {
  renderContent() {
    return (
      <main id='main'>
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
                    width='100%'
                    height='400'
                    title='image'
                    src='https://www.youtube.com/embed/T4uAakD1mvU'
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

                  fontFamily: "Poppins",
                  width: "100%",
                  maxWidth: "960px",
                  position: "relative",
                  margin: "20 auto",
                }}
              >
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: React.js , Node.js ,
                    MongoDB , Mongoose
                  </li>

                  <li>
                    <strong>IDE Used</strong>: IntelliJ
                  </li>
                </ul>

                <p>
                  Developed an interactive cookbook recipe website , which
                  allows users to post various cooking recipes , comment on
                  other user posts and follow their favorite users.
                </p>
                <p>
                  Implemented the website using React.js for front-end and
                  Node.js , MongoDB for back-end.
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
      /*  <Modal
        title={<h3 className='ui block header'>Interactive CookBook </h3>}
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
              Interactive CookBook Website
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

export default CookBook;

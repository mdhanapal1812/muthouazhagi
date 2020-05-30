import React from "react";
/* import Modal from "./Modal";
import history from "./History"; */
import { Link } from "react-router-dom";

class CookBook extends React.Component {
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
                  marginLeft: "1px",
                  fontFamily: "Poppins",
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

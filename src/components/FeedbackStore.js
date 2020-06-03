import React from "react";
/* import Modal from "./Modal";
import history from "./History"; */
import { Link } from "react-router-dom";

class FeedbackStore extends React.Component {
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
                    src='https://www.youtube.com/embed/GiB9O48-nZw'
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
                  marginLeft: "30px",
                  fontFamily: "Poppins",
                }}
              >
                <h4>Project information</h4>

                <ul>
                  <li>
                    <strong>Front-End</strong>: React , React-Redux , HTML ,
                    CSS.
                  </li>
                  <li>
                    <strong> Back-End </strong>: MongoDB, Mongoose.
                  </li>
                  <li>
                    <strong>Notable services used</strong>: Google OAuth ,
                    Stripe , SendGrid
                  </li>
                </ul>

                <p>
                  This application allows user to create a number of surveys for
                  different products and collect feedback from his/her customers
                  through email. This is a credit based application as the
                  number of surveys that the user can create depends on the
                  number of credits that the user has earned. For earning
                  credits , the user need to pay a certain amount (5$ for 5
                  credits in this application). For Authentication , I have used
                  Google OAuth. For payments I have used Stripe service and for
                  mailing I have used SendGrid. The surveys were created using
                  Redux Form and has its own validation checks.
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
              Customer Feedback Store
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

export default FeedbackStore;

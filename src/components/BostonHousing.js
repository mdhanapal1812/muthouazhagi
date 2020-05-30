import React from "react";

import { Link } from "react-router-dom";
/* import history from "./History";
import Modal from "./Modal"; */

class BostonHousing extends React.Component {
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
                    src='assets/img/project2.JPG'
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
                    <strong>Programming Language</strong>: Python
                  </li>

                  <li>
                    <strong>IDE Used</strong>: Spyder
                  </li>
                </ul>

                <p>
                  Developed a Machine Learning model using Python and
                  Scikit-learn to predict the prices of Boston houses and to
                  determine whether an area is safe to reside or not.
                </p>
                <p>
                  Estimated the prices of houses using the linear regression
                  algorithm and determined the area safety using Decision tree,
                  Naïve Bayes, Random forest and Logistic regression algorithms.
                  Visualized the accuracy results of the algorithms in the form
                  of bar graph.
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
      /*      <Modal
        title={
          <h3 className='ui block header'>
            Boston Housing Price Prediction and Safety Classification{" "}
          </h3>
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
              Boston Housing Price Prediction and Safety Classification
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

export default BostonHousing;

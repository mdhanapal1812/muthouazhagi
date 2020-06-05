import React from "react";

import { Link } from "react-router-dom";
/* import history from "./History";
import Modal from "./Modal"; */

class BostonHousing extends React.Component {
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
                className='imagecontainer'
                style={{
                  height: "100%",
                }}
              >
                <div className='imageWrapper'>
                  <img
                    src='assets/img/project2.JPG'
                    className='img-fluid'
                    alt=''
                    marginLeft='400px'
                    height='0'
                  ></img>
                </div>
              </div>

              <div
                className='ui segment'
                style={{
                  display: "block",
                  marginLeft: "1px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
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
              Boston Housing Price Prediction and Safety Classification
              <Link
                to='/portfolio'
                className='ui button'
                style={{
                  float: "right",
                  marginTop: "-4px ",
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

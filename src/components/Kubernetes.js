import React from "react";

import { Link } from "react-router-dom";

class Kubernetes extends React.Component {

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
                                        src='./../assets/img/kubernetes.jpg'
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
                                    fontSize: "15px",
                                }}
                            >
                                <h3>Project information</h3>
                                <ul>
                                    <li>
                                        Concepts : React, Kubernetes, TravisCI , CI/CD Pipeline, Google Cloud Platform , Redis , Postgres
                  </li>
                                </ul>

                                <p>
                                    Developed a simple Fibonacci calculator with multiple services in the backend to learn
                                    the concepts of Kubernetes. This calculator calculates the fibonacci value for a user input number.
                                    The numbers are stored in postgres. Previously calculated values are stored in Redis server.
                                    TravisCI is used for testing and deployment to Google cloud platform.The motive of this project was soley to learn Kubernetes and understand
                                    the CI/CD Pipeline.
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
                            Kubernetes Project - Fibonacci Calculator
              <Link
                                to='/portfolio'
                                className='ui button'
                                style={{
                                    float: "right",
                                    marginTop: "-2px ",
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

export default Kubernetes;

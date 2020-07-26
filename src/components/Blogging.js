import React from "react";
/* import Modal from "./Modal";
import history from "./History"; */
import { Link } from "react-router-dom";

class Blogging extends React.Component {
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
                                className='imagecontainer'
                                style={{
                                    height: "100%",
                                }}
                            >
                                <div className='imageWrapper'>
                                    <img
                                        src='./../assets/img/blogging.jpg'
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
                                        <strong>Front-End</strong>: React , CSS , AWS Amplify.
                  </li>
                                    <li>
                                        <strong> Back-End </strong>: AWS DynamoDB , Cognito, AWS AppSync , GraphQL
                  </li>

                                </ul>

                                <p>
                                    This application allows user to create real-time blogs.
                                    Users can view other's posts , comment on other's posts and also give like to other's posts.
                                    This application is still undergoing development to add more features like adding images ,
                                    provision to follow other users , search for interested topics.
                                    A react native app is also being built for this site.
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
                            style={{ backgroundColor: "#38c9b4", fontSize: "23px" }}
                        >
                            Customer Feedback Store
              <Link
                                to='/portfolio'
                                className='ui button'
                                style={{
                                    float: "right",
                                    marginTop: "-1px ",
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

export default Blogging;

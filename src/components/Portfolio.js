import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <div className='container' style={{ height: "100%" }}>
        <div className='section-title' style={{ height: "100%" }}>
          <h2 style={{ marginTop: "64px" }}>Portfolio</h2>
          <p>
            I love indulging in projects that makes use of top-notch
            technologies ! Here are some of the projects that I have worked on.
          </p>
          <p>
            <h3>
              Please follow the link on the image to find the demo / details of
              the project.
            </h3>
          </p>
        </div>

        <div
          className='row portfolio-container'
          data-aos='fade-down'
          data-aos-delay='200'
        >
          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src='./../assets/img/image_editor.jpg'
                className='img-fluid'
                alt=''
                style={{
                  objectFit: "cover",
                  width: "300%",
                  height: "800%",
                }}
              ></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    opacity: "0.6",
                    textAlign: "center",
                    fontSize: "medium",
                    marginLeft: "7px",
                    marginBottom: "13px",
                  }}
                >
                  Image Processing Application
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",
                    opacity: "0.9",
                    fontSize: "medium",
                    marginLeft: "7px",
                    marginBottom: "12px",
                  }}
                >
                  JAVA , JAVA SWING , AWT , MVC Pattern
                </p>
                <div className='portfolio-links'>
                  <Link to='/image'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        opacity: "0.6",
                        fontSize: "21px",

                        marginLeft: "7px",
                        marginBottom: "10px",
                      }}
                    >
                      Project Demo
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6 portfolio-item filter-web'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img
                src='assets/img/project2.JPG'
                className='img-fluid'
                alt=''
                objectFit='cover'
                width='200%'
                height='200%'
              ></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.6",
                  }}
                >
                  Boston Housing Prediction and Classification
                </h4>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "medium",
                    backgroundColor: "grey",
                    opacity: "0.9",
                  }}
                >
                  Python, Data analysis and visualisation
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/Artificial-Intelligence-Project-Report'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>
                  <Link to='/bostonhousing'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      Project Details
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6 portfolio-item filter-web"'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img src='assets/img/dbms.JPG' className='img-fluid' alt=''></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.7",
                  }}
                >
                  Interactive Cookbook Website
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",

                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.8",
                  }}
                >
                  React.js , Node.js , MongoDB , Mongoose
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/CookBookRecipe_CS5200_PROJECT/tree/master/DBMS-final-project-CS5200-master'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>
                  <Link to='/cookbook'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        opacity: "0.6",
                        fontSize: "19px",
                      }}
                    >
                      Project Demo
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src='./../assets/img/feedback.JPG'
                className='img-fluid'
                alt=''
                style={{
                  objectFit: "contain",
                  width: "500%",
                  height: "1000%",
                }}
              ></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    opacity: "0.6",
                    textAlign: "center",
                    fontSize: "medium",
                    marginLeft: "7px",
                    marginBottom: "13px",
                  }}
                >
                  Customer Feedback Store
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",
                    opacity: "0.9",
                    fontSize: "medium",
                    marginLeft: "7px",
                    marginBottom: "12px",
                  }}
                >
                  React, React-Redux, HTML, CSS, MongoDB, Google OAuth
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/feedbackstore'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>
                  <a
                    href='https://customerfeedbackstore.herokuapp.com/'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      Application Link
                    </i>
                  </a>
                  <Link to='/feedbackstore'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        opacity: "0.6",
                        fontSize: "21px",

                        marginLeft: "7px",
                        marginBottom: "10px",
                      }}
                    >
                      Project Demo
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6 portfolio-item filter-card'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img
                src='assets/img/aparment.jpg'
                className='img-fluid'
                alt=''
              ></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.7",
                  }}
                >
                  Apartment Management Software
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",

                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.8",
                  }}
                >
                  JavaServer Pages, XML , HTML , CSS ,MySQL ,Apache Tomcat
                  server
                </p>
                <div className='portfolio-links'>
                  <Link to='/apartment'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        opacity: "0.6",
                        fontSize: "19px",
                      }}
                    >
                      Project Details
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6 portfolio-item filter-web"'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img src='assets/img/blogging.jpg' className='img-fluid' alt=''></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.7",
                  }}
                >
                  Real-Time Blogging Site
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",

                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.8",
                  }}
                >
                  React.js , DynamoDB , AWS AppSync , Cognito, GraphQL, S3 , AWS Amplify
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/Real-time-blogging-site'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>
                  <a
                    href='https://blogfinal.dg44t81gagh4q.amplifyapp.com'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      Application Link
                    </i>
                  </a>
                  <Link to='/blogging'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        opacity: "0.6",
                        fontSize: "19px",
                      }}
                    >
                      Project Details
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div
            className='col-lg-4 col-md-6 portfolio-item filter-web"'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img src='assets/img/kubernetes.jpg' className='img-fluid' alt=''></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.7",
                  }}
                >
                  Diving into Kubernetes
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",

                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.8",
                  }}
                >
                  React , Kubernetes , Google Cloud Platform , Redis , Postgres , CI/CD Pipeline, Travis CI
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/multi-kubernetes'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>

                  <Link to='/kubernetes'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        opacity: "0.6",
                        fontSize: "19px",
                      }}
                    >
                      Project Details
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6 portfolio-item filter-web"'
            data-aos='fade-down'
          >
            <div className='portfolio-wrap'>
              <img src='assets/img/docker.png' className='img-fluid' alt=''></img>
              <div className='portfolio-info'>
                <h4
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.7",
                  }}
                >
                  Multi-Container Docker
                </h4>
                <p
                  style={{
                    backgroundColor: "grey",

                    textAlign: "center",
                    fontSize: "medium",
                    opacity: "0.8",
                  }}
                >
                  React , Dockers , AWS EC2 , Redis , Postgres , CI/CD Pipeline, Travis CI
                </p>
                <div className='portfolio-links'>
                  <a
                    href='https://github.com/mdhanapal1812/multicontainer-docker'
                    title='App 2'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='bx bx-plus'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        fontSize: "19px",
                        opacity: "0.6",
                      }}
                    >
                      GitHub Link
                    </i>
                  </a>

                  <Link to='/docker'>
                    <i
                      className='bx bx-link'
                      style={{
                        backgroundColor: "black",
                        textAlign: "center",
                        opacity: "0.6",
                        fontSize: "19px",
                      }}
                    >
                      Project Details
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Portfolio;

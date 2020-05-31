import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <main id='main'>
      <section id='portfolio' className='portfolio'>
        <div className='container'>
          <div className='section-title'>
            <h2>Portfolio</h2>
            <p>
              I love indulging in projects that makes use of top-notch
              technologies ! Here are some of the projects that I have worked
              on.
            </p>
            <p>
              <h3>
                Please follow the link on the image to find the demo / details
                of the project.
              </h3>
            </p>
          </div>

          <div className='row portfolio-container' data-aos='fade-down'>
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
                      textAlign: "center",
                      fontSize: "medium",
                    }}
                  >
                    Fun with Images
                  </h4>
                  <p
                    style={{
                      backgroundColor: "grey",
                      opacity: "0.9",
                      fontSize: "medium",
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
                          fontSize: "21px",
                          opacity: "1",
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
              className='col-lg-4 col-md-6 portfolio-item filter-card'
              data-aos='fade-down'
            >
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/dbms.JPG'
                  className='img-fluid'
                  alt=''
                ></img>
                <div className='portfolio-info'>
                  <h4
                    style={{
                      backgroundColor: "black",
                      textAlign: "center",
                      fontSize: "medium",
                    }}
                  >
                    Interactive Cookbook Website
                  </h4>
                  <p
                    style={{
                      backgroundColor: "grey",
                      opacity: "0.9",
                      textAlign: "center",
                      fontSize: "medium",
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
                    }}
                  >
                    Apartment Management Software
                  </h4>
                  <p
                    style={{
                      backgroundColor: "grey",
                      opacity: "0.9",
                      textAlign: "center",
                      fontSize: "medium",
                    }}
                  >
                    JavaServer Pages, XML , HTML , CSS ,MySQL ,Apache Tomcat
                    server
                  </p>
                  <div className='portfolio-links' style={{ opacity: "1" }}>
                    <Link to='/apartment'>
                      <i
                        className='bx bx-link'
                        style={{
                          backgroundColor: "black",
                          textAlign: "center",
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
    </main>
  );
};

export default Portfolio;

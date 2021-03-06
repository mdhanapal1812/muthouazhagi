import React from "react";
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div>
      <section id='resume' className='resume'>
        <div
          className='container'
          data-aos='fade-left'
          style={{ height: "100%" }}
        >
          <div className='section-title' style={{ height: "100%" }}>
            <h2 style={{ marginTop: "64px" }}>Resume</h2>
            <p>
              Available for Full-time opportunities from : Jan 2022.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <h3 className='resume-title'>Sumary</h3>
              <div className='resume-item pb-0'>
                <h4>Muthouazhagi Dhanapal</h4>
                <p>
                  <em>
                    Graduate student with 3+ years of experience as Software
                    Developement Engineer.
                  </em>
                </p>
                <p>
                  <ul>
                    <li>24C, Smith street, Boston, MA - 02120</li>
                    <li>(857) 269-8359</li>
                    <li>dhanapal.m@northeastern.edu</li>
                  </ul>
                </p>
              </div>

              <h3 className='resume-title'>Education</h3>
              <div className='resume-item'>
                <h4>Northeastern University, Boston, MA</h4>
                <h5>Master Of Science in Computer Science </h5>
                <p>
                  <em>2019 - 2021</em>
                </p>
                <p>
                  <em>CGPA : 3.8/4.0</em>
                </p>
                <p>
                  Relevant CourseWork : Programming Design Paradigms,
                  Algorithms, Foundations of Artificial Intelligence, Database
                  Management Systems, Foundations of Software Engineering, Web Development
                </p>
                <a href="https://northeastern-csm.symplicity.com/profiles/muthouazhagi.dhanapal" target='_blank' rel='noopener noreferrer'> Northeastern Profile </a>
              </div>
              <div className='resume-item'>
                <h4>Pondicherry University, Puduchery, India</h4>
                <h5>Bachelor of Technology in Computer Scince </h5>

                <p>
                  <em>2011-2015</em>
                </p>
                <p>
                  Relevant CourseWork : Object Oriented Programming, Data
                  Structures, Software Engineering, Wireless Communication and
                  Networks, Information Security, Distributed Systems , Web
                  Development
                </p>
              </div>
              <div className='resume-item'>
                <h4>Academic Projects</h4>
                <h5>
                  Please visit <Link to='/portfolio'> Projects Section </Link>{" "}
                  for detailed description
                </h5>
              </div>

            </div>
            <div className='col-lg-6'>
              <h3 className='resume-title'>Professional Experience</h3>
              <div className='resume-item'>
                <h4>Software Engineer Intern </h4>
                <h5>Bola AI, Massachusetts, US </h5>
                <p>
                  <em> May 2021 - Present</em>
                </p>
                <p>
                  <em>
                    Technology Used : Angular, Electron,  MySQL, TypeScript, Azure, Salesforce Development, Google Extensions
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                      Responsible for leading the development of Bola Extensions for Curve Dental Software. 
                    </li>
                  </ul>
                </p>
              </div>

              <div className='resume-item'>
                <h4>Full Stack Developer Co-op </h4>
                <h5>Bola AI, Massachusetts, US </h5>
                <p>
                  <em> Sept 2020 - Present</em>
                </p>
                <p>
                  <em>
                    Technology Used : Angular, Electron,  MySQL, TypeScript, Azure, Salesforce Development, Google Extensions
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                    	Developed the user-facing features in Bola dental desktop app using Electron and Angular for AI-Voice assistant for healthcare providers.
                    </li>
                    <li>
                    	Researched and implemented the integration of Salesforce with Bola backend using Change Data Capture , REST API and Apex triggers to manage all orders and account information of Bola AI customers.
                    </li>
                    <li>
                    	Developed the testing framework using Jest and Code Integration with GitHub actions, decreasing bug incidence in production by 70%.
                    </li>
                  </ul>
                </p>
              </div>

              <div className='resume-item'>
                <h4>Software Engineer Intern</h4>
                <h5>Pinwheel.io, Texas, US </h5>
                <p>
                  <em>June 2020 - Sept 2020</em>
                </p>
                <p>
                  <em>
                    Technology Used : React Native, React, AWS AppSync,
                    DynamoDB, GraphQL, Cognito, AWS Lambda , MQTT protocol
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                    	Implemented the money-saving feature in Pinwheel wallet App using React Native, Firebase.
                    </li>
                    <li>
                    Developed a full-stack real-time messaging and notification service using MQTT protocol , with mosquitto broker installed on AWS EC2. Used Apollo server, React, DynamoDB, AWS Lambda.
                    </li>
                    <li>
                    	Improved the user interface of Pinwheel’s caregiver admin portal using React , Sass. 
                    </li>
                  </ul>
                </p>
              </div>

              <div className='resume-item'>
                <h4>Software Development Engineer</h4>
                <h5>MBIT Wireless , Chennai , India </h5>
                <p>
                  <em>June 2016 - July 2019</em>
                </p>
                <p>
                  <em>Technology Used : C , Linux </em>
                </p>
                <p>
                  <ul>
                    <li>
                      Developed an entity MDC (Multi-Access Data Routing
                      Controller) supporting the feature of “Network-Based IP
                      Flow Mobility (NBIFOM)” in UE which resulted in providing
                      a simultaneous access to LTE and Wi-Fi. Performed Unit
                      Testing and System Testing to validate the working of the
                      feature.
                    </li>
                    <li>
                      Derived the Transmission Control Protocol (TCP) Mode B and
                      Mode G requirements from the 3GPP test specification.
                      Designed and implemented the required updates in the EPS
                      session management layer. Developed test cases and
                      validated the working of TCP Mode B and Mode G.
                    </li>
                    <li>
                      Handled the information elements Serving PLMN rate and APN
                      rate control in the EPS Session Management Layer to
                      restrict the number of messages transmitted from User
                      equipment to network, avoiding the network congestion for
                      IoT devices.
                    </li>
                    <li>
                      Performed debugging and validation of UE (User Equipment)
                      test cases with AEROFLEX, CMW and analyzed UE logs.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className='skills'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2 class='ui block header'>Technical Skills</h2>
          </div>
          <div className='row skills-content'>
            <div className='col-lg-6'>
              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  Programming Languages
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    C, C++ , JAVA
                  </i>
                </span>

                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Python , Perl , JavaScript{" "}
                  </i>
                </span>
              </div>
              <div className='progress'></div>
              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  <div className='progress-h5'> Database </div>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    MySql , MongoDB
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill ' style={{ fontSize: "130%" }}>
                  <div className='progress-h5'> Tools and IDE </div>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    IntelliJ,Visual Studio Code
                  </i>
                </span>

                <span className='skill ' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Spring Boot , GDB
                  </i>
                </span>

                <span className='skill ' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    PyCharm, Jenkins
                  </i>
                </span>
              </div>
              <div className='progress'></div>
              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  Web Technologies{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    HTML, CSS, React-Redux
                  </i>
                </span>
                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Hooks, Node.js, RESTful API
                  </i>
                </span>
                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Angular , TypeScript
                  </i>
                </span>

                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    React-Native, GraphQL
                  </i>
                </span>
              </div>
              <div className='progress'></div>
            </div>

            <div className='col-lg-6'>
              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  AI/ML Technologies{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Scikit-Learn
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  Network Protocols{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    LTE Protocols , TCP/IP , MQTT
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  DevOps{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    {" "}
                    Docker , Kubernetes
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  Operating System{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    {" "}
                    Linux , Windows
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  Cloud Computing Platforms{" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Heroku ,
                  </i>
                </span>
                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Google Cloud Platform
                  </i>
                </span>
              </div>

              <div className='progress'>
                <span className='skill' style={{ fontSize: "130%" }}>
                  AWS Services {" "}
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    DynamoDB, AWS AppSync, Cognito,
                  </i>
                </span>
                <span className='skill' style={{ fontSize: "130%" }}>
                  <i
                    className='val'
                    style={{
                      color: "#34b7a7",
                      background: "#effbf9",
                      padding: "5px 15px",
                    }}
                  >
                    Elastic Beanstalk, RDS
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

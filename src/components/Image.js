import React from "react";
import Modal from "./Modal";
import history from "./History";
import { Link } from "react-router-dom";

class Image extends React.Component {
  renderAction() {
    return (
      /* React.Fragment will allow us use multiple elements to wrap jsx without a div. */
      <React.Fragment>
        <Link to='/portfolio' className='ui button'>
          close
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    return (
      <main id='main'>
        <section id='portfolio-details' className='portfolio-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='slideshow'>
                  <iframe
                    width='700'
                    height='400'
                    title='image'
                    src='https://www.youtube.com/embed/d-R5Jf8ZwpM'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className='ui segment'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: JAVA , JAVA Swing
                  </li>
                  <li>
                    <strong> Pattern Followed </strong>: MVC Pattern
                  </li>
                  <li>
                    <strong>IDE Used</strong>: IntelliJ
                  </li>
                </ul>

                <p>
                  Implemented a user-friendly image processing application that
                  allows the users to edit , filter images and generate various
                  image patterns.
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
      <Modal
        title={
          <h3 className='ui block header'>Image Processing Application</h3>
        }
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/portfolio")}
        centered={true}
      ></Modal>
    );
  }
}

export default Image;

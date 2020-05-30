import React from "react";
import Modal from "./Modal";
import history from "./History";
import { Link } from "react-router-dom";

class CookBook extends React.Component {
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
                    src='https://www.youtube.com/embed/T4uAakD1mvU'
                    frameborder='0'
                    title='cookbook'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className='ui segment'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: React.js , Node.js ,
                    MongoDB , Mongoose
                  </li>
                  <li>
                    <strong> GitHub Link </strong>:
                    <a href='https://github.com/mdhanapal1812/'>Link</a>
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
      <Modal
        title={<h3 className='ui block header'>Interactive CookBook </h3>}
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/portfolio")}
        centered={true}
      ></Modal>
    );
  }
}

export default CookBook;

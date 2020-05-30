import React from "react";
import Modal from "./Modal";
import history from "./History";
import { Link } from "react-router-dom";

class Apartment extends React.Component {
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
                  <img
                    src='./../assets/img/aparment.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: JavaServer Pages, XML
                    , HTML , CSS ,MySQL
                  </li>
                </ul>

                <p>
                  Developed a web-based apartment management application which
                  handles the major tasks of managing an apartment such as lease
                  tracking , transactions , maintenance for both owners and
                  tenants
                </p>
                <p>
                  The application was created using JavaServer Pages, XML , HTML
                  , CSS ,MySQL and Apache Tomcat server.
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
          <h3 className='ui block header'>Aparment Management Software </h3>
        }
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/portfolio")}
        centered={true}
      ></Modal>
    );
  }
}

export default Apartment;

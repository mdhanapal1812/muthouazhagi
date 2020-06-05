import React from "react";

const Contact = () => {
  return (
    <div>
      <section id='contact' className='contact'>
        <img
          className='ui medium circular image'
          src='assets/img/contact.JPG'
          alt='contact'
          style={{
            objectFit: "cover",
            display: "block",
            width: "auto",
            maxWidth: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "64px",

            height: "auto",
          }}
        ></img>

        <div className='container' data-aos='fade-up'>
          <div
            className='section-title'
            style={{ marginLeft: "20px", height: "100%" }}
          >
            <h2 style={{ marginLeft: "1px" }}>Contact</h2>
            <p>Glad to hear Your feedback !</p>
          </div>

          <div
            className='row mt-5'
            style={{ alignContent: "center", height: "100%" }}
          >
            <div className='col-lg-4' style={{ marginLeft: "50px" }}>
              <div className='info'>
                <div className='address'>
                  <i className='icofont-google-map'></i>
                  <h4> Location:</h4>
                  <p>1574 , Tremont Street , Boston , MA</p>
                </div>

                <div className='email'>
                  <i className='icofont-envelope'></i>
                  <h4>Email:</h4>
                  <p>dhanapal.m@husky.neu.edu</p>
                </div>

                <div className='phone'>
                  <i className='icofont-phone'></i>
                  <h4>Call:</h4>
                  <p>+1 8572698359</p>
                </div>

                <div className='email'>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href='https://www.linkedin.com/in/muthouazhagi-dhanapal/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {" "}
                      <i className='fa fa-linkedin-square fa-2x'></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

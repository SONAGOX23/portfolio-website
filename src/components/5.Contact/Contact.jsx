import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title"> Get in Touch </h2>
        <span className="section__subtitle"> Contact Me </span>


        <div className="contact__container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">tushar.verma2319@gmail.com</span>

                        <a href="https://mail.google.com/mail/u/3/#inbox?compose=new" className="contactv__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"> </i></a>
                    </div>


                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">8091144844</span>

                        <a href="" className="contactv__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"> </i></a>
                    </div>

                    {/* <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title"></h3>
                        <span className="contact__card-data"></span>

                        <a href="" className="contactv__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"> </i></a>
                    </div> */}

                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Email Me</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact
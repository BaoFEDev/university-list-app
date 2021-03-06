import React from 'react'
import PropTypes from 'prop-types'
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = props => {
    return (
        <>


            <footer className="text-center text-lg-start text-muted page-footer">

                <div
                    className="container d-flex justify-content-center justify-content-lg-between p-4"
                >

                    <div className="me-5 d-none d-lg-block get-connected-title">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div className="social-media">
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                </div>

                <div className="border-bottom"></div>

                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 col-item">

                            <h6 className="text-uppercase fw-bold mb-4 col-item-title">
                                <i className="fas fa-gem me-3"></i>Anrakutei
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>



                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 col-item">

                            <h6 className="text-uppercase fw-bold mb-4 col-item-title">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>



                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 col-item">

                            <h6 className="text-uppercase fw-bold mb-4 col-item-title">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 col-item">

                            <h6 className="text-uppercase fw-bold mb-4 col-item-title">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>

                </div>



                <div className="text-center p-4 footer-copyright" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    ?? 2021 Copyright:
                    <a className=" fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>



        </>
    )
}

Footer.propTypes = {

}

export default Footer

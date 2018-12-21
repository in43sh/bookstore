import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__inner-container">
          <div className="footer__left">
            <h2 className="footer__header">Assemble books</h2>
          </div>
          <div className="footer__right">
            <div>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
            </div>
            <div>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
            </div>
            <div>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
              <Link className="footer__links" to="#">Link</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

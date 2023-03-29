import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className="home-footer">
      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="footer-heading">About Poodals</h3>
              <p>
                Poodals is a leading pet service provider that specializes in
                providing a wide range of pet care services. Our team of
                experienced professionals is dedicated to providing the highest
                quality pet care to your furry friends.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-envelope"></i> info@poodals.com
                </li>
                <li>
                  <i className="fas fa-phone"></i> 123-456-7890
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> 123 Main Street,
                  Anytown USA
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase footer-heading">Branches in Bangalore</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.google.com/maps?q=Poodals+HSR+Layout">
                    HSR Layout
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps?q=Poodals+Koramangala">
                    Koramangala
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps?q=Poodals+Indiranagar">
                    Indiranagar
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps?q=Poodals+Malleshwaram">
                    Malleshwaram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-center">
            &copy;© {currentYear} Poodals Pet Services. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

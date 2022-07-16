import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    
<footer className=" page-footer font-small blue pt-4">

  <div className="container container-fluid text-center text-md-left">


    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="brand-name"><strong> Ali's ReactApp </strong></h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>

      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase">Branches</h5>

        <ul className="list-unstyled">
          <li>
            <Link to='/'>Lahore</Link>
          </li>
          <li>
            <Link to='/'>Isalamabad </Link>
          </li>
          <li>
            <Link to='/'>Karachi</Link>
          </li>
          <li>
            <Link to='/'>Multan</Link>
          </li>
        </ul>

      </div>

      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <Link to='/'>FaceBook <i className="fa fa-facebook"></i></Link>
          </li>
          <li>
            <Link to='/'>Instagram <i className="fa fa-instagram"></i></Link>
          </li>
          <li>
            <Link to='/'>Github <i className="fa fa-github"></i></Link>
          </li>
          <li>
            <Link to='/'>Twitter <i className="fa fa-twitter"></i></Link>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link href="/"> Ali Raza</Link>
  </div>

</footer>
    </>
  )
}

export default Footer;
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">
      <div className="social-media-handles">
          <div className="insta">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="fb">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="youtube">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div className="linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>

      <div className="footer-nav">
        <h3>Copyright © Hallabol 2023</h3>
      </div>
    </div>

  )
}

export default Footer
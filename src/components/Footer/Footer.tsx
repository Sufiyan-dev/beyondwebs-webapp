import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <div className="footer-main">
        <div className="footer-logo-wrapper">
          <h1>Beyond Webs</h1>
        </div>
        {/* <div className="footer-address-wrapper">
          <p></p>
        </div> */}
        <div className="footer-contact-wrapper">
        <p className="footer-email ">
          <a href="mailto:beyondwebs@gmail.com" className="email-link hover-class">
            beyondwebs@gmail.com
          </a>
        </p>
          {/* <p>000-000-0000</p> */}
        </div>
      </div>
      <div className="footer-sub-main">
        <div className="footer-web-info-wrapper">@ 2024 Beyond Webs</div>
        <div className="footer-socials-wrapper">
          <span className="icon-social-instagram hover-class"></span>
          <span className="icon-social-linkedin hover-class"></span>
          <span className="icon-social-facebook hover-class"></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
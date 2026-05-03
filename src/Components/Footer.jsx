import '../index.css'
import UrbanTechLogo from '../assets/UrbanTechLogo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="about">
          <img src={UrbanTechLogo} alt="Urban Tech Logo" className="footer-logo" height="70" width="70" />
          <h3>About Urban Tech</h3>
          <p>Urban Tech sells top-quality products at great prices.</p>
          <p>We carefully select items to give you the best value and performance.</p>
        </div>

        <div className="contact">
          <h3>Contact</h3>
          <p>Email: support@urbantech.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="feedback">
          <h3>Let us know</h3>
          <p>If you like our products, tell us — your feedback helps us improve.</p>
          <button className="footer-btn">Send Feedback</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urban Tech — All rights reserved.</p>
      </div>
    </footer>
  )
}


export default Footer;



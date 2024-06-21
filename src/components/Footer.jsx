import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <Link to="/" className="footerLogo">
           U
          </Link>
          <h6>Developer: I.Kamolov</h6>
        </div>
      </footer>
    </>
  );
}

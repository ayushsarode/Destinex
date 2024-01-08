import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="">
          <h1>Destinex.</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="">
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Footer;

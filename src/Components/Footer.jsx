import "./Footer.css"
import zuriLogo from "../images/Vector.png"
import ingressiveLogo from "../images/ingressive.png"

function Footer() {
    return (
      <div className="footer">
        {/* <ZuriLogo /> */}
        <img src={zuriLogo} alt="" className="" id="zuri_img"/>
        <p className="footnote">HNG Internship 9 Frontend Task</p>
        {/* <IngressiveLogo /> */}
        <img src={ingressiveLogo} alt="" className="" id="ingressive_img"/>
      </div>
    );
}

export default Footer;
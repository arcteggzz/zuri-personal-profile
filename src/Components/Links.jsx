import "./Links.css"
import LinkPersona from "./Link"
import {Link} from "react-router-dom"
import LinkData from "../Data/LinksData";

function Links() {
  return (
    <div className="links-wrapper">
      <div className="links">
        {
          LinkData.map((link,index) => {
            return(
              <LinkPersona
                key = {index}
                nameTag = {link.nameTag}
                id = {link.id}
                idLink = {link.idLink}
              />
            )
          })
        }
        <div><Link to="/contact" className="link">Contact me</Link></div>  
      </div> 
      <svg width="1216" height="72" viewBox="0 0 1216 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1216" height="72" fill="white"/>
        <path d="M591.875 35.2498C592.911 35.2498 593.75 34.4104 593.75 33.375C593.75 32.3395 592.911 31.5001 591.875 31.5001C590.84 31.5001 590 32.3396 590 33.3751V35.2498H591.875ZM586.625 35.2498C587.661 35.2498 588.5 34.4103 588.5 33.3748V28.1251C588.5 27.0896 587.661 26.2501 586.625 26.2501C585.589 26.2501 584.75 27.0896 584.75 28.1251V33.3748C584.75 34.4103 585.589 35.2498 586.625 35.2498Z" fill="#2EB67D"/>
        <path d="M576.125 36.7502C575.089 36.7502 574.25 37.5896 574.25 38.625C574.25 39.6605 575.089 40.4999 576.125 40.4999C577.16 40.4999 578 39.6604 578 38.6249V36.7502H576.125ZM581.375 36.7502C580.339 36.7502 579.5 37.5897 579.5 38.6252V43.8749C579.5 44.9104 580.339 45.7499 581.375 45.7499C582.411 45.7499 583.25 44.9104 583.25 43.8749V38.6252C583.25 37.5897 582.411 36.7502 581.375 36.7502Z" fill="#E01E5A"/>
        <path d="M584.75 43.8752C584.75 44.9106 585.59 45.75 586.625 45.75C587.66 45.75 588.5 44.9105 588.5 43.8751C588.5 42.8395 587.66 42 586.625 42L584.75 42L584.75 43.8752ZM584.75 38.625C584.75 39.6605 585.59 40.5 586.625 40.5L591.875 40.5C592.91 40.5 593.75 39.6605 593.75 38.625C593.75 37.5895 592.91 36.75 591.875 36.75L586.625 36.75C585.59 36.75 584.75 37.5895 584.75 38.625Z" fill="#ECB22E"/>
        <path d="M583.25 28.1248C583.25 27.0894 582.41 26.25 581.375 26.25C580.34 26.25 579.5 27.0895 579.5 28.1249C579.5 29.1605 580.34 30 581.375 30L583.25 30L583.25 28.1248ZM583.25 33.375C583.25 32.3395 582.41 31.5 581.375 31.5L576.125 31.5C575.09 31.5 574.25 32.3395 574.25 33.375C574.25 34.4105 575.09 35.25 576.125 35.25L581.375 35.25C582.41 35.25 583.25 34.4105 583.25 33.375Z" fill="#36C5F0"/>
        <g clip-path="url(#clip0_4627_392527)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M632 24C625.372 24 620 29.3808 620 36.0204C620 41.3304 623.438 45.8364 628.207 47.4252C628.807 47.5356 629.025 47.1648 629.025 46.8456C629.025 46.5612 629.016 45.804 629.01 44.802C625.671 45.528 624.967 43.1904 624.967 43.1904C624.422 41.8008 623.635 41.4312 623.635 41.4312C622.545 40.6872 623.718 40.7016 623.718 40.7016C624.921 40.7856 625.555 41.94 625.555 41.94C626.625 43.776 628.364 43.2456 629.047 42.9384C629.157 42.162 629.467 41.6328 629.81 41.3328C627.146 41.0292 624.344 39.9972 624.344 35.3916C624.344 34.08 624.812 33.006 625.579 32.166C625.455 31.8624 625.044 30.6396 625.696 28.986C625.696 28.986 626.704 28.662 628.996 30.2172C629.975 29.9502 630.985 29.8142 632 29.8128C633.02 29.8176 634.046 29.9508 635.005 30.2172C637.296 28.662 638.301 28.9848 638.301 28.9848C638.956 30.6396 638.544 31.8624 638.421 32.166C639.189 33.006 639.655 34.08 639.655 35.3916C639.655 40.0092 636.848 41.0256 634.176 41.3232C634.606 41.694 634.989 42.4272 634.989 43.5492C634.989 45.1548 634.975 46.452 634.975 46.8456C634.975 47.1672 635.191 47.5416 635.8 47.424C638.19 46.6225 640.267 45.0904 641.739 43.0441C643.21 40.9977 644.001 38.5408 644 36.0204C644 29.3808 638.626 24 632 24Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_4627_392527">
        <rect width="24" height="24" fill="white" transform="translate(620 24)"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  );
}
  
export default Links;
  
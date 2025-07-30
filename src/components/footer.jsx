import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
   faXTwitter,
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
        <footer className="bg-white text-black py-4">
            <hr className="w-9/10 ml-18"/>
        <div className="container mx-auto text-center">
           
            <div className="mt-2 py-5 flex justify-center space-x-4 list-none">
            
                <li>
                    <FontAwesomeIcon icon={faInstagram} className=" text-5xl text-gray-900 drop-shadow-sm "/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFacebook} className=" text-5xl text-gray-900 "/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faYoutube} className=" text-5xl text-gray-900 "/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin} className=" text-5xl text-gray-900 "/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faXTwitter} className=" text-5xl text-gray-900 "/>
                </li>
               
                            
            </div>
             <p className="text-sm font-bold">©  FCT SAPZ 2023..</p>
        </div>
        </footer>
    );
}
export default Footer;
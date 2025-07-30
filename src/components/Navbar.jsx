import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../assets/react.svg";

// Example Navbar component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="px-30 sticky top-0 z-50 bg-white ">
      <nav className="bg-white-600 py-6 px-6 text-base sm:text-lg md:text-xl">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <Link to="/">
            <img src="./src/assets/logo.jpeg" alt="Logo" className="h-12 w-12 mr-10" />
          </Link>
          {/* Hamburger button for mobile */}
          <button
            className="lg:hidden text-green-800"
            onClick={() => setMenuOpen(!menuOpen)}
           
          >
            <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
          </button>
          {/* Menu */}
          <ul
            className={`px-6 lg:flex-row justify-evenly items-center space-y-4 lg:space-y-0 lg:space-x-8 text-green-700 font-bold md:font-medium absolute lg:static top-20 left-0 bg-white-600 transition-all duration-900  z-10 w-full ${
              menuOpen ? "block font-light bg-white " : "hidden lg:flex "
            }`}
            style={{ transformOrigin: "top" }}
          >
            {/* Projects Dropdown */} 
            <li className="relative">
              <button
                className="flex items-center hover:underline underline-offset-10 hover:text-amber-700 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setDropdownOpen(false)}
                type="button"
              >
                Projects
                <FontAwesomeIcon icon={faCaretDown} className={`ml-1 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute left-0 mt-2 w-50 bg-white border rounded shadow-lg z-20 overflow-hidden transition-all duration-500 ${
                  dropdownOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
                }`}
                style={{ transformOrigin: "top" }}
              >
                <ul>
                  <li>
                    <Link
                      to="/projects/benefits"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/components"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects/areas-of-intervention"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Areas of Intervention
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/events" className="hover:underline underline-offset-10 hover:text-amber-700">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline underline-offset-10 hover:text-amber-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline underline-offset-10 hover:text-amber-700">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
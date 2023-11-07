import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header_footer.css';
import cat from './Images/kitty.png';

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeNav, setActiveNav] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleActiveNav = (linkName) => {
    setActiveNav(linkName);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsNavOpen(false); // Close the navigation when scrolled 200 pixels down
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsNavOpen]);
    return(
        <>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary sticky-top">

                        <Link to="/" className="kitty" aria-current="page">
                               <img src={cat} className="kitty" alt="Kitty" />
                        </Link>

                <div className="container-fluid">
                    
                    <button className="navbar-toggler navbar-dark" type="button" onClick={() => toggleNav()} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${activeNav === "Home"? 'nav-link-active' :''}`} aria-current="page" onClick={()=>handleActiveNav("Home")} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/car1" className={`nav-link ${activeNav  === "Carousel 1"? 'nav-link-active' :''}`} aria-current="page" onClick={()=>handleActiveNav("Carousel 1")}> 
                                    <span className="nav-link-span"> Carousel 1 </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/car2" className={`nav-link ${activeNav  === "Carousel 2"? 'nav-link-active' :''}`} aria-current="page" onClick={()=>handleActiveNav("Carousel 2")}> 
                                    <span className="nav-link-span"> Carousel 2 </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
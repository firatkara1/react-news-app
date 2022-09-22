import { useRef } from "react";
import "./navbar.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a href="/" className="first-item">
        Fırat
      </a>
      <nav ref={navRef}>
        <a href="/business">EKONOMİ</a>
        <a href="/entertainment">MAGAZİN</a>
        <a href="/general">GÜNCEL</a>
        <a href="/health">SAĞLIK</a>
        <a href="/science">BİLİM</a>
        <a href="/sports">SPOR</a>
        <a href="/technology">TEKNOLOJİ</a>
        <a href="/about">HAKKIMDA</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="fa fa-times" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fa fa-bars" />
      </button>
    </header>
  );
}

export default Navbar;

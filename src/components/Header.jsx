// src/components/Header.jsx
import React, { useState } from "react";

function Header({ onOpenLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section id="home" className="header_area">
      <div id="header_navbar" className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home" onClick={closeMenu}>
                  <img
                    id="logo"
                    src="/assets/images/logo.svg"
                    alt="Logo"
                    style={{ maxHeight: "40px" }}
                  />
                </a>

                <button
                  className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                  type="button"
                  aria-expanded={menuOpen}
                  aria-label="Alternar navegación"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className={`collapse navbar-collapse sub-menu-bar ${menuOpen ? "show" : ""}`}
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto align-items-lg-center">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home" onClick={closeMenu}>
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about" onClick={closeMenu}>
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#services" onClick={closeMenu}>
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#portfolio" onClick={closeMenu}>
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#team" onClick={closeMenu}>
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog" onClick={closeMenu}>
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact" onClick={closeMenu}>
                        Contact
                      </a>
                    </li>
                    {onOpenLogin && (
                      <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            closeMenu();
                            onOpenLogin();
                          }}
                        >
                          Ingresar
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="header_hero">
        <div
          className="single_hero bg_cover d-flex align-items-center"
          style={{
            backgroundImage: "url(/assets/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="hero_content text-center">
                  <h2
                    className="hero_title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                  >
                    Esta permitido Soñar
                    <br /> Construimos Nuestro Lugar
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                    style={{ color: "white" }}
                  >
                    Creo fielmente en el esfuerzo humano , y la calidez del
                    alma.
                    <br />
                    Espero fielmente en la recompensa de nuestros esfuerzo, <br />
                    la familia es la luz que me gia hacia adelante con fe.
                  </p>
                  <a
                    href="#features"
                    className="main-btn wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

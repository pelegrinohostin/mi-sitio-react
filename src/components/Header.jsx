import React from "react";

function Header() {
  return (
    <section id="home" className="header_area">
      {/* Navbar */}
      <div id="header_navbar" className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home">
                  <img
                    id="logo"
                    src="/assets/images/logo.svg"
                    alt="Logo"
                    style={{ maxHeight: "40px" }}
                  />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#portfolio">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#team">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section con Imagen de Fondo */}
      <div className="header_hero">
        <div
          className="single_hero bg_cover d-flex align-items-center"
          style={{
            backgroundImage: "url(/assets/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // Importante para que ocupe toda la pantalla
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

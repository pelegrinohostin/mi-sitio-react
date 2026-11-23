import React from 'react';

function About() {
  return (
    <section id="about" className="pt-130">
      <div className="about_area" style={{position: 'relative', overflow: 'hidden'}}> {/* overflow:hidden evita desbordes */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_content pt-120 pb-130">
                <div className="section_title pb">
                  <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                    Esto es un poco de mí 
                  </h4>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                    Esto es mi vida y parte de mi vida.
                    Quiero recordar esto por mucho tiempo
                  </p>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.6s">
                    La verdad es que la quiero mucho, es ní vida parte de mí vida.
                  </p>
                </div>
                <a href="#0" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.7s">
                  Aquí estoy
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Imagen de fondo lateral */}
        <div 
          className="about_image bg_cover wow fadeInLeft" 
          data-wow-duration="1.3s" 
          data-wow-delay="0.2s"
          style={{
            backgroundImage: 'url(/assets/images/about.jpg)',
            // Dejamos que el CSS maneje el tamaño, pero aseguramos cover
          }}
        >
          <div className="image_content">
            <h4 className="experience"><span>Somos</span> Años de Experiencia Sirviéndolo</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
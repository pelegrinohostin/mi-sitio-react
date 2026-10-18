import React from 'react';

function Features() {
  const features = [
    { icon: 'lni lni-layers', title: 'Esperamos Crecer', desc: 'Sentimos el dolor de los años pasado.' },
    { icon: 'lni lni-layout', title: 'Creo en el Creador', desc: 'Que sentido tiene la vida sin una conciencia Universal,formamos parte de un Todo.' },
    { icon: 'lni lni-bolt', title: 'Donde estamos..?', desc: 'aprendemos según nuestros pasos, persigo un sueño.' }
  ];

  return (
    <section id="features" className="features_area pt-120 color-fondo">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Mi corazón es la Fuente</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                La esperanza llena nuestro corazón. Es como un vaso de agua cristalina.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {features.map((f, i) => (
            <div key={i} className="col-lg-4 col-md-7">
              <div className="single_features text-center mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay={`${0.2 + i * 0.2}s`}>
                <i className={f.icon}></i>
                <h4 className="features_title">{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

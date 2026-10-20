import React from 'react';

function Services() {
  const services = [
    { 
      icon: 'lni lni-briefcase', 
      title: 'La Esperanza',
      text: 'La esperanza es el sueño del hombre despierto. Es la luz que nos guía en los momentos oscuros.' 
    },
    { 
      icon: 'lni lni-clipboard', 
      title: 'Espero la Paz',
      text: 'La paz comienza con una sonrisa. Buscamos la tranquilidad interior y la armonía con el mundo.' 
    },
    { 
      icon: 'lni lni-target-revenue', 
      title: 'Amistad y Cariño',
      text: 'Un verdadero amigo es quien te toma de la mano y te toca el corazón. El cariño sana el alma.' 
    },
    { 
      icon: 'lni lni-invention', 
      title: 'La vida y el Día a Día',
      text: 'Cada día es una nueva oportunidad para ser feliz. Disfruta de las pequeñas cosas que la vida te ofrece.' 
    },
    { 
      icon: 'lni lni-bar-chart', 
      title: 'Amamos a los nuestros',
      text: 'El amor familiar es el combustible que permite a un ser humano común hacer lo imposible.' 
    },
    { 
      icon: 'lni lni-calendar', 
      title: 'Jamas te Olvidare',
      text: 'Los recuerdos son el tesoro más valioso que guardamos en nuestro corazón para siempre.' 
    }
  ];

  return (
    <section id="services" className="features_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Estamos aquí para Tí</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                  La amistad es como. El diamante en bruto se esmerila y no se desvanece como una piedra común sino surge como una joya.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="single_features text-center mt-60 wow fadeInUp" 
                data-wow-duration="1.3s" 
                data-wow-delay={(0.2 + (index % 3) * 0.1).toString() + 's'}
              >
                <i className={service.icon}></i>
                <h4 className="features_title">{service.title}</h4>
                {/* Aquí llamamos al texto específico de cada objeto */}
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
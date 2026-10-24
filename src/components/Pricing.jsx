import React from 'react';

function Pricing() {
  const plans = [
    { 
      name: 'Cielo', 
      price: 'Amor', 
      active: false,
      features: [
        'Esperanza eterna',
        'Luz en la oscuridad',
        'Paz interior',
        'Sueños cumplidos',
        'Gratitud diaria'
      ]
    },
    { 
      name: 'Contigo', 
      price: 'Siempre', 
      active: true, // Este es el plan destacado (rojo)
      features: [
        'Compañía fiel',
        'Amor incondicional',
        'Apoyo mutuo',
        'Momentos únicos',
        'Futuro juntos'
      ]
    },
    { 
      name: 'Alegría', 
      price: 'Vivir', 
      active: false,
      features: [
        'Sonrisas diarias',
        'Energía positiva',
        'Nuevas aventuras',
        'Bienestar total',
        'Vida plena'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Nuestros Valores</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                El precio más alto es el amor, y la mejor inversión es el tiempo que pasamos juntos.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-8">
              <div 
                className={`single_pricing text-center mt-30 wow fadeInUp ${plan.active ? 'active' : ''}`} 
                data-wow-duration="1.3s" 
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <h4 className="pricing_title">{plan.name}</h4>
                <h3 className="price">{plan.price}</h3>
                
                {/* Aquí iteramos sobre las características específicas de cada plan */}
                <ul className="pricing_list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <a href="#0" className="main-btn mian-btn">Te Quiero</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
import React from 'react';

function Services() {
  const services = [
    { icon: 'lni lni-briefcase', title: 'Digital Business' },
    { icon: 'lni lni-clipboard', title: 'Startup Business' },
    { icon: 'lni lni-target-revenue', title: 'Business Investment' },
    { icon: 'lni lni-invention', title: 'Business Solutions' },
    { icon: 'lni lni-bar-chart', title: 'Business Analysis' },
    { icon: 'lni lni-calendar', title: 'Consulting Business' }
  ];

  return (
    <section id="services" className="features_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Our Services</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.
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
                <p>Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore magna .</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

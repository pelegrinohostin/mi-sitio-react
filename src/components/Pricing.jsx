import React from 'react';

function Pricing() {
  const plans = [
    { name: 'Startup', price: '$240', active: false },
    { name: 'Agency', price: '$340', active: true },
    { name: 'Enterprise', price: '$440', active: false }
  ];

  const features = [
    'Startup Business',
    'Business Consulting',
    'Business Analysis',
    'Corporate Business',
    'Business Investment'
  ];

  return (
    <section id="pricing" className="pricing_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Pricing Plans</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-8 col-sm-10">
              <div 
                className={`single_pricing text-center mt-30 wow fadeInUp ${plan.active ? 'active' : ''}`}
                data-wow-duration="1.3s" 
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <h4 className="pricing_title">{plan.name}</h4>
                <span className="price">{plan.price}</span>
                <ul className="pricing_list">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="#0" className="mian-btn">Order Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

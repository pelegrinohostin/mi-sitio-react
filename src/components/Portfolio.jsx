import React from 'react';

function Portfolio() {
  const portfolios = [
    { img: '/assets/images/portfolio-1.jpg', title: 'Logo And Branding' },
    { img: '/assets/images/portfolio-2.jpg', title: 'Bootstrap 5 Project' },
    { img: '/assets/images/portfolio-3.jpg', title: 'Creative Projects' },
    { img: '/assets/images/portfolio-4.jpg', title: 'UI/UX Projects' },
    { img: '/assets/images/portfolio-5.jpg', title: 'App Development' },
    { img: '/assets/images/portfolio-6.jpg', title: 'Web Development' },
    { img: '/assets/images/portfolio-7.jpg', title: 'Business Card Design' },
    { img: '/assets/images/portfolio-8.jpg', title: 'Consulting Business' }
  ];

  return (
    <section id="portfolio" className="portfolio_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-60">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Our Portfolio</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_wrapper d-flex flex-wrap">
        {portfolios.map((item, index) => (
          <div 
            key={index} 
            className="single_portfolio wow fadeInUp" 
            data-wow-duration="1.3s" 
            data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
          >
            <img src={item.img} alt={item.title} />
            <div className="portfolio_content">
              <ul className="meta">
                <li><a href="#0"><i className="lni lni-link"></i></a></li>
              </ul>
              <h5 className="portfolio_title">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

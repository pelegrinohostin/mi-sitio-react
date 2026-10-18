import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      img: '/assets/images/author-1.jpg',
      name: 'Isabela Moreira',
      role: 'UX Specialist, Yoast',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
    {
      img: '/assets/images/author-2.jpg',
      name: 'Fiona Smith',
      role: 'Sr. Software Engineer',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    },
    {
      img: '/assets/images/author-3.jpg',
      name: 'Elon Musk',
      role: 'Creaitve Businessman',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    }
  ];

  return (
    <section 
      id="testimonial" 
      className="testimonial_area pt-130 pb-130 bg_cover" 
      style={{backgroundImage: 'url(/assets/images/testimonial.jpg)'}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial_active_wrapper">
              <div className="testimonial_active">
                {testimonials.map((item, index) => (
                  <div key={index} className="single_testimonial text-center">
                    <img src={item.img} alt={item.name} />
                    <h5 className="author_name">{item.name}</h5>
                    <span>{item.role}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

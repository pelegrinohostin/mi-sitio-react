import React from 'react';

function Testimonial() {
  const testimonials = [
    {
      img: '/assets/images/author-1.jpg',
      name: 'Isabela Moreira',
      role: 'UX Specialist, Yoast',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
    },
    {
      img: '/assets/images/author-2.jpg',
      name: 'Fiona Smith',
      role: 'Sr. Software Engineer',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
    },
    {
      img: '/assets/images/author-3.jpg',
      name: 'Elon Musk',
      role: 'Creative Businessman',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
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
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        margin: '0 auto 15px',
                        objectPosition: 'center 20%' // Ajusta este valor para subir/bajar el rostro
                      }} 
                    />
                    {/* Solo mostramos el nombre una vez */}
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
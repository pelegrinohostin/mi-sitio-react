import React from 'react';

function Blog() {
  const blogs = [
    {
      img: '/assets/images/blog-1.png',
      title: 'La vida sin sueño y esperanza es una vida vacía  .',
      content: 'Espero respuestas en el camino que he elegido.',
      type: 'large'
    },
    {
      img: '/assets/images/blog-2.jpg',
      title: 'Sín ti la vida se vuelve sin alegría de vivirla.',
      content: 'Todo lo que poseo es la fé de que estarás junto a mí.',
      type: 'small'
    },
    {
      img: '/assets/images/blog-3.jpg',
      title: 'Comenzamos con alegrías y felices sueños .',
      content: 'Sonriamos juntos haremos la diferencia .',
      type: 'small'
    },
    {
      img: '/assets/images/blog-4.jpg',
      title: 'Quiero que esto sea siempre y para siempre .',
      content: 'Estaré feliz a tu lado.',
      type: 'small'
    }
  ];

  return (
    <section id="blog" className="blog_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Decir Soñar</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Es la forma de ver la vida, porqué ver el vaso medio vacío, sí existe mil y una forma de llenar la copa de la existencia humana  .
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="single_blog mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
              <div className="blog_image">
                <img src={blogs[0].img} alt="blog" />
              </div>
              <div className="blog_content">
                <h3 className="blog_title"><a href="#0">{blogs[0].title}</a></h3>
                <p>{blogs[0].content}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {blogs.slice(1).map((blog, index) => (
              <div 
                key={index} 
                className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp" 
                data-wow-duration="1.3s"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="blog_image">
                  <img src={blog.img} alt="blog" />
                </div>
                <div className="blog_content media-body">
                  <h3 className="blog_title"><a href="#0">{blog.title}</a></h3>
                  <p>{blog.content}</p>
                  <a href="#0" className="more">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

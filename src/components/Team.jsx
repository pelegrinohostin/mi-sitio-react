import React from 'react';

function Team() {
  const members = [
    { 
      img: '/assets/images/team-1.jpg', 
      name: 'Martina.', 
      role: 'Retrospectiva' 
    },
    { 
      img: '/assets/images/team-2.jpg', 
      name: 'Martina', 
      role: 'Retrospectiva' 
    },
    { 
      img: '/assets/images/team-3.jpg', 
      name: 'Martina', 
      role: 'Sueño feliz' 
    }
  ];

  return (
    <section id="team" className="team_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Mis Sueños Felices</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Soñar y sonreír Vamos hacer un Mundo mejor, todo es posible si nos une un mismo sueño hay que ser felices.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center team_active">
          {members.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-8 col-sm-10">
              <div 
                className="single_team mt-30 wow fadeInUp" 
                data-wow-duration="1.3s" 
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <img src={member.img} alt={member.name} />
                
                <div className="team_content">
                  <h4 className="team_name"><a href="#0">{member.name}</a></h4>
                  <p>{member.role}</p>
                  <ul className="social">
                    <li><a href="#0"><i className="lni lni-facebook-filled"></i></a></li>
                    <li><a href="#0"><i className="lni lni-twitter-original"></i></a></li>
                    <li><a href="#0"><i className="lni lni-linkedin-original"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

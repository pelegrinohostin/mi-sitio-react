// src/components/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const initialForm = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [submittedMsg, setSubmittedMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // --- ZONA DE CONEXIÓN A BASE DE DATOS ---
    // Aquí luego insertaremos formData en Supabase / Firebase / PocketBase

    setSubmittedMsg('¡Mensaje recibido! (Pendiente guardar en la base de datos)');
    setFormData(initialForm);
  };

  return (
    <section
      id="contact"
      className="contact_area bg_cover pt-120 pb-130"
      style={{ backgroundImage: 'url(/assets/images/contact_bg.jpg)' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title section_title_2 text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                Contacto
              </h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Deje su mensaje aquí.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="single_form">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="col-lg-12">
              {submittedMsg && (
                <p className="form-message text-center text-white fw-semibold mt-2">
                  {submittedMsg}
                </p>
              )}
              <div className="single_form text-center">
                <button className="main-btn" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

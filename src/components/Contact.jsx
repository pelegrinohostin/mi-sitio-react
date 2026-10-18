import React, { useState } from 'react';

function Contact() {
  // 1. ESTADO: Aquí se guardan los datos mientras el usuario escribe.
  // Si quieres agregar más campos (ej: "address"), añádelos aquí.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  // 2. MANEJADOR DE CAMBIOS: Esta función se ejecuta CADA VEZ que tocas una tecla.
  // Actualiza el estado 'formData' con lo que acabas de escribir.
  const handleChange = (e) => {
    setFormData({
      ...formData, // Mantiene los valores de los otros campos intactos
      [e.target.name]: e.target.value // Actualiza solo el campo actual (name, email, etc.)
    });
  };

  // 3. MANEJADOR DE ENVÍO: Se ejecuta al presionar el botón SUBMIT.
  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANTE: Evita que la página se recargue (comportamiento por defecto de HTML).
    
    console.log('Form submitted:', formData); // Aquí ves los datos limpios en la consola.
    
    // --- ZONA DE CONEXIÓN A BASE DE DATOS ---
    // Aquí es donde llamarías a tu API o servicio (ej: fetch('/api/contact', ...))
    // alert('Mensaje enviado correctamente'); 
  };

  return (
    <section 
      id="contact" 
      className="contact_area bg_cover pt-120 pb-130" 
      style={{backgroundImage: 'url(/assets/images/contact_bg.jpg)'}}
    >
      <div className="container">
        {/* ... (Título y subtítulo se mantienen igual) ... */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title section_title_2 text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Contact Us</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4. EL FORMULARIO: Nota el 'onSubmit'. Ya no usa 'action' ni 'method' como en HTML clásico. */}
        <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
          <div className="row">
            
            {/* 5. LOS INPUTS: Cada uno tiene 3 propiedades clave para funcionar con React:
               - name: Debe coincidir con una propiedad en el useState de arriba.
               - value: Muestra lo que hay en el estado.
               - onChange: Llama a la función que actualiza el estado.
            */}
            
            <div className="col-lg-6">
              <div className="single_form">
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name"       // <--- Clave para identificar el campo
                  value={formData.name} // <--- Vinculado al estado
                  onChange={handleChange} // <--- Escucha los cambios
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
            
            <p className="form-message"></p>
            
            <div className="col-lg-12">
              <div className="single_form text-center">
                {/* 6. EL BOTÓN: Al ser type="submit", dispara automáticamente la función handleSubmit del form */}
                <button className="main-btn" type="submit">SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
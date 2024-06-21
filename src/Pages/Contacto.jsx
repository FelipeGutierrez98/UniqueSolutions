import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css'; // Importar el archivo CSS para estilos
import Logo from '../assets/Logo-unique-fotor-bg-remover-2024041610840.png'
import exampleImage from '../assets/LOBBY-01.jpg'; // Importar la imagen que se mostrará junto al formulario

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_huic8yw', // Tu Service ID
        'template_q5mba47', // Tu Template ID
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        'SZz_iRaOazKlaIqwY' // Tu User ID
      )
      .then(
        (result) => {
          console.log('Correo enviado:', result.text);
          alert('Formulario enviado exitosamente');
          setFormData({ name: '', phone, email, message: '' });
        },
        (error) => {
          console.error('Error al enviar el correo:', error.text);
          alert('Error al enviar el formulario');
        }
      );
  };

  return (
    <div className="poscon">
      <form onSubmit={handleSubmit} className="form-container">
     
        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Teléfono:</label>
          <input
            type="text"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label className="form-label">Mensaje:</label>
          <textarea
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button abs">
          Enviar
        </button>
      </form>

      <img src={exampleImage} alt="Ejemplo" className="form-image" /> {/* Imagen al lado del formulario */}
    </div>
  );
};

export default Contacto;




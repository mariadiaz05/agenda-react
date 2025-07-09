import React, { useState } from 'react';

const ContactForm = ({ onAdd }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const nuevo = { nombre, apellido, telefono };

    try {
      const res = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(nuevo),
      });

      if (res.ok) {
        alert('Contacto agregado correctamente');
        setNombre('');
        setApellido('');
        setTelefono('');
        onAdd(); // Vuelve a cargar contactos
      } else {
        alert('Error al agregar contacto');
      }
    } catch (error) {
      console.error('Error en POST:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ContactForm;

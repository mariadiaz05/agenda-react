import React from 'react';

const ContactList = ({ contactos }) => (
  <div>
    <h2>📋 Lista de Contactos</h2>
    <table id="contactosTable">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((c, index) => (
          <tr key={index}>
            <td>{c.nombre}</td>
            <td>{c.apellido}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ContactList;

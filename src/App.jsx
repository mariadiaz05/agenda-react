import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './styles.css';

const API_URL = 'http://www.raydelto.org/agenda.php';

function App() {
  const [contactos, setContactos] = useState([]);

  const cargarContactos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContactos(data);
    } catch (error) {
      console.error('Error al cargar contactos:', error);
    }
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <div className="container">
      <h1>📒 Agenda de Contactos</h1>
      <ContactForm onAdd={cargarContactos} />
      <ContactList contactos={contactos} />
    </div>
  );
}

export default App;

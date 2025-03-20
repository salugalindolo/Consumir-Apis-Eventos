const axios = require('axios');

async function consultarEventoID() {
  try {
    const eventId = '05iQyuvjKS29EheSwHrj';
    const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}`;

    // Realiza la petición GET
    const respuesta = await axios.get(url);

    console.log('✅ Evento consultado con exito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error no encontrado:', error.response?.data || error.message);
  }
}

consultarEventoID();
const axios = require('axios');

async function confirmarAsistencia() {
  try {
    const eventId = 'iGuOGgHxxLpCbgcn14Vm';
    const email = 'galindolucia26@gmail.com';

    const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}/confirmar/${email}`;

    // Realiza la petición PATCH
    const respuesta = await axios.patch(url, {}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Asistencia confirmada con éxito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error al confirmar asistencia:', error.response?.data || error.message);
  }
}

confirmarAsistencia();

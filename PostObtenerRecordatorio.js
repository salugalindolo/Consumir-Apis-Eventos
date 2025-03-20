const axios = require('axios');

async function ObtenerRecordatorio() {
  try {
    const eventId = '05iQyuvjKS29EheSwHrj';

    const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}/recordatorio`;

    // Realiza la petición POST
    const respuesta = await axios.post(url, {}, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Recordatorio enviado con éxito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error al enviar el recordatorio:', error.response?.data || error.message);
  }
}

ObtenerRecordatorio();

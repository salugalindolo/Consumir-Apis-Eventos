const axios = require('axios');

async function eliminarEvento() {
  try {
    const eventId = 'rL2eKFVOvyCPLSMZeiEx';
    const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}`;

    // Realiza la petición DELETE
    const respuesta = await axios.delete(url);

    console.log('✅ Evento eliminado con éxito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error al eliminar el evento:', error.response?.data || error.message);
  }
}

eliminarEvento();

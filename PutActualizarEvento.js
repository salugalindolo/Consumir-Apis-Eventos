const axios = require('axios');

async function actualizarEvento() {
  try {
    const eventId = '05iQyuvjKS29EheSwHrj';
    const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}`;

    // Datos actualizados del evento
    const data = {
      titulo: "Conferencia Actualizada de Salud Mental",
      fechaInicio: "2025-03-20T09:00:00Z",
      fechaFin: "2025-03-20T11:00:00Z",
      ubicacion: {
        ciudad: "Guadalajara",
        pais: "Mexico"
      },
      capacidadMaxima: 120,
      lugaresDisponibles: 110,
      participantes: [
        {
          nombre: "Lucia Lopez",
          correo: "galindolucia26@gmail.com",
          asistenciaConfirmada: false
        }
      ]
    };

    // Realiza la petición PUT
    const respuesta = await axios.put(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Evento actualizado con éxito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error al actualizar el evento:', error.response?.data || error.message);
  }
}

actualizarEvento();

const axios = require('axios');

async function crearEvento() {
  try {
    const url = 'https://apirest-nodehost.onrender.com/apiV1/events';

    // Body params para crear el evento
    const data = {
      titulo: "Conferencia Nueva",
      fechaInicio: "2025-03-19T09:00:00Z",
      fechaFin: "2025-03-19T11:00:00Z",
      ubicacion: {
        ciudad: "Tepic",
        pais: "Mexico"
      },
      capacidadMaxima: 150,
      lugaresDisponibles: 96,
      participantes: [
        {
          nombre: "Lucia Lopez",
          correo: "galindolucia26@gmail.com",
          asistenciaConfirmada: true
        },
        {
            nombre: "Lucia Galindo",
            correo: "galindolucia26@gmail.com",
            asistenciaConfirmada: true
        }
      ]
    };

    // Realizar la petición POST
    const respuesta = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Evento creado con éxito:', respuesta.data);
  } catch (error) {
    console.error('❌ Error al crear el evento:', error.response?.data || error.message);
  }
}

crearEvento();

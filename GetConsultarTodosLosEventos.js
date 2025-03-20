const axios = require('axios');

async function consultarEventos() {
  try {
    const respuesta = await axios.get('https://apirest-nodehost.onrender.com/apiV1/events');
    console.log('Datos recibidos:', respuesta.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

consultarEventos(); 
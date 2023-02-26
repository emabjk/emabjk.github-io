
const data = JSON.parse(` {"nombre":"Emanuel","apellido":"Bjorklund","dni":"39734882","telefono":"3472593435","edad":"25"}`);


    const datosPersonalesDiv = document.getElementById('datos_personales');
    const nombre = data.nombre;
    const apellido = data.apellido;
    const dni = data.dni;
    const edad = data.edad;
    const telefono = data.telefono;
    var html = `
      <h1 class="text-center">Datos Personales</h1>
      <p>Nombre: ${nombre} ${apellido}</p>
      <p>DNI: ${dni}</p>
      <p>Edad: ${edad}</p>
      <p>Teléfono: ${telefono}</p>
    `;
    datosPersonalesDiv.innerHTML = html;


  /*Base de Datos de Usuarios*/
  basededatos = localStorage.getItem("sistema-de-login")
  
  if(!basededatos){
    cargarbaseinicialdelabasededatos()
  }
  
  function cargarbaseinicialdelabasededatos(){
    basededatos = {
      FacundoMetzler: {
        contraseña: "Fmetzler"
      },
      NicolasPaez: {
        contraseña: "NPaez"
      },
      NicolasKessel: {
        contraseña: "Nkessel"
      },
    }
  }
  
  async function login(){
    await swal.fire({
      title: "Bienvenido",
      confirmbuttontext:"login" ,
      preConfirm: () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (!username) {
          Swal.showValidationMessage("No hay usuario");
          return false;
        }
        if (!password) {
          Swal.showValidationMessage("No hay contraseña");
          return false;
        }
        let datos = baseDeDatosLogin[username];
        if (!datos) {
          Swal.showValidationMessage("El usuario no existe");
          return false;
        }
        if (datos.password != password) {
          Swal.showValidationMessage("Contraseña incorrecta");
          return false;
        }
        usuarioLogueado = datos
        return true;
      },
    });
     
  }
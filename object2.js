
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
    profesion: "Ingeniero"
  };
  
  
  console.log(persona);
  
  
  function presentacion(objeto) {
    return "Hola, mi nombre es " + objeto.nombre + ", tengo " + objeto.edad + " años y vivo en " + objeto.ciudad + ".";
  }
  
 
  let mensaje = presentacion(persona);
  

  console.log(mensaje);
  
  
  persona.hobbies = ["correr", "leer", "cocinar"];
  

  console.log(persona.hobbies);
  
  
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  
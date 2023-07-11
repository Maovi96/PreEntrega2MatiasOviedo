let personajes = [
    { nombre: "Guerrero", vida: 100, ataque: 10, defensa: 5 },
    { nombre: "Mago", vida: 80, ataque: 15, defensa: 2 },
    { nombre: "Pícaro", vida: 90, ataque: 12, defensa: 3 }
  ];
  
//ENEMIGOS
let enemigos = [
    { nombre: "Orco", vida: 50, ataque: 8, defensa: 2 },
    { nombre: "Goblin", vida: 40, ataque: 10, defensa: 1 },
    { nombre: "Ogro", vida: 60, ataque: 6, defensa: 3 },
    { nombre: "Huargo", vida:30, ataque: 10, defensa:3 },
    { nombre: "Zombie", vida:40, ataque: 6, defensa:1 },
    { nombre: "Jefe Nigromante", vida:80, ataque: 15, defensa:5 },
    { nombre: "Jefe Dragón", vida:100, ataque: 12, defensa:5 }
  ];
  
let nombreJugador = prompt("Ingresa tu nombre:");
let personajeSeleccionado;
  
  if (nombreJugador) {
    let listaPersonajes = "";
    for (let i = 0; i < personajes.length; i++) {
      listaPersonajes += i + 1 + ". " + personajes[i].nombre + "\n";
    }
    let opcion = prompt("Hola " + nombreJugador + ", elige tu personaje:\n" + listaPersonajes);
  
    if (opcion && opcion >= 1 && opcion <= personajes.length) {
      personajeSeleccionado = personajes[opcion - 1];
    } else {
      personajeSeleccionado = personajes[Math.floor(Math.random() * personajes.length)];
      alert("Okey, voy a elegir por ti");
    }
  } else {
    personajeSeleccionado = personajes[Math.floor(Math.random() * personajes.length)];
    alert("¿Así que anónimo verdad? Entonces elegire por ti");
  }

  let enemigoSeleccionado = enemigos[Math.floor(Math.random() * enemigos.length)];
  
  function actualizarInfo() {
    document.getElementById("personaje-nombre").textContent = personajeSeleccionado.nombre;
    document.getElementById("personaje-vida").textContent = personajeSeleccionado.vida;
    document.getElementById("personaje-ataque").textContent = personajeSeleccionado.ataque;
    document.getElementById("personaje-defensa").textContent = personajeSeleccionado.defensa;
  
    document.getElementById("enemigo-nombre").textContent = enemigoSeleccionado.nombre;
    document.getElementById("enemigo-vida").textContent = enemigoSeleccionado.vida;
    document.getElementById("enemigo-ataque").textContent = enemigoSeleccionado.ataque;
    document.getElementById("enemigo-defensa").textContent = enemigoSeleccionado.defensa;
  }
  
  function combatir() {
    while (personajeSeleccionado.vida > 0 && enemigoSeleccionado.vida > 0) {
      let danoPersonaje = personajeSeleccionado.ataque - enemigoSeleccionado.defensa;
      if (danoPersonaje > 0) {
        enemigoSeleccionado.vida -= danoPersonaje;
      }
  
      if (enemigoSeleccionado.vida <= 0) {
        alert(personajeSeleccionado.nombre + " derrotó a " + enemigoSeleccionado.nombre + "!");
        break;
      }
      let danoEnemigo = enemigoSeleccionado.ataque - personajeSeleccionado.defensa;
      if (danoEnemigo > 0) {
        personajeSeleccionado.vida -= danoEnemigo;
      }
  
      if (personajeSeleccionado.vida <= 0) {
        alert(personajeSeleccionado.nombre + " fue derrotado por " + enemigoSeleccionado.nombre + "!");
      }
    }

    actualizarInfo();
    document.getElementById("combatir-btn").disabled = true;
  }
  
  actualizarInfo();
  document.getElementById("combatir-btn").addEventListener("click", combatir);

  //MIRAR DENTRO DEL JUEGO

  console.log("¿Con qué haciendo trampa?")

  console.log("Jefes del juego")

  const jefes = enemigos.filter((enemigo) => enemigo.nombre.includes("Jefe"));
  console.log(jefes);


console.log("Enemigos Dungeon 3")

  let enemigos2 = [
    { nombre: "Kobold", vida: 40, ataque: 6, defensa: 2 },
    { nombre: "Cubo Gelatinoso", vida: 150, ataque: 5, defensa: 5 },
    { nombre: "Jefe Contemplador", vida: 100, ataque: 12, defensa: 4 },
  ];
  let enemigosDungeon3 = enemigos.concat (enemigos2);
  console.log (enemigosDungeon3);

  console.log("Aventureros con mas daño");

  function ordenarPorAtaque(personajes) {
    personajes.sort(function(a, b) {
      return b.ataque - a.ataque;
    });
    return personajes;
  }
  let personajesOrdenados = ordenarPorAtaque(personajes);

  for (let i = 0; i < personajesOrdenados.length; i++) {
    console.log(personajesOrdenados[i].nombre + ": " + personajesOrdenados[i].ataque);
  }

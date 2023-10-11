// Obtenemos los elementos del contador
const dayElement = document.getElementById("days");
const hourElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Fecha de inauguración: 24 de octubre de 2023 a las 19:00 (hora local)
    const fechaInauguracion = new Date("2023-10-24T19:00:00");

    // Función para actualizar el contador
    const setCountdown = () => {
      const ahora = new Date();
      const tiempoRestante = fechaInauguracion - ahora;

      if (tiempoRestante <= 0) {
        // La fecha de inauguración ha llegado
        dayElement.textContent = "0";
        hourElement.textContent = "0";
        minutesElement.textContent = "0";
        secondsElement.textContent = "0";
        clearInterval(intervalo);
      } else {
        const segundos = Math.floor((tiempoRestante / 1000) % 60);
        const minutos = Math.floor((tiempoRestante / 1000 / 60) % 60);
        const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

        dayElement.textContent = dias;
        hourElement.textContent = horas;
        minutesElement.textContent = minutos;
        secondsElement.textContent = segundos;

        console.log("Dias restantes:" + dias + "\n"
          + "horas restantes:" + horas + "\n"
          + "Minutos restantes:" + minutos + "\n"
          + "Segundos restantes:" + segundos);
      }
    };

    // Llamamos a la función para actualizar el contador inicialmente
    setCountdown();

    // Actualizamos el contador cada segundo
    const intervalo = setInterval(setCountdown, 1000);
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
});

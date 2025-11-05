//POR QUE ANDAS VIENDO EL CODIGO CHISMOSO HAHAH

/* Todo el código que busca elementos del HTML (como 'kon-logo' o 'close')
  y les añade un "oyente" (addEventListener) debe ir dentro de "DOMContentLoaded".
  Esto asegura que el script no intente buscar algo que todavía no carga.
*/
document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. Botones de Creadores ---
  const botones = document.querySelectorAll(".creadores");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const url = boton.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });

  // --- 2. Funcionalidad del Modal (Cerrar) ---
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeBtn = document.querySelector(".close");

  // Cierra el modal con el botón X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = ""; // limpia el iframe para detener el video
  });

  // Si haces click fuera del modal, también se cierra
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });

  // --- 3. Easter Egg (Koncitas) ---
  const konLogo = document.getElementById('kon-logo');
  const yuiFullscreen = document.getElementById('yui-fullscreen');

  konLogo.addEventListener('click', () => {
    yuiFullscreen.style.display = 'flex';
    
    setTimeout(() => {
      yuiFullscreen.style.display = 'none';
    }, 5000); // 5 segundos
  });

}); // <- FIN del DOMContentLoaded


/* --- Funciones Globales ---
  Estas funciones DEBEN estar aquí, en el scope global (fuera de todo),
  para que los atributos 'onclick=""' de tu HTML las puedan encontrar.
*/

// Abre el episodio en el modal
function openModal(url) {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    
    // Checamos si la URL no está vacía
    if (url && modal && videoFrame) { 
        videoFrame.src = url; // asigna el link del capítulo
        modal.style.display = "flex"; // muestra el modal
    } else {
        alert("¡Este episodio aún no está disponible!");
    }
}

// Abre el enlace de descarga
function downloadEpisode(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("¡Aún no hay link de descarga!");
    }
}

// Esta función no se usa en tu HTML, pero la dejo
function openEpisode(url) {
    window.open(url, "_blank");
}
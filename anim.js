// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16, duration: 8 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24, duration: 8  },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 31, duration: 7  },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40, duration: 6  },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 47, duration: 4  },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 51, duration: 6  },
  { text: "No te apures, no detengas, el instante del encuentro", time: 59, duration: 5  },
  { text: "Está dicho que es un hecho, No la pierdas, no hay derecho", time: 62, duration: 6  },
  { text: "No te olvides que la vida , casi nunca está dormida", time: 67, duration: 10  },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93, duration: 8  },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101, duration: 8  },
  { text: "Él se acercó de repente la miró tan de frente", time: 109, duration: 8  },
  { text: "Toda una vida soñada y no pudo decir nada", time: 117, duration: 5 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 123, duration: 5  },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 127, duration: 6  },
  { text: "No te apures, no detengas, el instante del encuentro", time: 136, duration: 4  }, 
  { text: "Está dicho que es un hecho, No la pierdas, no hay derecho", time: 140, duration: 4  }, 
  { text: "No te olvides que la vida, casi nunca está dormida", time: 144, duration: 12  }, 
  { text: "Flores amarillas", time: 160, duration: 8  },
  { text: "Ella sabía que él sabía, que algun dia pasaria", time: 169, duration: 4  },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 173, duration: 7  },
  { text: "No te apures, no detengas, el instante del encuentro", time: 181, duration: 5  },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 185, duration: 4},
  { text: "No te olvides que la vida", time: 189, duration: 5  },
  { text: "Casi nunca está dormida", time: 194, duration: 5  },
  { text: "Ella sabía que él sabía, el sabía, ella sabía, que el sabia", time: 199, duration: 6  },
  { text: "Ella sabia y se olvidaron, de sus flores amarillas", time: 203, duration: 10  },
];


// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var timeSinceLineStart = currentTime - currentLine.time;
    var opacity = Math.min(1, timeSinceLineStart / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualiza las letras cada 100 milisegundos para mayor precisión
setInterval(updateLyrics, 100);

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
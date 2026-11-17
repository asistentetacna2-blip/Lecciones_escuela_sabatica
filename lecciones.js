/* Base de datos de lecciones.
   Estructura de cada lección:
   {
     numero: 1,
     titulo: "...",
     versiculo: "...",
     referencia: "...",
     audio: "audios/leccion-01.mp3",
     secciones: [ { titulo: "...", parrafos: ["...", "..."] } ]
   }
   Los textos de las lecciones 1 a 3 son EJEMPLOS: reemplázalos por tu contenido real. */

function rutaAudio(n) {
  return 'audios/leccion-' + String(n).padStart(2, '0') + '.mp3';
}

window.LECCIONES = [
  {
    numero: 1,
    titulo: "La Palabra que ilumina",
    versiculo: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
    referencia: "Salmo 119:105",
    audio: rutaAudio(1),
    secciones: [
      {
        titulo: "Introducción",
        parrafos: [
          "Cada día enfrentamos decisiones que parecen pequeñas, pero que van marcando el rumbo de nuestra vida. En medio de tantas voces, necesitamos una guía confiable.",
          "Esta semana estudiaremos cómo la Palabra de Dios funciona como una luz práctica: no siempre ilumina todo el camino de una sola vez, pero sí el siguiente paso."
        ]
      },
      {
        titulo: "Domingo: Una luz para el camino",
        parrafos: [
          "Una lámpara antigua alumbraba apenas unos metros. Quien caminaba de noche debía confiar en que, al avanzar, se mostraría el siguiente tramo.",
          "Así actúa la fe: avanza con la luz disponible. Reflexiona: ¿qué paso concreto te está pidiendo Dios hoy?"
        ]
      },
      {
        titulo: "Lunes: Escuchar con atención",
        parrafos: [
          "Leer y escuchar la Palabra requiere un corazón dispuesto. No se trata de cumplir una rutina, sino de encontrarnos con Dios.",
          "Pregúntate: ¿en qué momento del día puedo apartar unos minutos de silencio para escuchar?"
        ]
      },
      {
        titulo: "Para compartir",
        parrafos: [
          "Comparte con tu clase una experiencia en la que una promesa bíblica te dio dirección o consuelo. Anota una acción concreta para esta semana."
        ]
      }
    ]
  },
  {
    numero: 2,
    titulo: "Confiar en tiempos difíciles",
    versiculo: "Echa sobre Jehová tu carga, y él te sustentará.",
    referencia: "Salmo 55:22",
    audio: rutaAudio(2),
    secciones: [
      {
        titulo: "Introducción",
        parrafos: [
          "Todos atravesamos temporadas de incertidumbre. La pregunta no es si llegarán, sino cómo las enfrentaremos.",
          "Esta lección explora cómo entregar nuestras cargas a Dios y encontrar descanso en medio de la prueba."
        ]
      },
      {
        titulo: "Domingo: Nombrar la carga",
        parrafos: [
          "Antes de entregar una carga, debemos reconocerla. Los salmistas no ocultaban su angustia: la expresaban con honestidad ante Dios.",
          "Reflexiona: ¿qué preocupación necesitas poner hoy en oración con total sinceridad?"
        ]
      },
      {
        titulo: "Lunes: Descansar en su cuidado",
        parrafos: [
          "Confiar no significa que los problemas desaparezcan, sino que ya no los llevamos solos.",
          "Recuerda alguna ocasión en la que Dios te sostuvo. Ese recuerdo puede fortalecer tu confianza actual."
        ]
      },
      {
        titulo: "Para compartir",
        parrafos: [
          "Busca a alguien de tu congregación que esté pasando un momento difícil y ofrécele compañía o una oración."
        ]
      }
    ]
  },
  {
    numero: 3,
    titulo: "Servir con alegría",
    versiculo: "Servid a Jehová con alegría; venid ante su presencia con regocijo.",
    referencia: "Salmo 100:2",
    audio: rutaAudio(3),
    secciones: [
      {
        titulo: "Introducción",
        parrafos: [
          "El servicio cristiano nace de la gratitud, no de la obligación. Cuando comprendemos cuánto hemos recibido, servir se convierte en una respuesta natural.",
          "Esta semana reflexionaremos sobre cómo servir a los demás refleja el carácter de Jesús."
        ]
      },
      {
        titulo: "Domingo: El ejemplo de Jesús",
        parrafos: [
          "Jesús lavó los pies de sus discípulos y mostró que la verdadera grandeza se expresa en humildad.",
          "Reflexiona: ¿a quién puedes servir hoy de manera sencilla y concreta?"
        ]
      },
      {
        titulo: "Lunes: Dones al servicio de otros",
        parrafos: [
          "Cada persona tiene capacidades únicas. Ninguna es pequeña cuando se pone al servicio de los demás.",
          "Identifica un don que tengas y piensa cómo usarlo esta semana."
        ]
      },
      {
        titulo: "Para compartir",
        parrafos: [
          "Propón en tu clase un proyecto de servicio sencillo para la comunidad y decidan juntos quién hará cada tarea."
        ]
      }
    ]
  }
];

/* Lecciones 4 a 13: estructura lista, con contenido pendiente.
   Para completarlas, reemplaza cada entrada por una como las anteriores. */
for (var n = 4; n <= 13; n++) {
  window.LECCIONES.push({
    numero: n,
    titulo: "Título de la lección " + n,
    versiculo: "Escribe aquí el versículo para memorizar.",
    referencia: "Libro capítulo:versículo",
    audio: rutaAudio(n),
    secciones: [
      {
        titulo: "Introducción",
        parrafos: ["El texto de esta lección se agregará próximamente."]
      }
    ]
  });
}
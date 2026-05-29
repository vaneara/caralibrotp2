import avatarvane from "../assets/img/avatarvane.jpg";
import matrix from "../assets/img/matrix.png";
import el_senor_de_los_anillos from "../assets/img/lotr.png";
import super8 from "../assets/img/super8.png";
import doceanios from "../assets/img/doceaniosdeesclavitud.jpeg";
import la_ladrona_de_libros from "../assets/img/la_ladrona_de_libros.jpeg";
import seven from "../assets/img/seven.jpeg";
import tomi from "../assets/img/tomi.png";
import ferAvatar from "../assets/img/fer_avatar.jpg";

export const miembros = [
  {
    nombre: "Vane Aracena",
    rol: "Developer",
    slug: "vane-ara",
    imagen: avatarvane,

    perfilCompleto: {
      bio: "Tu mente sueña, tus manos crean.",
      info: {
        relacion: "Soltera",
        cumpleaños: "9 de Mayo",
        ciudad: "San Juan, Argentina",
        edad: 40
      },

      habilidades: [
        { nombre: 'HTML  ', nivel: 75 },
        { nombre: 'CSS  ', nivel: 80 },
        { nombre: 'JavaScript  ', nivel: 70 },
        { nombre: 'React  ', nivel: 80 },
        { nombre: 'Git  ', nivel: 80 },
      ],

      peliculas: [
        {
          titulo: "12 Años de esclavitud (2013)",
          genero: "Drama / Biográfico",
          img: doceanios
        },
        {
          titulo: "Seven (1995)",
          genero: "Thriller / Crimen",
          img: seven
        },
        {
          titulo: "La ladrona de libros (2013)",
          genero: "Drama / Bélico",
          img: la_ladrona_de_libros
        }
      ],

      musica: [
        "Silvestre y la Naranja",
        "Dread Mar I",
        "No Te Va Gustar",
        "IKV",
        "El Plan de la Mariposa",
      ],

      amigos: 325,
      extra: {
        frase: "La creatividad es la inteligencia divirtiéndose",
        intereses: ["Cerámica artesanal", "Naturaleza", "Fotografía", "Cocina saludable"],
        cita: "No hay arte sin corazón"
      }
    }
  },

  {
    nombre: "Tomi M.",
    rol: "Frontend Dev",
    slug: "tomi-m",
    imagen: tomi,
    perfilCompleto: {
      bio: "A veces invento cosas, otras veces las rompo... pero siempre aprendo algo nuevo.",
      info: {
        ciudad: "San Luis, Argentina",
        edad: 27,
        relacion: "Soltero",
        cumpleaños: "29 de Enero"
      },

      habilidades: [
        { nombre: 'HTML  ', nivel: 95 },
        { nombre: 'CSS  ', nivel: 85 },
        { nombre: 'JavaScript  ', nivel: 90 },
        { nombre: 'React  ', nivel: 90 },
        { nombre: 'Git  ', nivel: 75 },
      ],


      peliculas: [
        {
          titulo: "Super 8 (2011)",
          genero: "Ciencia Ficción / Drama",
          img: super8
        },
        {
          titulo: "Matrix (1999)",
          genero: "Acción / Ciencia Ficción",
          img: matrix
        },
        {
          titulo: "El Señor de los Anillos: Las Dos Torres (2002)",
          genero: "Aventura / Fantasía",
          img: el_senor_de_los_anillos
        }
      ],

      musica: [
        "Limp Bizkit",
        "Arctic Monkeys",
        "Bring Me The Horizon",
        "MF DOOM"
      ],

      amigos: 14,
      extra: {
        frase: "Primero resuelve el problema, después escribí el código",
        intereses: ["Café de especialidad", "Vinilos", "Cine de culto", "Skate"],
        cita: "Talk is cheap. Show me the code. — Linus Torvalds"
      }
    }
  },

  {
    nombre: "Fernando Rodriguez",
    rol: "Backend Developer",
    slug: "fernando-rodriguez",
    imagen: ferAvatar,
    perfilCompleto: {
      bio: "Backend & APIs",
      info: {
        relacion: "Casado",
        cumpleaños: "9 de Diciembre",
        ciudad: "Mendoza, Argentina",
        edad: 40
      },

      habilidades: [
        { nombre: 'HTML  ', nivel: 75 },
        { nombre: 'CSS  ', nivel: 80 },
        { nombre: 'JavaScript  ', nivel: 70 },
        { nombre: 'React  ', nivel: 80 },
        { nombre: 'Git  ', nivel: 80 },
      ],

      peliculas: [],
      musica: ["AC/DC", "Linkin Park", "Limp Bizkit"],
      amigos: 87,
      extra: {
        frase: "Bienaventurados los de limpio corazón, porque ellos verán a Dios.",
        intereses: ["Leer", "Fútbol", "Computadoras", "Series", "Peliculas"],
        cita: "70 veces 7"
      }
    }
  }
];
import avatarvane from "../assets/img/avatarvane.jpg";
import doceanios from "../assets/img/doceaniosdeesclavitud.jpeg";
import la_ladrona_de_libros from "../assets/img/la_ladrona_de_libros.jpeg";
import seven from "../assets/img/seven.jpeg";
import tomi from "../assets/img/tomi.png";
import ferAvatar from "../assets/img/fer_avatar.jpg";

export const miembros = [
  {
    nombre: "Vane Ara",
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
        "Frontend Development",
        "HTML & CSS",
        "Cerámica",
        "Modelado de piezas"
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
        "Dread Mar I",
        "No Te Va Gustar",
        "IKV",
        "El Plan de la Mariposa"
      ],

      amigos: 325
    }
  },

  {
    nombre: "Tomi M.",
    rol: "Frontend Dev",
    slug: "tomi-m",
    imagen: tomi,
    perfilCompleto: {
      bio: "Frontend lover",
      info: {
        ciudad: "Buenos Aires"
      }
    }
  },

  {
    nombre: "Fernando Rodriguez",
    rol: "Backend Developer",
    slug: "fernando-rodriguez",
    imagen: ferAvatar,
    perfilCompleto: {
      bio: "Backend & APIs"
    }
  }
];
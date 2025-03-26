import type { EventCategory, Event } from "@/models/event";

const myEvents: Event[] = [
  {
    id: "1",
    title: "Fiesta de Año Nuevo",
    description: "Celebración con fuegos artificiales",
    image: "https://example.com/newyear.jpg",
    category: "Ocio",
    date: "Lunes, 31 dic",
    time: "11:59 PM",
    location: "San José, Costa Rica",
    availableSpots: 50,
  },
  {
    id: "2",
    title: "Conferencia Tech",
    description: "Evento sobre IA y blockchain",
    image: "https://example.com/tech.jpg",
    category: "Tecnología",
    date: "Viernes, 15 mar",
    time: "09:00 AM",
    location: "Liberia, Guanacaste",
    availableSpots: 200,
  },
  {
    id: "3",
    title: "Feria Gastronómica",
    description: "Exposición de comida local e internacional",
    image: "https://example.com/food.jpg",
    category: "Gastronomía",
    date: "Sábado, 10 abr",
    time: "12:00 PM",
    location: "Alajuela, Costa Rica",
    availableSpots: 100,
  },
  {
    id: "4",
    title: "Maratón Solidario",
    description: "Corre por una causa",
    image: "https://example.com/marathon.jpg",
    category: "Deportes",
    date: "Domingo, 20 may",
    time: "06:00 AM",
    location: "Heredia, Costa Rica",
    availableSpots: 500,
  },
  {
    id: "5",
    title: "Exposición de Arte",
    description: "Obras de artistas locales",
    image: "https://example.com/art.jpg",
    category: "Cultura",
    date: "Miércoles, 2 jun",
    time: "04:00 PM",
    location: "Cartago, Costa Rica",
    availableSpots: 30,
  },
  {
    id: "6",
    title: "Torneo de Ajedrez",
    description: "Competencia para principiantes y expertos",
    image: "https://example.com/chess.jpg",
    category: "Juegos",
    date: "Sábado, 18 jul",
    time: "10:00 AM",
    location: "Puntarenas, Costa Rica",
    availableSpots: 40,
  },
  {
    id: "7",
    title: "Taller de Fotografía",
    description: "Aprende a capturar momentos únicos",
    image: "https://example.com/photo.jpg",
    category: "Educación",
    date: "Martes, 5 ago",
    time: "03:00 PM",
    location: "Guanacaste, Costa Rica",
    availableSpots: 20,
  },
  {
    id: "8",
    title: "Carrera de Drones",
    description: "Competencia de pilotos de drones",
    image: "https://example.com/drones.jpg",
    category: "Tecnología",
    date: "Domingo, 9 sep",
    time: "02:00 PM",
    location: "San Carlos, Costa Rica",
    availableSpots: 60,
  },
  {
    id: "9",
    title: "Noche de Cine al Aire Libre",
    description: "Proyección de películas clásicas",
    image: "https://example.com/cinema.jpg",
    category: "Entretenimiento",
    date: "Viernes, 14 oct",
    time: "07:00 PM",
    location: "San José, Costa Rica",
    availableSpots: 80,
  },
  {
    id: "10",
    title: "Festival de Música",
    description: "Bandas nacionales e internacionales",
    image: "https://example.com/music.jpg",
    category: "Música",
    date: "Sábado, 22 nov",
    time: "05:00 PM",
    location: "Cartago, Costa Rica",
    availableSpots: 300,
  },
  {
    id: "11",
    title: "Curso de Programación",
    description: "Aprende React Native desde cero",
    image: "https://example.com/coding.jpg",
    category: "Educación",
    date: "Lunes, 3 dic",
    time: "06:00 PM",
    location: "Online",
    availableSpots: 100,
  },
  {
    id: "12",
    title: "Exhibición de Autos Clásicos",
    description: "Vehículos icónicos de todos los tiempos",
    image: "https://example.com/cars.jpg",
    category: "Exhibición",
    date: "Domingo, 7 ene",
    time: "09:00 AM",
    location: "Heredia, Costa Rica",
    availableSpots: 120,
  },
  {
    id: "13",
    title: "Concierto de Rock",
    description: "Bandas locales e internacionales",
    image: "https://example.com/rock.jpg",
    category: "Música",
    date: "Viernes, 12 feb",
    time: "08:00 PM",
    location: "San José, Costa Rica",
    availableSpots: 400,
  },
  {
    id: "14",
    title: "Curso de Idiomas",
    description: "Aprende inglés en 3 meses",
    image: "https://example.com/languages.jpg",
    category: "Educación",
    date: "Lunes, 8 mar",
    time: "10:00 AM",
    location: "Online",
    availableSpots: 50,
  },
  {
    id: "15",
    title: "Competencia de Skate",
    description: "Demuestra tus mejores trucos",
    image: "https://example.com/skate.jpg",
    category: "Deportes",
    date: "Sábado, 24 abr",
    time: "03:00 PM",
    location: "Alajuela, Costa Rica",
    availableSpots: 70,
  },
  {
    id: "16",
    title: "Festival de Teatro",
    description: "Obras de dramaturgos nacionales",
    image: "https://example.com/theater.jpg",
    category: "Cultura",
    date: "Jueves, 10 may",
    time: "07:00 PM",
    location: "Cartago, Costa Rica",
    availableSpots: 60,
  },
  {
    id: "17",
    title: "Torneo de Videojuegos",
    description: "Compite en juegos de última generación",
    image: "https://example.com/gaming.jpg",
    category: "Juegos",
    date: "Domingo, 30 jun",
    time: "01:00 PM",
    location: "San José, Costa Rica",
    availableSpots: 200,
  },
  {
    id: "18",
    title: "Día de la Bicicleta",
    description: "Recorrido en bicicleta por la ciudad",
    image: "https://example.com/bike.jpg",
    category: "Deportes",
    date: "Sábado, 20 jul",
    time: "07:00 AM",
    location: "Puntarenas, Costa Rica",
    availableSpots: 150,
  },
  {
    id: "19",
    title: "Taller de Escritura Creativa",
    description: "Aprende a escribir cuentos y novelas",
    image: "https://example.com/writing.jpg",
    category: "Educación",
    date: "Martes, 5 ago",
    time: "05:00 PM",
    location: "Online",
    availableSpots: 30,
  },
  {
    id: "20",
    title: "Festival de Jazz",
    description: "Músicos internacionales en vivo",
    image: "https://example.com/jazz.jpg",
    category: "Música",
    date: "Viernes, 15 sep",
    time: "08:00 PM",
    location: "San José, Costa Rica",
    availableSpots: 250,
  }
];

export default myEvents;

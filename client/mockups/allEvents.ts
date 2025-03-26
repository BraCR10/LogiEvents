import type { EventCategory, Event } from "@/models/event";

const allEvents: Event[] = [
  {
    id: "1",
    title: "Fiesta",
    description: "Gran fiesta en la playa con musica en vivo y juegos",
    image: "https://example.com/party.jpg",
    category: "Ocio",
    date: "Domingo, 23 feb",
    time: "08:00 AM",
    location: "Liberia, Guanacaste",
    availableSpots: 4
  },
  {
    id: "2",
    title: "Concierto Rock",
    description: "Los mejores grupos de rock nacional e internacional",
    image: "https://example.com/concert.jpg",
    category: "Música",
    date: "Sabado, 15 mar",
    time: "19:30 PM",
    location: "San Jose, Estadio Nacional",
    availableSpots: 120
  },
  {
    id: "3",
    title: "Exposicion de Arte",
    description: "Obras de artistas contemporaneos de todo el mundo",
    image: "https://example.com/art.jpg",
    category: "Exhibición",
    date: "Viernes, 10 abr",
    time: "10:00 AM",
    location: "Museo Nacional, San Jose",
    availableSpots: 50
  },
  {
    id: "4",
    title: "Maraton Ciudad",
    description: "Carrera anual de 10k y media maraton",
    image: "https://example.com/marathon.jpg",
    category: "Deportes",
    date: "Domingo, 05 may",
    time: "06:00 AM",
    location: "Parque Metropolitano, San Jose",
    availableSpots: 200
  },
  {
    id: "5",
    title: "Conferencia Tech",
    description: "Ultimas tendencias en desarrollo de software",
    image: "https://example.com/tech.jpg",
    category: "Tecnología",
    date: "Jueves, 18 jun",
    time: "14:00 PM",
    location: "Centro de Convenciones, Heredia",
    availableSpots: 15
  },
  {
    id: "6",
    title: "Taller de Cocina",
    description: "Aprende a cocinar platos internacionales",
    image: "https://example.com/cooking.jpg",
    category: "Gastronomía",
    date: "Miercoles, 20 jul",
    time: "17:00 PM",
    location: "Centro Gastronómico, Escazu",
    availableSpots: 8
  },
  {
    id: "7",
    title: "Festival de Cine",
    description: "Proyecciones de peliculas independientes",
    image: "https://example.com/cinema.jpg",
    category: "Entretenimiento",
    date: "Lunes, 12 ago",
    time: "19:00 PM",
    location: "Cine Magaly, San Jose",
    availableSpots: 30
  },
  {
    id: "8",
    title: "Torneo de Futbol",
    description: "Competencia entre equipos locales",
    image: "https://example.com/soccer.jpg",
    category: "Deportes",
    date: "Sábado, 21 mar",
    time: "09:00 AM",
    location: "Estadio Saprissa, San Jose",
    availableSpots: 16
  },
  {
    id: "9",
    title: "Exposición de Tecnología",
    description: "Avances más recientes en gadgets y software",
    image: "https://example.com/techshow.jpg",
    category: "Tecnología",
    date: "Miércoles, 25 jun",
    time: "10:00 AM",
    location: "Centro de Exposiciones, San Jose",
    availableSpots: 100
  },
  {
    id: "10",
    title: "Curso de Programación",
    description: "Aprende a programar en Python desde cero",
    image: "https://example.com/python.jpg",
    category: "Educación",
    date: "Lunes, 30 mar",
    time: "09:00 AM",
    location: "Universidad Tecnológica, San Jose",
    availableSpots: 25
  },
  {
    id: "11",
    title: "Conferencia de Marketing Digital",
    description: "Tendencias de marketing en la era digital",
    image: "https://example.com/marketing.jpg",
    category: "Tecnología",
    date: "Viernes, 10 may",
    time: "13:00 PM",
    location: "Auditorio Nacional, San Jose",
    availableSpots: 30
  },
  {
    id: "12",
    title: "Festival Gastronómico",
    description: "Comida internacional en un solo lugar",
    image: "https://example.com/foodfest.jpg",
    category: "Gastronomía",
    date: "Sábado, 25 jun",
    time: "11:00 AM",
    location: "Parque La Sabana, San Jose",
    availableSpots: 50
  },
  {
    id: "13",
    title: "Feria de Ciencia y Tecnología",
    description: "Demostraciones de proyectos científicos innovadores",
    image: "https://example.com/sciencefair.jpg",
    category: "Exhibición",
    date: "Jueves, 05 abr",
    time: "09:00 AM",
    location: "Museo de los Niños, San Jose",
    availableSpots: 20
  },
  {
    id: "14",
    title: "Torneo de Ajedrez",
    description: "Competencia de ajedrez entre escuelas",
    image: "https://example.com/chess.jpg",
    category: "Juegos",
    date: "Domingo, 22 may",
    time: "10:00 AM",
    location: "Teatro Melico Salazar, San Jose",
    availableSpots: 50
  },
  {
    id: "15",
    title: "Curso de Fotografía",
    description: "Aprende fotografía profesional desde cero",
    image: "https://example.com/photo.jpg",
    category: "Educación",
    date: "Martes, 01 jul",
    time: "18:00 PM",
    location: "Centro Cultural, San Jose",
    availableSpots: 25
  },
  {
    id: "16",
    title: "Encuentro Cultural",
    description: "Rituales, danza y comida típica de Costa Rica",
    image: "https://example.com/culture.jpg",
    category: "Cultura",
    date: "Viernes, 17 abr",
    time: "19:00 PM",
    location: "Teatro Nacional, San Jose",
    availableSpots: 80
  },
  {
    id: "17",
    title: "Conferencia de Blockchain",
    description: "Todo sobre el futuro de la tecnología blockchain",
    image: "https://example.com/blockchain.jpg",
    category: "Tecnología",
    date: "Martes, 28 may",
    time: "10:00 AM",
    location: "Centro de Convenciones, San Jose",
    availableSpots: 50
  },
  {
    id: "18",
    title: "Fiesta de Año Nuevo",
    description: "Celebra el inicio del 2024 con amigos y familia",
    image: "https://example.com/newyear.jpg",
    category: "Ocio",
    date: "Martes, 31 dic",
    time: "10:00 PM",
    location: "Plaza de la Democracia, San Jose",
    availableSpots: 500
  },
  {
    id: "19",
    title: "Festival de Jazz",
    description: "Los mejores músicos de jazz del mundo",
    image: "https://example.com/jazz.jpg",
    category: "Música",
    date: "Sábado, 22 jun",
    time: "17:00 PM",
    location: "Teatro Nacional, San Jose",
    availableSpots: 60
  },
  {
    id: "20",
    title: "Ruta de Senderismo",
    description: "Explora los paisajes naturales de Costa Rica",
    image: "https://example.com/hiking.jpg",
    category: "Deportes",
    date: "Domingo, 12 may",
    time: "07:00 AM",
    location: "Volcán Arenal, Guanacaste",
    availableSpots: 30
  },
  {
    id: "21",
    title: "Evento de Yoga",
    description: "Sesiones de yoga para todos los niveles",
    image: "https://example.com/yoga.jpg",
    category: "Deportes",
    date: "Sábado, 19 abr",
    time: "08:00 AM",
    location: "Parque La Sabana, San Jose",
    availableSpots: 40
  },
  {
    id: "22",
    title: "Clases de Salsa",
    description: "Aprende a bailar salsa con los mejores instructores",
    image: "https://example.com/salsa.jpg",
    category: "Ocio",
    date: "Lunes, 22 abr",
    time: "19:00 PM",
    location: "Teatro Melico Salazar, San Jose",
    availableSpots: 25
  },
  {
    id: "23",
    title: "Feria de Emprendedores",
    description: "Exposición de productos locales e innovadores",
    image: "https://example.com/fair.jpg",
    category: "Exhibición",
    date: "Domingo, 07 abr",
    time: "10:00 AM",
    location: "Parque La Sabana, San Jose",
    availableSpots: 100
  },
  {
    id: "24",
    title: "Torneo de Basketball",
    description: "Competencia de basketball entre equipos locales",
    image: "https://example.com/basketball.jpg",
    category: "Deportes",
    date: "Sábado, 05 abr",
    time: "14:00 PM",
    location: "Polideportivo, San Jose",
    availableSpots: 16
  },
  {
    id: "25",
    title: "Conferencia de Inteligencia Artificial",
    description: "El futuro de la inteligencia artificial y sus aplicaciones",
    image: "https://example.com/ai.jpg",
    category: "Tecnología",
    date: "Jueves, 13 jun",
    time: "10:00 AM",
    location: "Centro Cultural, Heredia",
    availableSpots: 30
  }
];

export default allEvents;

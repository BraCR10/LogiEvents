export type EventCategory = 'Ocio' | 'Cultura' | 'Deportes' | 'Tecnología' | 'Mis eventos';

export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: EventCategory;
};
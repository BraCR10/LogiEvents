import api from './api';
import type { Event, EventCategory } from '@/models/event';
import myEvents from '@/mockups/adminEvents'; // Reusing admin events mockup

const USE_MOCK = true;

const myEventsService = {
  /**
   * Get all events created by current user
   */
  getMyEvents: async (): Promise<Event[]> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      return Promise.resolve(myEvents);
    }
    
    const response = await api.get('/events/myevents');
    return response.data;
  },

  /**
   * Get specific event created by user
   */
  getEventById: async (id: string): Promise<Event | null> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      const event = myEvents.find(event => event.id === id);
      return Promise.resolve(event || null);
    }
    
    const response = await api.get(`/events/myevents/${id}`);
    return response.data;
  },

  /**
   * Create a new event
   */
  createEvent: async (eventData: Omit<Event, 'id'>): Promise<Event> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      const newEvent: Event = {
        id: `my-event-${Date.now()}`,
        ...eventData
      };
      return Promise.resolve(newEvent);
    }
    const response = await api.post('/events/myevents', eventData);
    return response.data;
  },

  /**
   * Update existing event
   */
  updateEvent: async (id: string, eventData: Partial<Event>): Promise<Event> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      const eventIndex = myEvents.findIndex(event => event.id === id);
      if (eventIndex === -1) {
        throw new Error('Event not found');
      }
      
      const updatedEvent: Event = {
        ...myEvents[eventIndex],
        ...eventData
      };
      
      return Promise.resolve(updatedEvent);
    }
    
    const response = await api.put(`/events/myevents/${id}`, eventData);
    return response.data;
  },

  /**
   * Delete an event
   */
  deleteEvent: async (id: string): Promise<boolean> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      return Promise.resolve(true);
    }
    
    await api.delete(`/events/myevents/${id}`);
    return true;
  },

  /**
   * Search events by text
   */
  searchEvents: async (query: string): Promise<Event[]> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      return Promise.resolve(
        myEvents.filter(event => 
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    const response = await api.get(`/events/myevents/search?q=${query}`);
    return response.data;
  },

  /**
   * Get events by category
   */
  getEventsByCategory: async (category: EventCategory): Promise<Event[]> => {
    if (USE_MOCK) {
      // TODO: Replace with actual API call when backend is ready
      return Promise.resolve(
        myEvents.filter(event => event.category === category)
      );
    }
    
    const response = await api.get(`/events/myevents?category=${category}`);
    return response.data;
  },
};

export default myEventsService;
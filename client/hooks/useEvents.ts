import { useState, useEffect, useCallback } from 'react';
import eventsService from '@/services/eventServices';
import type { Event, EventCategory } from '@/models/event';

/**
 * Hook to manage events state and actions
 * @param initialCategory Initial category to filter events
 */
export function useEvents(initialCategory?: EventCategory) {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | undefined>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadUserEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await eventsService.getAllEvents();
      setEvents(data);
      
      if (selectedCategory) {
        setFilteredEvents(data.filter((event) => event.category === selectedCategory));
      } else {
        setFilteredEvents(data);
      }
    } catch (err) {
      setError('Error al cargar eventos');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  const loadAdminEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await eventsService.getUserEvents();
      setEvents(data);
      setFilteredEvents(data);
    } catch (err) {
      setError('Error al cargar tus eventos');
      console.error('Error loading user events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const changeCategory = useCallback((category: EventCategory) => {
    setSelectedCategory(category);
    setFilteredEvents(events.filter(event => event.category === category));
  }, [events]);

  const searchEvents = useCallback((query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      if (selectedCategory) {
        setFilteredEvents(events.filter(event => event.category === selectedCategory));
      } else {
        setFilteredEvents(events);
      }
      return;
    }
    
    const filtered = events.filter(event => {
      const matchesQuery = 
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase());
        
      if (selectedCategory) {
        return matchesQuery && event.category === selectedCategory;
      }
      
      return matchesQuery;
    });

    setFilteredEvents(filtered);
  }, [events, selectedCategory]);

  const createEvent = useCallback(async (eventData: Omit<Event, 'id'>) => {
    setLoading(true);
    setError(null);
    
    try {
      const newEvent = await eventsService.createEvent(eventData);
      setEvents(prev => [...prev, newEvent]);
      if (!selectedCategory || newEvent.category === selectedCategory) {
        setFilteredEvents(prev => [...prev, newEvent]);
      }
      return newEvent;
    } catch (err) {
      setError('Error al crear evento');
      console.error('Error creating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [events, selectedCategory]);

  const updateEvent = useCallback(async (id: string, eventData: Partial<Event>) => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedEvent = await eventsService.updateEvent(id, eventData);
      
      setEvents(prev => 
        prev.map(event => event.id === id ? updatedEvent : event)
      );
      
      setFilteredEvents(prev => 
        prev.map(event => event.id === id ? updatedEvent : event)
      );
      
      return updatedEvent;
    } catch (err) {
      setError('Error al actualizar evento');
      console.error('Error updating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEvent = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      await eventsService.deleteEvent(id);
      
      setEvents(prev => prev.filter(event => event.id !== id));
      setFilteredEvents(prev => prev.filter(event => event.id !== id));
      
      return true;
    } catch (err) {
      setError('Error al eliminar evento');
      console.error('Error deleting event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Obtener categorías únicas
  const getCategories = useCallback(() => {
    const list = events.map(event => event.category);
    return Array.from(new Set(list));
  }, [events]);

  useEffect(() => {
    loadUserEvents();
  }, [loadUserEvents]);

  return {
    events,
    filteredEvents,
    loading,
    error,
    selectedCategory,
    searchQuery,
    changeCategory,
    searchEvents,
    loadUserEvents,
    loadAdminEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getCategories,
    setSearchQuery
  };
}
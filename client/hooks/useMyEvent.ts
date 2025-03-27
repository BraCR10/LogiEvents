import { useState, useEffect, useCallback } from 'react';
import myEventsService from '@/services/myEventsServices';
import type { Event } from '@/models/event';

/**
 * Custom hook to manage events created by the user
 */
export function useMyEvents() {
  const [myEvents, setMyEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadMyEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with actual API call when backend is ready
      const data = await myEventsService.getMyEvents();
      setMyEvents(data);
      setFilteredEvents(data);
    } catch (err) {
      setError('Error loading your events');
      console.error('Error loading user events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchEvents = useCallback((query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredEvents(myEvents);
      return;
    }
    
    const filtered = myEvents.filter(event => {
      return event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase()) ||
        (event.location && event.location.toLowerCase().includes(query.toLowerCase()));
    });

    setFilteredEvents(filtered);
  }, [myEvents]);

  const createEvent = useCallback(async (eventData: Omit<Event, 'id'>) => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with actual API call when backend is ready
      const newEvent = await myEventsService.createEvent(eventData);
      setMyEvents(prev => [...prev, newEvent]);
      setFilteredEvents(prev => [...prev, newEvent]);
      return newEvent;
    } catch (err) {
      setError('Error creating event');
      console.error('Error creating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEvent = useCallback(async (id: string, eventData: Partial<Event>) => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with actual API call when backend is ready
      const updatedEvent = await myEventsService.updateEvent(id, eventData);
      
      setMyEvents(prev => 
        prev.map(event => event.id === id ? updatedEvent : event)
      );
      
      setFilteredEvents(prev => 
        prev.map(event => event.id === id ? updatedEvent : event)
      );
      
      return updatedEvent;
    } catch (err) {
      setError('Error updating event');
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
      // TODO: Replace with actual API call when backend is ready
      await myEventsService.deleteEvent(id);
      
      setMyEvents(prev => prev.filter(event => event.id !== id));
      setFilteredEvents(prev => prev.filter(event => event.id !== id));
      
      return true;
    } catch (err) {
      setError('Error deleting event');
      console.error('Error deleting event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    myEvents,
    filteredEvents,
    loading,
    error,
    searchQuery,
    searchEvents,
    loadMyEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    setSearchQuery
  };
}
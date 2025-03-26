import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  SafeAreaView,  
  Text, 
  TouchableOpacity, 
} from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import EventCategoryTabs from '../../components/EventCategoryTabs';
import SearchBar from '../../components/SearchBar';
import { EventCategory,Event } from '../../models/event';
import { userRole } from '../../models/user';

const allEvents: Event[] = [
  { 
    id: '1', 
    title: 'Fiesta de Verano', 
    description: 'Gran fiesta en la playa con música en vivo y juegos', 
    image: 'https://example.com/party.jpg',
    category: 'Ocio'
  },
  { 
    id: '2', 
    title: 'Concierto Rock', 
    description: 'Los mejores grupos de rock nacional e internacional', 
    image: 'https://example.com/concert.jpg',
    category: 'Ocio'
  },
  { 
    id: '3', 
    title: 'Exposición de Arte Moderno', 
    description: 'Obras de artistas contemporáneos de todo el mundo', 
    image: 'https://example.com/art.jpg',
    category: 'Cultura'
  },
  { 
    id: '4', 
    title: 'Maratón Ciudad', 
    description: 'Carrera anual de 10k y media maratón', 
    image: 'https://example.com/marathon.jpg',
    category: 'Deportes'
  },
  { 
    id: '5', 
    title: 'Conferencia Tech', 
    description: 'Últimas tendencias en desarrollo de software', 
    image: 'https://example.com/tech.jpg',
    category: 'Tecnología'
  },
];

function HomeScreen() {
  const [userRole] = useState<userRole>('user');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('Ocio');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories: EventCategory[] = Array.from(
    new Set(allEvents.map(event => event.category))
  );

  const filteredEvents = allEvents.filter(event => { 
    return (
      event.category === selectedCategory &&
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       event.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  if (userRole === 'admin') {
    return (
      <SafeAreaView style={styles.container}>
        <ProfileCard name="Natalia Alvarez" role="Administrador" profileStyles={profileStyles} />
        <View style={styles.adminActions}>
          <TouchableOpacity style={styles.adminButton}>
            <Text style={styles.adminButtonText}>Crear evento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adminButton}>
            <Text style={styles.adminButtonText}>Ver estadísticas</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ProfileCard name="Natalia Alvarez" role="Usuario" profileStyles={profileStyles} />
        <View style={styles.searchWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder={`Buscar en ${selectedCategory}`}
            searchStyles={searchStyles}
          />
        </View>
      </View>

      <View style={styles.tabsWrapper}>
        <EventCategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  searchWrapper: {
    marginLeft: 'auto', 
  },
  tabsWrapper: {
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
  },
  adminActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  adminButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 0.48,
  },
  adminButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});


const profileStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'flex-end'
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6c757d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 20,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  initials: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },
  role: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6c757d',
  },
});

const searchStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingRight: 100,  
    paddingLeft:20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    maxWidth: 800, 
    marginRight:50,
    marginLeft:50,
    position: 'relative',
    flexDirection: 'row',  
    alignItems: 'center',
  },
  input: {
    height: 36,
    fontSize: 14,
    color: '#212529',
    flex: 1,  
    marginLeft: 10, 
    borderColor: '#212529' ,  
  },
  iconContainer: {
    paddingRight: 12, 
  },
});

export default HomeScreen;

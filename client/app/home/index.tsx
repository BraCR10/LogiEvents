import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  useWindowDimensions, 
  ActivityIndicator,
  FlatList,
  Platform
} from "react-native";
import { RelativePathString, useRouter } from "expo-router";
import ProfileCard from "@/components/ProfileCard";
import EventCategoryTabs from "@/components/EventCategoryTabs";
import SearchBar from "@/components/SearchBar";
import EventCard from "@/components/EventCard";
import ScrollbarStyles from "@/components/ScrollbarStyles";
import type { EventCategory, Event } from "@/models/event";
import type { userRole } from "@/models/user";
import { useEvents } from "@/hooks/useEvents"; 
import { useUser } from "@/hooks/useUser";

function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { user } = useUser();
  
  const [userRole, setUserRole] = useState<userRole>("user");
  const [isMobile, setIsMobile] = useState(false);
  const [numColumns, setNumColumns] = useState(2);
  const [categories, setCategories] = useState<EventCategory[]>([]);
  
  const {
    filteredEvents,
    loading,
    error,
    selectedCategory,
    searchQuery,
    changeCategory,
    searchEvents,
    loadUserEvents,
    loadAvailableEvents,
    getCategories,
    setSearchQuery
  } = useEvents("Ocio");

  // Responsive layout setup
  useEffect(() => {
    const isMobileView = width < 768;
    setIsMobile(isMobileView);
    
    if (width > 1400) setNumColumns(8);
    else if (width > 1100) setNumColumns(6);
    else if (width > 850) setNumColumns(4);
    else setNumColumns(2);
  }, [width]);
  
  useEffect(() => {
    const isAdmin = user?.role === "admin";
    setUserRole(isAdmin ? "admin" : "user");
    
    if (isAdmin)  loadUserEvents();
    else loadAvailableEvents();
  }, [user, loadUserEvents, loadAvailableEvents]);
  
  useEffect(() => {
    try {
      const uniqueCategories = getCategories();
      setCategories(uniqueCategories as EventCategory[]);
    } catch (err) {
      console.error("Error loading categories:", err);
    }
  }, [getCategories]);

  // Event handlers
  const handleEventPress = (event: Event) => {
    router.push(`/home/events/${event.id}`);
  };

  const handleCreateEvent = () => {
    router.push("/home/events/create");
  };

  const handleViewStats = () => {
    router.push("/home/stats" as RelativePathString);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    searchEvents(text);
  };

  const handleCategoryChange = (category: EventCategory) => {
    changeCategory(category);
  };

  const handleRetry = () => {
    if (userRole === "admin") loadUserEvents();
    else loadAvailableEvents();
  };

  // Render events in grid
  const renderEventItem = ({ item }: { item: Event }) => (
    <View 
      style={{
        width: `${100 / numColumns}%`,
        padding: 1,
      }}
    >
      <EventCard 
        event={item} 
        onPress={() => handleEventPress(item)}
        compact={numColumns === 2 && Platform.OS !== 'web'}
      />
    </View>
  );

  // Render header based on device type
  const renderHeader = () => (
    isMobile ? (
      <View>
        <View style={styles.header}>
          <ProfileCard 
            name={user ? `${user.name} ${user.lastname}`.toUpperCase() : ""}
            role={user ? user.role : ""}
            avatar={user?.profileImage}
            profileStyles={profileStyles} 
          />
        </View>
        
        <View style={styles.searchWrapperMobile}>
          <SearchBar
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="Buscar"
            searchStyles={searchStylesMobile}
          />
        </View>
      </View>
    ) : (
      <View style={styles.header}>
        <ProfileCard 
           name={user ? `${user.name} ${user.lastname}`.toUpperCase() : ""}
           role={user ? user.role : ""}
           avatar={user?.profileImage}
          profileStyles={profileStyles} 
        />
        <View style={styles.searchWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="Buscar"
            searchStyles={searchStyles}
          />
        </View>
      </View>
    )
  );

  // Render events list
  const renderEventsList = () => (
    <View style={styles.eventsContainer}>
      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="small" color="#D9D9D9" />
      ) : filteredEvents.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            {userRole === "admin" ? 
              "No hay eventos para mostrar" : 
              "No hay eventos en esta categoría"}
          </Text>
        </View>
      ) : (
        <View style={styles.scrollContainer}>
          <FlatList
            data={filteredEvents}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            key={numColumns.toString()}
            contentContainerStyle={styles.gridContainer}
            showsVerticalScrollIndicator={true}
            indicatorStyle="black"
            scrollIndicatorInsets={{ right: 1 }}
            removeClippedSubviews={true}
            maxToRenderPerBatch={12}
            windowSize={10}
            initialNumToRender={numColumns * 2}
            columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
          />
        </View>
      )}
    </View>
  );

  // Loading state
  if (loading && filteredEvents.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollbarStyles />
        <View style={styles.contentContainer}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#D9D9D9" />
            <Text style={styles.loadingText}>Cargando eventos...</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error && filteredEvents.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollbarStyles />
        <View style={styles.contentContainer}>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={handleRetry}
            >
              <Text style={styles.retryButtonText}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Admin view
  if (userRole === "admin") {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollbarStyles />
        <View style={styles.contentContainer}>
          {renderHeader()}

          <View style={styles.tabsWrapper}>
            <Text style={styles.categoryTitle}>Mis eventos</Text>
          </View>

          <View style={styles.adminActions}>
            <TouchableOpacity style={styles.adminButton} onPress={handleCreateEvent}>
              <Text style={styles.adminButtonText}>Crear evento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.adminButton} onPress={handleViewStats}>
              <Text style={styles.adminButtonText}>Ver estadísticas</Text>
            </TouchableOpacity>
          </View>

          {renderEventsList()}
        </View>
      </SafeAreaView>
    );
  }

  // Standard user view
  return (
    <SafeAreaView style={styles.container}>
      <ScrollbarStyles />
      <View style={styles.contentContainer}>
        {renderHeader()}

        <View style={styles.tabsWrapper}>
          <EventCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory || "Ocio"}
            onSelectCategory={handleCategoryChange}
          />
        </View>

        <View style={styles.eventsContainer}>
          <Text style={styles.categoryTitle}>{selectedCategory}</Text>
          {renderEventsList()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 8,
    width: "100%",
  },
  searchWrapper: {
    flex: 1,
    maxWidth: 500,
    marginLeft: 16,
  },
  searchWrapperMobile: {
    width: "100%",
    marginBottom: 16,
  },
  tabsWrapper: {
    marginBottom: 12,
    width: "100%",
  },
  eventsContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContainer: {
    flex: 1,
    position: 'relative',
  },
  gridContainer: {
    paddingBottom: 20,
    paddingHorizontal: 0,
    width: '100%',
  },
  columnWrapper: {
    justifyContent: "flex-start",
    marginBottom: 2,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginLeft: 4,
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#6c757d",
  },
  loadingIndicator: {
    marginVertical: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#dc3545",
    marginBottom: 20,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  retryButtonText: {
    color: "#000",
    fontWeight: "600",
  },
  emptyState: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
  },
  adminActions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 16,
    gap: 12,
    flexWrap: "wrap",
  },
  adminButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 100,
  },
  adminButtonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
});

const profileStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e9ecef",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  initials: {
    color: "#212529",
    fontSize: 18,
    fontWeight: "600",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212529",
  },
  role: {
    fontSize: 12,
    fontWeight: "400",
    color: "#6c757d",
  },
});

const searchStyles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 36,
    fontSize: 14,
    color: "#212529",
    flex: 1,
    marginLeft: 10,
  },
  iconContainer: {
    paddingRight: 12,
  },
});

const searchStylesMobile = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 36,
    fontSize: 14,
    color: "#212529",
    flex: 1,
    marginLeft: 10,
  },
  iconContainer: {
    paddingRight: 12,
  },
});

export default HomeScreen;
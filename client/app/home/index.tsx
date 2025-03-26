"use client"

import { useState } from "react"
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView } from "react-native"
import ProfileCard from "../../components/ProfileCard"
import EventCategoryTabs from "../../components/EventCategoryTabs"
import SearchBar from "../../components/SearchBar"
import EventList from "../../components/EventList"
import type { EventCategory, Event } from "../../models/event"
import type { userRole } from "../../models/user"
import React from "react"

const allEvents: Event[] = [
  {
    id: "1",
    title: "Fiesta de Verano",
    description: "Gran fiesta en la playa con música en vivo y juegos",
    image: "https://example.com/party.jpg",
    category: "Ocio",
  },
  {
    id: "2",
    title: "Concierto Rock",
    description: "Los mejores grupos de rock nacional e internacional",
    image: "https://example.com/concert.jpg",
    category: "Ocio",
  },
  {
    id: "3",
    title: "Exposición de Arte Moderno",
    description: "Obras de artistas contemporáneos de todo el mundo",
    image: "https://example.com/art.jpg",
    category: "Cultura",
  },
  {
    id: "4",
    title: "Maratón Ciudad",
    description: "Carrera anual de 10k y media maratón",
    image: "https://example.com/marathon.jpg",
    category: "Deportes",
  },
  {
    id: "5",
    title: "Conferencia Tech",
    description: "Últimas tendencias en desarrollo de software",
    image: "https://example.com/tech.jpg",
    category: "Tecnología",
  },
]

// Mock user events for admin view
const myEvents: Event[] = [
  {
    id: "1",
    title: "Fiesta",
    description: "15.000 participantes",
    image: "https://example.com/party.jpg",
    category: "Ocio",
  },
]

function HomeScreen() {
  const [userRole] = useState<userRole>("user")
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("Ocio")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const categories: EventCategory[] = Array.from(new Set(allEvents.map((event) => event.category)))

  const filteredEvents = allEvents.filter((event) => {
    return (
      event.category === selectedCategory &&
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })

  if (userRole === "admin") {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ProfileCard name="Nombre Apellido Apellido" role="2024099161" profileStyles={profileStyles} />
          <View style={styles.searchWrapper}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Buscar"
              searchStyles={searchStyles}
            />
          </View>
        </View>

        <View style={styles.tabsWrapper}>
          <EventCategoryTabs categories={["Mis eventos"]} selectedCategory="Mis eventos" onSelectCategory={() => {}} />
        </View>

        <View style={styles.adminActions}>
          <TouchableOpacity style={styles.adminButton}>
            <Text style={styles.adminButtonText}>Crear evento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adminButton}>
            <Text style={styles.adminButtonText}>Ver estadísticas</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.eventsContainer} showsVerticalScrollIndicator={false}>
          <EventList events={myEvents} />
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ProfileCard name="Nombre Apellido Apellido" role="2024099161" profileStyles={profileStyles} />
        <View style={styles.searchWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar"
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

      <ScrollView style={styles.eventsContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.categoryTitle}>{selectedCategory}</Text>
        <EventList events={filteredEvents} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  searchWrapper: {
    marginLeft: "auto",
  },
  tabsWrapper: {
    marginBottom: 12,
  },
  eventsContainer: {
    flex: 1,
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginLeft: 4,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#6c757d",
  },
  adminActions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 16,
    gap: 12,
  },
  adminButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 100,
  },
  adminButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
})

const profileStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginLeft:10
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
})

const searchStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    maxWidth: 500,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginRight:40
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
})

export default HomeScreen


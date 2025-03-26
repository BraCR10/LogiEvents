import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native"
import type { Event } from "../models/event"
import EventCard from "./EventCard"
import React from "react"

interface EventListProps {
  events: Event[]
  horizontal?: boolean
}

const EventList = ({ events, horizontal = true }: EventListProps) => {
  if (events.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>No hay eventos disponibles</Text>
      </View>
    )
  }

  if (horizontal) {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalContainer}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    )
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <EventCard event={item} />}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  )
}

const styles = StyleSheet.create({
  horizontalContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  emptyState: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#6c757d",
  },
})

export default EventList


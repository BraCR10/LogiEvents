import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import type { Event } from "../models/event"
import React from "react"

interface EventCardProps {
  event: Event
  onPress?: (event: Event) => void
}

const EventCard = ({ event, onPress }: EventCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(event)}>
      <Image
        source={{ uri: event.image }}
        style={styles.image}
        defaultSource={require("../assets/images/favicon.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.category}>{event.category}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {event.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: 150,
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "#6c757d",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#6c757d",
    lineHeight: 18,
  },
})

export default EventCard


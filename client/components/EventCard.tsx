import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Event } from "../models/event";

interface EventCardProps {
  event: Event;
  onPress?: (event: Event) => void;
}

function EventCard({ event, onPress }: EventCardProps) {
  const handlePress = () => {
    if (onPress) {
      onPress(event);
    }
  };

  const defaultImage = { uri: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png" };
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        
        {(event.date || event.time) && (
          <View style={styles.dateTimeContainer}>
            {event.date && (
              <View style={styles.dateRow}>
                <Ionicons name="calendar-outline" size={14} color="#6c757d" />
                <Text style={styles.dateText}>{event.date}</Text>
              </View>
            )}
            {event.time && (
              <View style={styles.timeRow}>
                <Ionicons name="time-outline" size={14} color="#6c757d" />
                <Text style={styles.timeText}>{event.time}</Text>
              </View>
            )}
          </View>
        )}
        
        <Image
          source={{ uri: event.image }}
          style={styles.image}
          defaultSource={defaultImage}
        />
        
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {event.title}
          </Text>
          
          {event.location && (
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={14} color="#6c757d" />
              <Text style={styles.locationText} numberOfLines={1}>
                {event.location}
              </Text>
            </View>
          )}
          
          {event.availableSpots !== undefined && (
            <Text style={styles.availableSpotsText}>
              ¡Quedan solo {event.availableSpots} espacios disponibles!
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9", 
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: 200,
    height: 300,
    marginRight: 16,
  },
  cardContent: {
    padding: 10,
    flex: 1,
  },
  dateTimeContainer: {
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#333",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 4,
  },
  timeText: {
    color: "#333",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 4,
  },
  image: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
    color: "#333",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 4,
    color: "#333",
  },
  availableSpotsText: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
    color: "#333",
  }
});

export default EventCard;
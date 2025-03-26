import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  FlatList
} from 'react-native';
import { EventCategory } from '../models/event';

interface CategoryTabsProps {
  categories: EventCategory[];
  selectedCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
}

function CategoryTabs(props: CategoryTabsProps) {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);
  //Mobile
  if (isMobile) {
    return (
      <View style={tabStyles.wrapContainer}>
        <FlatList
          data={props.categories}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={tabStyles.mobileListContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              style={[
                tabStyles.mobileTab,
                props.selectedCategory === item && tabStyles.selectedMobileTab
              ]}
              onPress={() => props.onSelectCategory(item)}
            >
              <Text 
                style={props.selectedCategory === item ? tabStyles.selectedText : tabStyles.tabText}
                numberOfLines={1}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  // Web
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={tabStyles.scrollContainer}
    >
      <View style={tabStyles.container}>
        {props.categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              tabStyles.tab,
              props.selectedCategory === category && tabStyles.selectedTab
            ]}
            onPress={() => props.onSelectCategory(category)}
          >
            <Text style={props.selectedCategory === category ? tabStyles.selectedText : tabStyles.tabText}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const tabStyles = StyleSheet.create({
  wrapContainer: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 90,
    padding: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 4,
    borderRadius: 20,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  // Estilos para móvil
  mobileListContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
  },
  mobileTab: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  selectedMobileTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedText: {
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CategoryTabs;
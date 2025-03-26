import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {EventCategory} from '../models/event';


interface CategoryTabsProps {
  categories: EventCategory[];
  selectedCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
}


function CategoryTabs(props: CategoryTabsProps) {
  return (
    <View style={tabStyles.container}>
      {props.categories.map(function(category) {
        return (
          <TouchableOpacity
            key={category}
            style={[
              tabStyles.tab,
              props.selectedCategory === category && tabStyles.selectedTab
            ]}
            onPress={function() { props.onSelectCategory(category); }}
          >
            <Text style={props.selectedCategory === category ? tabStyles.selectedText : tabStyles.tabText}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default CategoryTabs;

const tabStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 90,
    padding: 4,
    maxWidth: 600,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    textDecorationLine: 'underline',
    fontWeight: '700'
  },
  tabText: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  selectedText: {
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
  },
});
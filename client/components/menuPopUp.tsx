import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  useColorScheme 
} from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type MobileMenuPopupProps = {
  visible: boolean;
  onClose: () => void;
  isLogged: boolean;
  onEventClick: () => void;
};

export default function MenuPopup(props: MobileMenuPopupProps) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
    props.onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPressOut={props.onClose}
      >
        <TouchableOpacity 
          style={[
            styles.popupContainer, 
            isDarkMode ? styles.darkPopup : styles.lightPopup
          ]} 
          activeOpacity={1}
        >
          <View style={styles.popupContent}>

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={props.onClose}
            >
              <Text style={[styles.closeButtonText, isDarkMode ? styles.darkText : styles.lightText]}>×</Text>
            </TouchableOpacity>

            <View style={styles.menuItemsContainer}>

              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => props.isLogged ? navigateTo('home') : navigateTo('auth/register')}
              >
                <Text style={[styles.menuItemText, isDarkMode ? styles.darkText : styles.lightText]}>Inicio</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => {props.onEventClick()}}
              >
                <Text style={[styles.menuItemText, isDarkMode ? styles.darkText : styles.lightText]}>Eventos</Text>
              </TouchableOpacity>


              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() =>  navigateTo('rules') }
              >
                <Text style={[styles.menuItemText, isDarkMode ? styles.darkText : styles.lightText]}>
                  Politicas
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '85%',
    maxWidth: 400,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  lightPopup: {
    backgroundColor: '#ffffff',
  },
  darkPopup: {
    backgroundColor: '#1a1d21',
  },
  popupContent: {
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  menuItemsContainer: {
    alignItems: 'stretch',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuItemText: {
    fontSize: 18,
    textAlign: 'center',
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
});
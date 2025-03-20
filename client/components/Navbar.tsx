import React, { PropsWithChildren, useState } from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  View, 
  Text, 
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native';

//TODO use props to change content and links in nav bar
function Navbar({ children }: PropsWithChildren)  {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  
  return (
    <SafeAreaView style={[
      styles.container, 
      isDarkMode ? styles.darkContainer : styles.lightContainer
    ]}>
      
      <View style={styles.header}>
        <Text style={[
          styles.logo, 
          isDarkMode ? styles.darkText : styles.lightText
        ]}>
          LogiEvents
        </Text>
        
        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={[
              styles.navLink, 
              isDarkMode ? styles.darkText : styles.lightText
            ]}>
              Inicio
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={[
              styles.navLink, 
              isDarkMode ? styles.darkText : styles.lightText
            ]}>
              Eventos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={[
              styles.navLink, 
              isDarkMode ? styles.darkText : styles.lightText
            ]}>
              Políticas
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.auth}>
          <TouchableOpacity style={[
            styles.authButton, 
            styles.loginButton,
            isDarkMode ? styles.darkLoginButton : styles.lightLoginButton
          ]}>
            <Text style={[
              styles.authButtonText,
              isDarkMode ? styles.darkLoginText : styles.lightLoginText
            ]}>
              Inicio Sesión
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[
            styles.authButton, 
            styles.registerButton,
            isDarkMode ? styles.darkRegisterButton : styles.lightRegisterButton
          ]}>
            <Text style={[
              styles.authButtonText,
              isDarkMode ? styles.darkRegisterText : styles.lightRegisterText
            ]}>
              Registro
            </Text>
          </TouchableOpacity>
        </View>
       
      </View>
      
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#1a1d21'  ,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
  navLinks: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  navLink: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  auth: {
    flexDirection: 'row',
  },
  authButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginLeft: 10,
  },
  loginButton: {
    borderWidth: 1,
  },
  lightLoginButton: {
    borderColor: '#333333',
  },
  darkLoginButton: {
    borderColor: '#ffffff',
  },
  registerButton: {},
  lightRegisterButton: {
    backgroundColor: '#333333',
  },
  darkRegisterButton: {
    backgroundColor: '#ffffff',
  },
  authButtonText: {
    fontSize: 14,
  },
  lightLoginText: {
    color: '#333333',
  },
  darkLoginText: {
    color: '#ffffff',
  },
  lightRegisterText: {
    color: '#ffffff',
  },
  darkRegisterText: {
    color: '#333333',
  },
  menuButton: {
    display: 'none', // Hidden by default, would use media queries in web
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  menuLine: {
    height: 2,
    width: '100%',
  },
  lightMenuLine: {
    backgroundColor: '#333333',
  },
  darkMenuLine: {
    backgroundColor: '#ffffff',
  },
});

export default Navbar;
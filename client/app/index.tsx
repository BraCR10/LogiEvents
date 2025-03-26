import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Register from './auth/register'; 

export default function Header() {
  return  <Register />;}

/*  
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';


export default function Header() {
  return (
    <ImageBackground
      source={require('@/assets/images/fondo_header.png')} 
      style={styles.container}
      resizeMode="cover" 
    >
      <Text style={styles.title}>Los mejores eventos</Text>
      <Text style={styles.subtitle}>
        A tan solo un click de <Text style={styles.bold}>una nueva experiencia</Text>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ir ahora</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    color: 'white', 
    fontSize: 50, 
    fontWeight: 'bold', 
    marginBottom: 8, 
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', 
    marginBottom: 16, 
  },
  bold: {
    fontWeight: 'bold', 
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8, 
    paddingHorizontal: 80, 
    borderRadius: 20, 
  },
  buttonText: {
    color: 'black', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
*/
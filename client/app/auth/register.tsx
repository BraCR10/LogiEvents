import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      {/* Mitad izquierda: Fondo negro con texto */}
      <View style={styles.leftContainer}>
        <Text style={styles.title}>LogiEvents</Text>
        <Text style={styles.subtitle}>Creemos experiencias juntos</Text>

        {/* Campo: Correo electrónico */}
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="name@logievents.com"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
        />

        {/* Campos: Nombre y Apellido */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder="First Name"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder="Last Name"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
            />
          </View>
        </View>

        {/* Campo: Identificación */}
        <Text style={styles.label}>Identificación</Text>
        <TextInput
          style={styles.input}
          placeholder="000000000"
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
        />

        {/* Campo: Contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          secureTextEntry={true}
        />

        {/* Campos: Rol empresa e Id empresa */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Rol empresa</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder="Marketing"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Id empresa</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder="LD2345"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      {/* Mitad derecha: Imagen */}
      <View style={styles.rightContainer}>
        <ImageBackground
          source={require('@/assets/images/fondo_register.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Divide la pantalla en dos columnas
  },
  leftContainer: {
    flex: 1, // Ocupa el 50% del ancho
    backgroundColor: '#151D20', // Fondo negro
    justifyContent: 'flex-start', // Alinea los elementos hacia la parte superior
    alignItems: 'center', // Centra horizontalmente
    paddingTop: 50, // Espaciado superior
  },
  rightContainer: {
    flex: 1, // Ocupa el 50% del ancho
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start', // Alinea el texto a la izquierda dentro del contenedor
    marginLeft: '10%', // Margen izquierdo para alinear con el cuadro de texto
    marginBottom: 8,
  },
  input: {
    width: '80%', // Ancho del cuadro de entrada
    height: 40, // Altura del cuadro de entrada
    backgroundColor: 'white', // Fondo blanco
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10, // Espaciado interno
    fontSize: 14, // Tamaño de la fuente
    color: 'black', // Texto negro
    marginBottom: 16, // Espaciado inferior
  },
  row: {
    flexDirection: 'row', // Coloca los elementos en una fila
    justifyContent: 'space-between', // Espaciado entre los elementos
    width: '80%', // Asegura que ocupe el mismo ancho que los inputs
    marginBottom: 16, // Espaciado inferior
  },
  column: {
    flex: 1, // Cada columna ocupa el mismo espacio
    marginHorizontal: 5, // Espaciado entre las columnas
  },
  inputSmall: {
    width: '100%', // Asegura que el input ocupe todo el ancho de la columna
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'black',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
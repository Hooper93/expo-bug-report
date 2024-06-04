import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  function chooseImg() {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
      exif: true,
    }).then(result => {
      if (!result.canceled) {
        console.log(result.assets[0].exif);
      } else {
        alert('You did not select any image.');
      }
    });
  }
  


  return (
    <View style={styles.container}>
      <Pressable onPress={chooseImg}>
        <Text>Choose Image to see EXIF</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

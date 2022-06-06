import { StatusBar } from 'expo-status-bar';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapScreen() {
  return (
    <View>
       <MapView 
        initialRegion={{
            latitude: 35.67714827145542,
            longitude: 139.6551462687416,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
       userInterfaceStyle='dark' style={styles.map}>
    <Marker
      title="Title"
      coordinate={{
        latitude: 35.67714827145542,
        longitude: 139.6551462687416,
      }}
        pinColor="#FAFAFA"
        description="test te st t etst "
    />
       </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

import {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '../config';
import MapViewDirections from 'react-native-maps-directions';

function Map() {
  const origin = {latitude: 9.817322910104815, longitude: 105.8193764090538};
  const destination = {
    latitude: 9.808047411085688,
    longitude: 105.81970330327749,
  };
  const [marketList, setMarketList] = useState([
    {
      id: 1,
      latitude: 9.8117844,
      longitude: 105.8187709,
      title: `Team A`,
      description: `alo`,
    },
    {
      id: 2,
      latitude: 9.8124183,
      longitude: 105.820193,
      title: `Team B`,
      description: `team ba laoa`,
    },
  ]);

  const MyCustomMarkerView = () => {
    return (
      <Image
        style={{width: 30, height: 30}}
        source={require('../../src/asset/98650216_p0.jpg')}
      />
    );
  };

  const MyCustomCalloutView = () => {
    return (
      <View>
        <Text>deasdasdasd</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{zIndex: 1, height: 50}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={e => console.log(e)}
        />
      </View>
      <View style={{backgroundColor: 'red', zIndex: 0, flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            // latitude: 9.817461003262446,
            // longitude: 105.81901169292919,
            latitude: 9.8119654,
            longitude: 105.8199631,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          {/* Custom con trỏ  */}
          <Marker
            coordinate={{
              latitude: 9.8097017,
              longitude: 105.8202881,
            }}>
            <MyCustomMarkerView />
            <Callout
              style={{backgroundColor: 'white', width: 300, height: 100}}>
              <MyCustomCalloutView />
            </Callout>
          </Marker>

          {/* di chuyển con trỏ */}
          <Marker
            draggable
            coordinate={{
              latitude: 9.817435565053525,
              longitude: 105.81932410597801,
            }}
            onDragEnd={e => console.log({x: e.nativeEvent.coordinate})}
            title={`asd`}
          />

          {marketList.map(marker => {
            return (
              <Marker
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
                description={marker.description}
              />
            );
          })}

          <Circle
            center={{
              latitude: 9.808318649444944,
              longitude: 105.81693090498447,
            }}
            fillColor="red"
            strokeColor="blue"
            radius={200}
          />

          <Polyline
            coordinates={[
              {
                latitude: 9.817322910104815,
                longitude: 105.8193764090538,
              },
              {
                latitude: 9.816684641460558,
                longitude: 105.81855934113264,
              },
            ]}
            strokeWidth={2}
          />
          <Polygon
            coordinates={[
              {
                latitude: 9.810559578577028,
                longitude: 105.82410681992769,
              },
              {
                latitude: 9.811034324554809,
                longitude: 105.8215607330203,
              },
              {
                latitude: 9.807311663529447,
                longitude: 105.82092169672251,
              },
              {
                latitude: 9.807630807034613,
                longitude: 105.82448668777943,
              },
            ]}
            fillColor="lightblue"
            strokeWidth={2}
          />
          {origin != undefined && destination != undefined ? (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_API_KEY}
            />
          ) : null}
        </MapView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  map: {flex: 1},
});
export default Map;

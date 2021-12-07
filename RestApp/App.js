import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <Text style={styles.baseText}>Do you need a moment?</Text>
      <Text style={styles.baseText}>Come on in</Text>
      <Text style={styles.baseText}>This is...</Text>
      <Text style={styles.titleText}>Rest</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('Questionnaire')} />
    </SafeAreaView>
  );
}

function Questionnaire() {
  return (
    <SafeAreaView style={styles.Questionnaire}>
      <Text>Questionnaire</Text>
    </SafeAreaView>
  );
}

function LandingPage() {
  return (
    <SafeAreaView style={styles.landingPage}>
      <Text>Landing Page</Text>
    </SafeAreaView>
  );
}

function Search() {
  return (
    <SafeAreaView style={styles.search}>
      <Text>Search Page</Text>
    </SafeAreaView>
  );
}

function Notifications() {
  return (
    <SafeAreaView style={styles.notifications}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
}

function Settings() {
  return (
    <SafeAreaView style={styles.Settings}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}

function audioVisualizer() {
  return (
    <View>
      <Text>Audio Visualizer</Text>
    </View>
  );
}

function addVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Questionnaire" component={Questionnaire} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="AudioViz" component={audioVisualizer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 18,
    padding: 5,
  },
  titleText: {
    fontSize: 20,
  },
  Questionnaire: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});

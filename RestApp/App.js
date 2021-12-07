import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Animations */

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

/* Screens */

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <Text style={styles.baseText}>Do you need a moment?</Text>
      <Text style={styles.baseText}>Come on in</Text>
      <Text style={styles.baseText}>This is...</Text>
      <FadeInView>
        <Text style={styles.titleText}>Rest</Text>
      </FadeInView>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('Questionnaire')} />
    </SafeAreaView>
  );
}

function Questionnaire({ navigation }) {
  return (
    <SafeAreaView style={styles.Questionnaire}>
      <Text>Questionnaire</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate('LandingPage')} />
    </SafeAreaView>
  );
}

function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.landingPage}>
      <Text>Landing Page</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate('SearchPage')} />
        <Button
        title="Notifications"
        onPress={() => navigation.navigate('Notifications')} />
        <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')} />
    </SafeAreaView>
  );
}

function SearchPage({ navigation }) {
  return (
    <SafeAreaView style={styles.searchPage}>
      <Text>Search Page</Text>
      <Button
        title="Video Selection"
        onPress={() => navigation.navigate('VideoSelect')} />
        <Button
        title="Audio Selection"
        onPress={() => navigation.navigate('AudioViz')} />
    </SafeAreaView>
  );
}

function Notifications({ navigation }) {
  return (
    <SafeAreaView style={styles.notifications}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
}

function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.Settings}>
      <Text>Settings</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

function audioVisualizer({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Audio Visualizer</Text>
    </SafeAreaView>
  );
}

function VideoSelect({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

/* Render Screens/Pages */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Questionnaire" component={Questionnaire} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="AudioViz" component={audioVisualizer} />
        <Stack.Screen name="VideoSelect" component={VideoSelect} />
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

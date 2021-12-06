import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    
    <SafeAreaView style={styles.container}>
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
      <Animated.View style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}>
          <Text style={styles.baseText}>Do you need a moment?</Text>
      </Animated.View>
        
        <Text style={styles.baseText}>Come on in</Text>
        <Text style={styles.baseText}>This is...</Text>
        <Text style={styles.titleText}>Rest</Text>
        <Button title="Continue" onPress={fadeOut} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  }
});

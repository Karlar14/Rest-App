import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScriptTag from 'react-script-tag';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


/* Animations */

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
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

/* Quiz Data + Logic */

const questions = [
  {
    questionText: 'What does the picture represent?',
    answerOptions: [
      { answerText: 'Face' },
      { answerText: 'Vase' },
    ],
  },
  {
    questionText: 'What is your favorite season?',
    answerOptions: [
      { answerText: 'Fall' },
      { answerText: 'Spring' },
      { answerText: 'Summer' },
      { answerText: 'Winter' },
    ],
  },
  {
    questionText: 'How do you feel when looking at picture?',
    answerOptions: [
      { answerText: 'Calm' },
      { answerText: 'Distracted' },
      { answerText: 'Neither' },
    ],
  },
  {
    questionText: 'What is the first thing you do in the morning?',
    answerOptions: [
      { answerText: 'Check your phone' },
      { answerText: 'Start your bathroom routine' },
      { answerText: 'Make a cup of coffee' },
      { answerText: 'Lay in bed longer' },
    ],
  },
]

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
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('you reached the end of the quiz');
      navigation.navigate('LandingPage');
    }
  };

  return (
    <SafeAreaView style={styles.Questionnaire}>
      <Text>New User Onboarding</Text>
      <Text>Question 1/{questions.length}</Text>
      <Image
          style={styles.imgs}
          source={{uri: "http://www.brandstoryonline.com/wp-content/uploads/2017/04/rubin-vase.jpeg"}} />
      <Text>{questions[currentQuestion].questionText}</Text>

      <View className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
          <Button
            title={answerOptions.answerText}
            onPress={() => handleAnswerButtonClick()} />
        ))}
      </View>
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
  const visualizer = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <Text>Audio Visualizer</Text>
      <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'2BL9q8bTBl8'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying}/>
    </View>
    </View>
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
  imgs: {
    width: 200,
    height: 200,
  }
});

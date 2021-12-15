import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View, Image, Button, SafeAreaView, Alert } from 'react-native';
import { Video, Audio, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScriptTag from 'react-script-tag';

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
    questionText: 'What do you see in the picture?',
    answerOptions: [
      { answerText: 'Face' },
      { answerText: 'Vase' },
    ],
    imageSource: 'http://www.brandstoryonline.com/wp-content/uploads/2017/04/rubin-vase.jpeg',
  },
  {
    questionText: 'What is your favorite season?',
    answerOptions: [
      { answerText: 'Fall' },
      { answerText: 'Spring' },
      { answerText: 'Summer' },
      { answerText: 'Winter' },
    ],
    imageSource: 'https://media.mixbook.com/images/templates/97_1_0_m.jpg',
  },
  {
    questionText: 'How do you feel when looking at picture?',
    answerOptions: [
      { answerText: 'Calm' },
      { answerText: 'Distracted' },
      { answerText: 'Neither' },
    ],
    imageSource: 'https://data.atomiyme.com/image/af98197470a00eac.jpg',
  },
  {
    questionText: 'What is the first thing you do in the morning?',
    answerOptions: [
      { answerText: 'Check your phone' },
      { answerText: 'Start your bathroom routine' },
      { answerText: 'Make a cup of coffee' },
      { answerText: 'Lay in bed longer' },
    ],
    imageSource: 'https://media.mixbook.com/images/templates/97_1_0_m.jpg',
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
      alert('You reached the end of the Questionnaire');
      navigation.navigate('LandingPage');
    }
  };

  return (
    <SafeAreaView style={styles.Questionnaire}>
      <Text>New User Onboarding</Text>
      <Text>Question {currentQuestion + 1}/{questions.length}</Text>
      <Image
          style={styles.imgs}
          source={{uri: questions[currentQuestion].imageSource}} />
      <Text>{questions[currentQuestion].questionText}</Text>

      <View className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
          <Button
            title={answerOptions.answerText}
            onPress={() => handleAnswerButtonClick()} />
        ))}
      </View>
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
    <View>
      <Text>Audio Visualizer</Text>
      <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://rr6---sn-ab5sznle.c.drive.google.com/videoplayback?expire=1639624768&ei=_3e6YbWiPNHk1bYPtI-T2A8&ip=68.199.119.210&cp=QVRIQUdfU1dUSVhPOm50cWtiay1PakpMQm82N0lvM0RlalEyWXRCOW9TZWhCUmVyTVBITzBXTks&id=e662c5fe3c36e0e1&itag=18&source=webdrive&requiressl=yes&mh=_9&mm=32&mn=sn-ab5sznle&ms=su&mv=u&mvi=6&pl=22&ttl=transient&susc=dr&driveid=1tzQeYLmeNQlxxhYSVNDT4xZVTnvXKioo&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=226.835&lmt=1639606970443487&mt=1639609952&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAJULQufqTdr_SYvKctrJpGMuSrsmRLUZVXikvzDjKF4EAiBdS4JUV9aTUP0UVh-FACIVPhyDOPIpEYF3KiJWSXGxcQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPAY7jjCOmKoJQAPy2OHfU_UU6_OEM44oW7AoOxCrPGoAiEA04WHeD4G4MKUDRZ4qGE2Fj5xmiNVDfb__gNLPWzKQxc=&cpn=mhuQu01lK_YOI2T6&c=WEB_EMBEDDED_PLAYER&cver=1.20211210.00.01',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          on
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
    padding: 25,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  imgs: {
    width: 200,
    height: 200,
    padding: 25,
  },
});

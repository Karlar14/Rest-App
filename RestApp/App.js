import React, { useEffect, useRef } from 'react';
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
  <!DOCTYPE html>
<html lang="en">
	
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      body {
        -webkit-animation: colorchange 10s infinite;
        animation: colorchange 10s infinite;
      &rbrace;
      @-webkit-keyframes colorchange {
        0% {
          background: #eec084;
        }
        25% {
          background: #f3ad91;
        &rbrace;
        50% {
          background: #e9a718;
        &rbrace;
        75% {
          background: #f0b106;
        &rbrace;
        100% {
          background: #ec9005;
        &rbrace;
      &rbrace;
      @keyframes colorchange {
        0% {
          background: #eec084;
        }
        25% {
          background: #f3ad91;
        &rbrace;
        50% {
          background: #e9a718;
        &rbrace;
        75% {
          background: #f0b106;
        &rbrace;
        100% {
          background: #ec9005;
        &rbrace;
      &rbrace;
    </style>
	<p style="text-decoration: underline;"></p>

	<center><font face="courier" size="3px"><h1><u>Questionare</u></h1></font></center>
	<body>      
	<!-- Create Form --&gt;
		<div class="form-control"></div>
		<label for="role" id="label-role"></label>
		<img src="/src/newpics/faceorvase.jpg">
		<center><font face="courier" size="4px">Do you see a vase or a face?</font></center>
		

			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
				<option value="Face">Face</option>
				<option value="Vase">Vase</option>
			</select></center>
		</div>
	
	
		<div class="form-control">
    	<label for="role" id="label-role">
		<center><font face="courier" size="4px">What is yout favorite season?</font></center>
			
			
			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
				<option value="Fall">Fall</option>
				<option value="Spring">Spring</option>
				<option value="Summer">Summer</option>
				<option value="Winter">Winter</option>
			</select></center>
		</div>

		<div class="form-control"></div>
		<label for="role" id="label-role"></label>
		<img src="/src/newpics/emotion.2.jpg">
		<center><font face="courier" size="4px">How do you feel when you see this?</font></center>
		

			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
			<option value="Calm">Calm</option>
			<option value="Distracted">Distracted</option>
			<option value="Neither">Neither</option>
			</select></center>
		</div>

        <div class="form-control">
			<label for="role" id="label-role">
			<center><font face="courier" size="4px">What is the first thing you do in the morning?</font></center>
		
			
			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
				<option value="Check your phone">Check your phone</option>
				<option value="Brush Your teeth,Use bathroom">Brush Your teeth,Use bathroom</option>
				<option value="Make drinks/coffee">Make drinks/coffee</option>
				<option value="Lay longer">Lay longer</option>
			</select></center>
		</div>

		<div class="form-control"></div>
		<label for="role" id="label-role"></label>
		<img src="/src/newpics/gradient.gif">
		<center><font face="courier" size="4px">Which side appears lighter?</font></center>
			

			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
			<option value="Left">Left</option>
			<option value="Right">Right</option>
			<option value="they are the same">They are the same</option>
			</select></center>
		</div>

        <div class="form-control">
			<label for="role" id="label-role">
			<center><font face="courier" size="4px">What is your favorite flower?</font></center>
			
			
			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
				<option value="Roses">Roses</option>
				<option value="Sunflowers">Sunflowers</option>
				<option value="Daisy">Daisy</option>
				<option value="Tulips">Tulips</option>
			</select></center>
		</div>


		<div class="form-control"></div>
		<label for="role" id="label-role"></label>
		<img src="/src/newpics/tri.3.gif"> 
		<center><font face="courier" size="4px">How many triangles do you see ?</font></center>
		

			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
			<option value="six">Six</option>
			<option value="Two">Two</option>
			<option value="None">None</option>
			</select></center>
		</div>

        <div class="form-control">
			<label for="role" id="label-role">
			<center><font face="courier" size="4px">What is your favorite Animal?</font></center>
		
			
			<!-- Dropdown options --&gt;
		<center><select name="role" id="role">
				<option value="Dogs/Puppy">Dogs/Puppy</option>
				<option value="Cats/Kittens">Cats/Kittens</option>
				<option value="Repties">Reptiles</option>
				<option value="Amphibians">Amphibians</option>
			</select></center>
		</div>

		<div class="form-control"></div>
		<label for="role" id="label-role"></label>
		<img src="/src/newpics/whatdoyousee.jpg">
		<center><font face="courier" size="4px">Being near water whats you feel?</font></center>
			

			<!-- Dropdown options --&gt;
			<center><select name="role" id="role">
			<option value="Uneasy">Uneasy</option>
			<option value="Thoughful">Thoughful</option>
			<option value="excited">Excited</option>
			<option value="None of these">None of these</option>
			</select></center>
		</div>

        <div class="form-control">
			<label for="role" id="label-role">
			<center><font face="courier" size="4px">What is your perfered temperature?</font></center>
		
			
			<!-- Dropdown options --&gt;
			<center><select name="role" id="role">
				<option value="Hot">Hot</option>
				<option value="Cold">Cold</option>
				<option value="Lukewarm">Lukewarm</option>
				<option value="Cool">Cool</option>
			</select></center>
		</div>

<center><button type="submit" value="submit">
    <h1 style="background-color:#f1e5d1;"><font face="courier" size="4px">SUBMIT</font></h1>
</button></center>
</div>
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
&rbrace;

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
&rbrace;

function Notifications({ navigation }) {
  return (
    <SafeAreaView style={styles.notifications}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
&rbrace;

function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.Settings}>
      <Text>Settings</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
&rbrace;

function audioVisualizer({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Audio Visualizer</Text>
    </SafeAreaView>
  );
&rbrace;

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
&rbrace;

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
&rbrace;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  &rbrace;,
  baseText: {
    fontSize: 18,
    padding: 5,
  &rbrace;,
  titleText: {
    fontSize: 20,
  &rbrace;,
  Questionnaire: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  &rbrace;,
&rbrace;);

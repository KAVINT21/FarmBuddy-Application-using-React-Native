// import { NativeWindStyleSheet } from "nativewind";
// NativeWindStyleSheet.setOutput({
//   default: "native",
// });

// import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,Image } from 'react-native';
// import tw from 'twrnc';




// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from './src/screens/HomeScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';






// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'> */}
//       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>

//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



// import React from 'react'
// import { StyleSheet, Button, View } from 'react-native'
// import email from 'react-native-email'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Send Mail" onPress={this.handleEmail} />
//       </View>
//     )
//   }

//   handleEmail = () => {
//     const to = ['71762108021@cit.edu.in'] // string or array of email addresses
//     email(to, {
//       // Optional additional arguments
//        // string or array of email addresses// string or array of email addresses
//       subject: 'Show how to use',
//       body: 'Hi Kaviyarasu.I am Kavin.But There is some problem',
//             checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
//     }).catch(console.error)
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// import axios from 'axios';
// import base64 from 'base-64'; // Import base-64 library
// const apiKey = '2a197681';
// const apiSecret = 'JzkE5vwHtbOxlrtu';

// const from = 'Vonage APIs';
// const to = '918300273688';
// const text = 'Hello,This is Kavin Thangavel';

// const vonageEndpoint = 'https://api.nexmo.com/v0.1/messages';

// async function sendSMS() {
//   try {
//     // Encode API key and secret using base-64
//     const credentials = base64.encode(`${apiKey}:${apiSecret}`);

//     const response = await axios.post(
//       vonageEndpoint,
//       {
//         from: { type: 'sms', number: from },
//         to: { type: 'sms', number: to },
//         message: {
//           content: {
//             type: 'text',
//             text: text,
//           },
//         },
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Basic ${credentials}`, // Use the encoded credentials
//         },
//       }
//     );

//     console.log('Message sent successfully');
//     console.log(response.data);
//   } catch (error) {
//     console.error('There was an error sending the messages.');
//     console.error(error);
//   }
// }

// sendSMS();


// import React, { useEffect } from 'react';
// import axios from 'axios';
// import base64 from 'base-64';

// const apiKey = '2a197681';
// const apiSecret = 'JzkE5vwHtbOxlrtu';
// const from = 'Vonage APIs';
// const to = '918300273688';
// const text = 'Hello, This is Kavin Thangavel,This email is sent by Me.';

// const vonageEndpoint = 'https://api.nexmo.com/v0.1/messages';

// const sendSMS = async () => {
//   try {
//     // Encode API key and secret using base-64
//     const credentials = base64.encode(`${apiKey}:${apiSecret}`);

//     const response = await axios.post(
//       vonageEndpoint,
//       {
//         from: { type: 'sms', number: from },
//         to: { type: 'sms', number: to },
//         message: {
//           content: {
//             type: 'text',
//             text: text,
//           },
//         },
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Basic ${credentials}`, // Use the encoded credentials
//         },
//       }
//     );

//     console.log('Message sent successfully');
//     console.log(response.data);
//   } catch (error) {
//     console.error('There was an error sending the messages.');
//     console.error(error);
//   }
// };

// const YourComponent = () => {
//   useEffect(() => {
//     sendSMS();
//   }, []); // Run the sendSMS function when the component mounts

  
// };

// export default YourComponent;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { useState } from 'react';
// import { printToFileAsync } from 'expo-print';
// import { shareAsync } from 'expo-sharing';

// export default function App() {
//   let [name, setName] = useState("");

//   const html = `
//     <html>
//       <body>
//         <h1>Hi ${name}</h1>
//         <p style="color: red;">Hello. Bonjour. Hola.</p>
//       </body>
//     </html>
//   `;

//   let generatePdf = async () => {
//     const file = await printToFileAsync({
//       html: html,
//       base64: false
//     });

//     await shareAsync(file.uri);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput value={name} placeholder="Name" style={styles.textInput} onChangeText={(value) => setName(value)} />
//       <Button title="Generate PDF" onPress={generatePdf} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textInput: {
//     alignSelf: "stretch",
//     padding: 8,
//     margin: 8
//   }
// });

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { useState } from 'react';
// import { printToFileAsync } from 'expo-print';
// import * as FileSystem from 'expo-file-system';

// export default function App() {
//   const [name, setName] = useState("");

//   const html = `
//     <html>
//       <body>
//         <h1>Hi ${name}</h1>
//         <p style="color: red;">Hello. Bonjour. Hola.</p>
//       </body>
//     </html>
//   `;

//   const generatePdf = async () => {
//     try {
//       // Generate PDF
//       const file = await printToFileAsync({
//         html: html,
//         base64: false,
//       });

//       // Get the file name from the URI
//       const fileName = file.uri.split('/').pop();

//       // Define the file path in the root of the app's document directory
//       const filePath = `${FileSystem.documentDirectory}${fileName}`;

//       // Move the file to the specified path
//       await FileSystem.moveAsync({
//         from: file.uri,
//         to: filePath,
//       });

//       console.log('PDF saved to local storage:', filePath);
//     } catch (error) {
//       console.error('Error generating and saving PDF:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={name}
//         placeholder="Name"
//         style={styles.textInput}
//         onChangeText={(value) => setName(value)}
//       />
//       <Button title="Generate PDF" onPress={generatePdf} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textInput: {
//     alignSelf: 'stretch',
//     padding: 8,
//     margin: 8,
//   },
// });

// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   useEffect(() => {
//     // Replace 'YOUR_IPSTACK_API_KEY' with your actual ipstack API key
//     const apiKey = '7c895d4a84dcdfb11e1fc040364c09df';

//     // Function to fetch geolocation based on IP address using ipstack API
//     const fetchGeolocation = async () => {
//       try {
//         // Make a request to the ipstack API with the API key
//         const response = await axios.get(`http://api.ipstack.com/check?access_key=${apiKey}`);

//         // Extract relevant information from the response
//         const { city, region_name, latitude, longitude } = response.data;

//         // Log geolocation details to the conole
//         console.log(`City: ${city}`);
//         console.log(`Region: ${region_name}`);
//         console.log(`Latitude: ${latitude}`);
//         console.log(`Longitude: ${longitude}`);
//       } catch (error) {
//         console.error('Error fetching geolocation:', error.message);
//       }
//     };

//     // Call the fetchGeolocation function
//     fetchGeolocation();
//   }, []); // Run only once when the component mounts

//   return (
//     <View>
//       <Text>Check the console for geolocation details</Text>
//     </View>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import * as Location from 'expo-location';

// const LocationExample = () => {
//   const [location, setLocation] = useState(null);
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const getLocationAsync = async () => {
//       try {
//         // Request permission to access the device's location
//         let { status } = await Location.requestForegroundPermissionsAsync();

//         if (status !== 'granted') {
//           console.error('Permission to access location was denied');
//           return;
//         }

//         // Get current position
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);

//         // Reverse geocoding using OpenCage API
//         const apiKey = 'c35734bf148b4aed8d8d6d6500886ed2';
//         const response = await fetch(
//           `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${location.coords.latitude}+${location.coords.longitude}&pretty=1`
//         );
//         const data = await response.json();

//         // Extract city and area information
//         if (data.results.length > 0) {
//           console.log(data.results);
//           const { city, state, country } = data.results[0].components;
//           setAddress(`${city}, ${state}, ${country}`);
//         } else {
//           setAddress('Location not found');
//         }
//       } catch (error) {
//         console.error('Error getting location:', error);
//       }
//     };

//     getLocationAsync();
//   }, []);

//   return (
//     <View>
//       {location ? (
//         <View>
//           <Text>Latitude: {location.coords.latitude}</Text>
//           <Text>Longitude: {location.coords.longitude}</Text>
//           <Text>Address: {address}</Text>
//         </View>
//       ) : (
//         <Text>Loading location...</Text>
//       )}
//     </View>
//   );
// };

// export default LocationExample;
// ####################################################################################################################################

// import React from 'react';
// import WelcomeScr from './src/screens/WelcomeScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// import ProfileScreen from './ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import ExploreScreen from './src/screens/ExploreScreen';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ;

// import { useTheme, Avatar } from 'react-native-paper';
// import { View } from 'react-native-animatable';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const WelcomeStack = createStackNavigator();
// const NotificationStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const ExploreStack=createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const RootStack = createStackNavigator();

// // import Share from 'react-native-share';




// const MainTabScreen = () => (
//   <NavigationContainer>
      
//   <Tab.Navigator initialRouteName="welcome" activeColor="#fff">
//     <Tab.Screen
//       name="welcome"
//       component={WelcomeStackScreen}
//       options={{
//         tabBarLabel: 'Home',
//         tabBarColor: '#FF6347',
//         tabBarIcon: ({ color }) => (
//           <Icon name="ios-home" color={color} size={26} />
//         ),
//       }}
//     />
    
//     <Tab.Screen
//       name="notifications"
//       component={NotificationStackScreen}
//       options={{
//         tabBarLabel: 'Updates',
//         tabBarColor: '#1f65ff',
//         tabBarIcon: ({ color }) => (
//           <Icon name="ios-notifications" color={color} size={26} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="profile"
//       component={ProfileStackScreen}
//       options={{
//         tabBarLabel: 'Profile',
//         tabBarColor: '#694fad',
//         tabBarIcon: ({ color }) => (
//           <Icon name="ios-person" color={color} size={26} />
//         ),
//       }}
//     />
//       <Tab.Screen
//         name="explore"
//         component={ExploreStackScreen}
//         options={{
//           tabBarLabel: 'Explore',
//           tabBarColor: '#d02860',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-aperture" color={color} size={26} />
//           ),
//         }}
//       />
    
//   </Tab.Navigator>
//   </NavigationContainer>
// );

// export default MainTabScreen;

// const WelcomeStackScreen = ({ navigation }) => {
//   const { colors } = useTheme();
//   return (

    
//     <WelcomeStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <WelcomeStack.Screen
//         name="Welcome"
//         component={WelcomeScr}
//         options={{
//           title: '',
//           headerLeft: () => (
//             <View style={{ marginLeft: 10 }}>
//               <Icon.Button
//                 name="ios-menu"
//                 size={25}
//                 color={colors.text}
//                 backgroundColor={colors.background}
//                 onPress={() => navigation.openDrawer()}
//               />
//             </View>
//           ),
//           headerRight: () => (
//             <View style={{ flexDirection: 'row', marginRight: 10 }}>
//               <Icon.Button
//                 name="ios-search"
//                 size={25}
//                 color={colors.text}
//                 backgroundColor={colors.background}
//                 onPress={() => { }}
//               />
//               <TouchableOpacity
//                 style={{ paddingHorizontal: 10, marginTop: 5 }}
//                 onPress={() => {
//                   navigation.navigate('profile');
//                 }}>
//                 <Avatar.Image
//                   source={{
//                     uri:
//                       'https://tse1.mm.bing.net/th?id=OIP.FMXcWvy8DeSem2kV_8KH0gHaEK&pid=Api&rs=1&c=1&qlt=95&w=194&h=109',
//                   }}
//                   size={30}
//                 />
//               </TouchableOpacity>
//             </View>
//           ),
//         }}
//       />
//       <WelcomeStack.Screen
//         name="Home"
//         options={{
//           title: '',
//         }}
//         component={HomeScreen}
//       />
      
//     </WelcomeStack.Navigator>
//   );
// };






// const NotificationStackScreen = ({ navigation }) => (
//   <NotificationStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: 'white',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         color:'black'
//       },
//     }}>
//     <NotificationStack.Screen
//       name="Notifications"
//       component={NotificationScreen}
      
//     />
    
//   </NotificationStack.Navigator>
  
// );

// const ProfileStackScreen = ({ navigation }) => {


//   // const myCustomShare = async () => {
//   //   const shareOptions = {
//   //     message: 'This is a test message'
//   //   }
//   //   try {
//   //     const ShareResponse = await Share.open(shareOptions);

//   //   } catch (error) {
//   //     console.log('Error => ', error);
//   //   }
//   // }

//   const { colors } = useTheme();

//   return (
//     <ProfileStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//       }}>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: '',
          
//           headerRight: () => (
//             <View style={{ marginRight: 10 }}>
//               <MaterialCommunityIcons.Button
//                 name="account-edit"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color='#000'
//                 onPress={() => navigation.navigate('EditProfile')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="EditProfile"
//         options={{
//           title: 'Edit Profile',
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
    
    
//   );
// };



// const ExploreStackScreen = ({ navigation }) => {
//   const { colors } = useTheme();
//   return(
//   <ExploreStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: colors.background,
//         shadowColor: colors.background, // iOS
//         elevation: 0, // Android
//       },
//       headerTintColor: colors.text,
//     }}>
//     <ExploreStack.Screen
//       name="Explore"
//       component={ExploreScreen}
      
//     />
//   </ExploreStack.Navigator>
//   );
//   };

// #################################################################################################################################

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/appNavigation';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

// ###################################################### Code for Payment ##################

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import StripeApp from "./src/StripeApp";
// import { StripeProvider } from "@stripe/stripe-react-native";
// export default function App() {
//   return (
//     <StripeProvider publishableKey="pk_test_51OGcIxSFg1Fkjn4y6JC062nmFvzGb9lKa2zQRUa6KIYmpxL8H9MtkUH8fgq0jxnrlBUuImzsftXQ2QDOgVFpy7sl00iODwPjoT">
//       <StripeApp />
//     </StripeProvider>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });




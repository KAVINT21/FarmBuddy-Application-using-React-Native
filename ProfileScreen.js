// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import React from 'react';
// import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Appearance } from 'react-native';
// import {
//   Avatar,
//   Title,
//   Caption,
//   Text,
//   TouchableRipple,
// } from 'react-native-paper';
// import { printToFileAsync } from 'expo-print';
// import { shareAsync } from 'expo-sharing';
// import { useState } from 'react';





// const ProfileScreen = () => {

//   let [name, setName] = useState("Hello,This is a text from GRBot");

//   const html = `
//     <html>
//       <body>
//         <h1>Hi ${name}</h1>
//         <p style="color: red;">Hello.....</p>
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

    
//     <SafeAreaView style={styles.container}>

//       <View style={styles.userInfoSection}>
//         <View style={{ flexDirection: 'row', marginTop: 15 }}>
//           <Avatar.Image
//             source={{
//               uri: 'https://tse2.mm.bing.net/th?id=OIP.FMXcWvy8DeSem2kV_8KH0gHaEK&pid=Api&P=0&h=180',
//             }}
//             size={80}
//           />
//           <View style={{ marginLeft: 20 }}>
//             <Title style={[styles.title, {
//               marginTop: 15,
//               marginBottom: 5,
//             }]}>John Doe</Title>
//             <Caption style={styles.caption}>@j_doe</Caption>
//           </View>
//         </View>
//       </View>

//       <View style={styles.userInfoSection}>
//         <View style={styles.row}>
//           <Icon name="map-marker-radius" color="#777777" size={20} />
//           <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="phone" color="#777777" size={20} />
//           <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="email" color="#777777" size={20} />
//           <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
//         </View>
//       </View>

//       <View style={styles.infoBoxWrapper}>
//         <View style={[styles.infoBox, {
//           borderRightColor: '#dddddd',
//           borderRightWidth: 1
//         }]}>
//           <Title>₹140.50</Title>
//           <Caption>Wallet</Caption>
//         </View>
//         <View style={styles.infoBox}>
//           <Title>12</Title>
//           <Caption>Orders</Caption>
//         </View>
//       </View>

//       <View style={styles.menuWrapper}>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name="heart-outline" color="#FF6347" size={25} />
//             <Text style={styles.menuItemText}>Your Favorites</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name="credit-card" color="#FF6347" size={25} />
//             <Text style={styles.menuItemText}>Payment</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={generatePdf}>
//           <View style={styles.menuItem}>
//             <Icon name="share-outline" color="#FF6347" size={25} />
//             <Text style={styles.menuItemText}>Tell Your Friends</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name="account-check-outline" color="#FF6347" size={25} />
//             <Text style={styles.menuItemText}>Support</Text>
//           </View>
//         </TouchableRipple>
//         <TouchableRipple onPress={() => { }}>
//           <View style={styles.menuItem}>
//             <Icon name="cog" color="#FF6347" size={25} />
//             <Text style={styles.menuItemText}>Settings</Text>
//           </View>
//         </TouchableRipple>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: '500',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   infoBoxWrapper: {
//     borderBottomColor: '#dddddd',
//     borderBottomWidth: 1,
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     height: 100,
//   },
//   infoBox: {
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   menuWrapper: {
//     marginTop: 10,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   menuItemText: {
//     color: '#777777',
//     marginLeft: 20,
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 26,
//   },
// });


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text as PaperText,
  TouchableRipple,
} from 'react-native-paper';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const [name, setName] = useState("Hello, This is a text from GRBot");
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const navigation = useNavigation();


  useEffect(() => {
    const appearanceListener = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => {
      appearanceListener.remove();
    };
  }, []);

  let generatePdf = async () => {
    const html = `
      <html>
        <body>
          <h1>Hi ${name}</h1>
          <p style="color: red;">Hello.....</p>
        </body>
      </html>
    `;

    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    // You can perform any additional actions when toggling dark mode
    setIsDarkMode(newMode);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }]}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://tse2.mm.bing.net/th?id=OIP.FMXcWvy8DeSem2kV_8KH0gHaEK&pid=Api&P=0&h=180',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>Kavin Thangavel</Title>
            <Caption style={styles.caption}>@thangavelkavin98@gmail.com</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Coimbatore, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+91-8300273688</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>thangavelkavin98@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1 }]}>
          <Title style={styles.title}>₹140.50</Title>
          <Caption style={styles.caption}>Share</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={styles.title}>12</Title>
          <Caption style={styles.caption}>Queries</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Donate')}
>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={generatePdf}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={toggleDarkMode}>
          <View style={styles.menuItem}>
            <Icon name="cog" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Dark Mode</Text>
          </View>
        </TouchableRipple>
      </View>

      {/* Conditional rendering of settings */}
      {isDarkMode && (
        <View style={styles.settingsContainer}>
          <PaperText style={{ color: '#ffffff' }}>Dark Mode Settings</PaperText>
          {/* Add your dark mode settings components here */}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    color: '#777777',
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    color: '#777777',
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777777',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  settingsContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#333333',
  },
});

export default ProfileScreen;


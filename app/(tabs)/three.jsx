import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, IconButton, Divider } from "react-native-paper"; 
import EditScreenInfo from '@/components/EditScreenInfo';
import { signOut, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';


export default function TabThreeScreen() {
  const auth = getAuth();
const navigation = useNavigation();

  const signUserOut = async() => {
    try {
      await signOut(auth).then(() => {
        console.log("user signed out");
        navigation.replace("index");

      });
    }catch (error){
      console.log("user sign out  ", error);
    }

  };

  return (
    <View style={styles.container}>

      <View style={styles.topBanner}>
 
      <IconButton
    icon="chevron-left"
    iconColor={'#ba6e8f'}
    size={28}
    onPress={() => console.log('Pressed')} style={styles.iconBtn} />
   
  
<Text style={styles.topTx}>Account</Text>
  

<IconButton
    icon="pencil-minus-outline"
    iconColor={'#ba6e8f'}
    size={28}
    onPress={() => console.log('Pressed')} style={{right: -165, top: -75}} />

      
      </View>

      <View style={styles.user}>

      <Image style={styles.userPic} source={require("../../assets/images/userpic.jpg")} />

      
 
 <View>
  <Text style={styles.userFirst}>
        First Name
      </Text>
      
      <Text style={styles.userLast}>
      Last Name 
      </Text>

      </View>
      


      </View>

      <View style={styles.options}>

      <View style={styles.optionsSec}>
      <Ionicons name="person-circle-outline" size={25} color= "#ba6e8f" /><Text style={styles.optionBtn}> Your Profile</Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -210}} />
</View>

      <Divider />

      <View style={styles.optionsSec}>
      <MaterialIcons name="payment" size={24} color="#ba6e8f" /><Text style={styles.optionBtn}>  Payment Method </Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -170}} />
</View>

      <Divider />

      <View style={styles.optionsSec}>
      <AntDesign name="tago" size={24} color="#ba6e8f" /><Text style={styles.optionBtn}> Promotions</Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -210}} />
</View>

      <Divider />

      <View style={styles.optionsSec}>
      <Ionicons name="settings-outline" size={24} color="#ba6e8f" />
      <Text style={styles.optionBtn}> Settings</Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -230}} />
</View>

      <Divider />

      <View style={styles.optionsSec}>
      <Feather name="help-circle" size={24} color="#ba6e8f" />
      <Text style={styles.optionBtn}>  Help Center </Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -200}} />
</View>

      <Divider />

      <View style={styles.optionsSec}>
      <Feather name="lock" size={24} color="#ba6e8f" />
      <Text style={styles.optionBtn}> Privacy Policy</Text>

      <IconButton
    icon="chevron-right"
    iconColor={'#ba6e8f'}
    size={24}
    onPress={() => console.log('Pressed')} style={{right: -195}} />
</View>


      <Divider />

     

      </View>
      
      <View style={styles.text}> 

   
<Button mode='outlined' onPress={signUserOut} style={styles.btn} theme={{ colors: { outline: '#ba6e8f' } }}> <Text style={styles.btnText}>Sign Out</Text></Button>
</View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    backgroundColor: "#fafafa",
  },
  topBanner: {
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",

    alignContent: "flex-start",
    
  },
  topTx: {
    top: -38,
    fontWeight: 'light',
    fontSize: 20,
    color: Colors.DEV_MEDIUM,
    
  },
  iconBtn: {
   alignSelf: 'flex-start',
   left: -15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: -2,
  },
  btn: {
    width: 345,
    backgroundColor: "#fff",    
    justifyContent: 'center',
    alignSelf: 'center',
   
   
    
  },
  btnText: {
    color: Colors.DEV_MEDIUM,
    fontWeight: 'bold',
    
    
  },
  user: {
    flexDirection: 'row',
    top: -50,
  },
  userPic: {
    width: 110,
    height: 110,
    borderRadius: 75,
  },
  userFirst: {
 fontSize: 23,
 fontWeight: 'bold',
 left: 20,
 top: 20,
 color: Colors.DEV_DARK,

  },
  userLast: {
    fontSize: 15,
    left: 20,
    top: 16,
    color: Colors.DEV_GRAY,

  },
  options: {
    marginTop:-35,
    marginBottom: 25,
    
    justifyContent: 'flex-start',

  },
  optionBtn: {
    paddingTop: 25,
    paddingBottom: 25,
    color: Colors.DEV_GRAY,
    left: 20,
    
    
  },
  optionsSec: {
    width: 140,
    flexDirection: 'row',
alignItems: 'center',
    
  },
  iconChe: {
    right: -100,

  },

});

import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useState} from 'react';
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { router } from 'expo-router';
import { Button, TextInput } from "react-native-paper";
import Colors from '@/constants/Colors';

export default function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("",);

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            if (user) router.replace("/(tabs)");
        } catch (err) {
            console.log(err);
            alert("Sign In Failed! " + err.message);
        }
    };

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (user) router.replace("/(tabs)");

        } catch (err) {
            console.log(err);
            alert("Sign up Failed! " + err.message);
        }
    };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.elements}>

        
      <Image style={styles.logo} source={require("../assets/images/logo4.png")} />
      

     

      <Text style={styles.welcome}>Welcome!</Text>

      <TextInput 
      autoCapitalize='none'
      value={email}
      keyboardType='email-address'
      placeholder='Email Address'
      onChangeText={(text) => setEmail(text)} style={styles.input}/>

      <TextInput 
      
      secureTextEntry={true}
      value={password}
      placeholder='Password'
      onChangeText={(text) => setPassword(text)} style={styles.input} />



      <Button mode='contained'  onPress={signIn} style={styles.btnSignin}>
        <Text >Sign In</Text>
      </Button>

      <Button mode='text' onPress={signUp} style={styles.btnCreate}>
        <Text style={styles.create}>Create Account</Text>
      </Button>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
          justifyContent: "center",
    },
    elements: {
      display: "flex",
          alignContent: "center",
          justifyContent: "center",
     
    },
    logo: {
      width: 200,
      height: 200,
      left: 75,

    },
    welcome: {
      color: "#5D3C64",
      fontWeight: "light",
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    
    },
    input: {
      backgroundColor: '#fff',
      marginBottom: 5,
      

    },
    btnSignin: {
      marginTop: 10,
      backgroundColor: "#ba6e8f",

    },
    btnCreate: {

    },
    create: {
      color: "#0c0420",

    },

});
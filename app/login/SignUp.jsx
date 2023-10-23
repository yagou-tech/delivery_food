import React, { useState } from "react";
import { Image, Text, Alert, TextInput, View, StyleSheet } from "react-native";
import Button from "../Utils/Button";

export default function SignIn() {
  
  return (
    <View
      style={styles.first}
    >
      <View style={styles.login}>
        <View>
          <Text style={styles.text}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} placeholder="*  *  *  *  *  *  * " />
        </View>
      </View>

      <View
        style={styles.second}
      >
        <Button title="Register"
          onPress={() =>
            this.props.navigation.navigate('Profil')
          } />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  first: {
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 100,
  },
  text: {
    paddingTop: 20,
  },
  second: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  login: {
    display: "flex",
    alignItems: "space-beetwen",
    paddingTop: 30,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
  },
});

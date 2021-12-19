import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../Config/Firebase";
function User_Signin({ navigation }) {
          const [name, setName] = useState(null)
          const [email, setEmail] = useState(null)
          const [password, setPassword] = useState(null)
          const [cnic, setCnic] = useState(null)
          // console.log(firebase)
          // firebase.firestore().collection("Users").doc(firebase.auth().currentUser.uid).set({
   const Registration = ()=>{
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            navigation.navigate("User_Dashboard")
          })
          .then(()=>{
                    firebase.firestore().collection("Data").doc().set({
                              email:email,
                              cnic:cnic,
                              name:name
                    })
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
   }
          return (
                    <View style={styles.container}>
                              <View style={{ width: 190 }}>
                                        <Text style={{ fontSize: 20, textAlign: "center", color: "rgb(36, 149, 254)" }}>User Signin</Text>
                              </View>
                              <View >
                                        <Text style={styles.input_txt}>Name : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setName(console.log(e))} style={styles.input} />
                              </View>
                              <View>
                                        <Text style={styles.input_txt}>Email : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setEmail(e)} style={styles.input} />
                              </View>
                              <View>
                                        <Text style={styles.input_txt}>Password : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setPassword(e)} style={styles.input} />
                              </View>
                              <View>
                                        <Text style={styles.input_txt}>CNIC : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setCnic(console.log(e))} style={styles.input} />
                              </View>
                              <View>
                                        <TouchableOpacity onPress={Registration} style={styles.btn} activeOpacity={0.8}>
                                                  <Text style={styles.btn_txt}>Signin</Text>
                                        </TouchableOpacity>
                              </View>
                    </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    position: "absolute",
                    top: 180,
                    left: 85
          },
          input: {
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomColor: "rgb(36, 149, 254)",


          },
          input_txt: {
                    color: "rgb(36, 149, 254)",
                    marginTop: 15,
                    width: 80,
          },
          btn: {
                    height: "40px",
                    backgroundColor: "rgb(36, 149, 254)",
                    width: "200px",
                    marginTop: 15,
                    padding: 10,
                    borderRadius: 10
          },
          btn_txt: {
                    color: "#fff",
                    textAlign: "center"
          }
}
)

export default User_Signin;
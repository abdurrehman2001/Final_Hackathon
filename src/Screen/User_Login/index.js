import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../Config/Firebase";
function User_login({ navigation }) {
          const [email, setEmail] = useState(null)
          const [password, setPassword] = useState(null)
          // console.log(Firebase)


          const Login = () => {
                    firebase.auth().signInWithEmailAndPassword(email, password)
                              .then((userCredential) => {
                                        // Signed in
                                        var user = userCredential.user;
                                        // ...
                              })
                              .catch((error) => {
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                              });
          }
          return (

                    <View style={styles.container}>
                              <View style={{ width: 190 }}>
                                        <Text style={{ fontSize: 20, textAlign: "center", color: "rgb(36, 149, 254)" }}>User Login</Text>
                              </View>
                              <View>
                                        <Text style={styles.input_txt}>Email : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setEmail(console.log(e))} style={styles.input} />
                              </View>
                              <View>
                                        <Text style={styles.input_txt}>Password : </Text>
                              </View>
                              <View style={{ width: 200 }}>
                                        <TextInput onChangeText={(e) => setPassword(console.log(e))} style={styles.input} />
                              </View>
                              <View>
                                        <TouchableOpacity onPress={Login} style={styles.btn} activeOpacity={0.8}>
                                                  <Text style={styles.btn_txt}>Login</Text>
                                        </TouchableOpacity>
                              </View>
                              <View style={{ position: "relative", top: 2, left: 78, width: 50 }}>
                                        <Text style={{ textAlign: "center" }}>Or</Text>
                                        <Text style={{ width: 200, marginLeft: -33 }}>Create New Account</Text>
                              </View>
                              <View>
                                        <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={styles.btn} activeOpacity={0.8}>
                                                  <Text style={styles.btn_txt}>Signin</Text>
                                        </TouchableOpacity>
                              </View>
                    </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    position: "absolute",
                    top: 200,
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
                    width: 80,
                    color: "rgb(36, 149, 254)",
                    marginTop: 15
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

export default User_login;
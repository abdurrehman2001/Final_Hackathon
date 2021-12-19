import react, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

function Manager_Login({ navigation }) {
          const [email, setEmail] = useState(null)
          const [password, setPassword] = useState(null)
          return (

                    <View style={styles.container}>
                              <View style={{ width: 190 }}>
                                        <Text style={{ fontSize: 20, textAlign: "center", color: "rgb(36, 149, 254)" }}>Manager Login</Text>
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
                                        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                                                  <Text style={styles.btn_txt}>Login</Text>
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

export default Manager_Login;
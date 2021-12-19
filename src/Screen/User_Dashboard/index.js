import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from "react-native";
import LOGO from '../../../assets/LogoKhanaSabkliye-01.png'
import MyComponent from '../../Component/Drop_Down'
function User_Dashboard({ navigation }) {
          return (
                    <View>
                              <View>
                                        <Image alt="" source={LOGO} style={{ height: 100, width: 100, position: "relative", left: 130 }} />
                              </View>
                              <View>
                                        <Text style={{ textAlign: "center", color: "rgb(36, 149, 254)", fontSize: 24 }}>Requirement Details</Text>
                              </View>
                              <View style={{ position: "relative", left: 80, marginTop: 20 }}>

                                        <View style={{ flexDirection: "row" }}>
                                                  <View style={{ marginTop: 20 }}>
                                                            <Text style={{ color: "rgb(36, 149, 254)" }} >Name </Text>
                                                  </View>
                                                  <View>
                                                            <TextInput onChangeText={(e) => setName(console.log(e))} style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: "rgb(36, 149, 254)", width: 150, marginTop: 15 }} />
                                                  </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                                  <View style={{ marginTop: 20 }}>
                                                            <Text style={{ color: "rgb(36, 149, 254)" }} >Mobile No </Text>
                                                  </View>
                                                  <View>
                                                            <TextInput onChangeText={(e) => setName(console.log(e))} style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: "rgb(36, 149, 254)", width: 130, marginTop: 15 }} />
                                                  </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                                  <View style={{ marginTop: 20 }}>
                                                            <Text style={{ color: "rgb(36, 149, 254)" }} >Cnic </Text>
                                                  </View>
                                                  <View>
                                                            <TextInput onChangeText={(e) => setName(console.log(e))} style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: "rgb(36, 149, 254)", width: 170, marginTop: 15 }} />
                                                  </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                                  <View style={{ marginTop: 20 }}>
                                                            <Text style={{ color: "rgb(36, 149, 254)" }} >Address </Text>
                                                  </View>
                                                  <View>
                                                            <TextInput onChangeText={(e) => setName(console.log(e))} style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: "rgb(36, 149, 254)", width: 150, marginTop: 15 }} />
                                                  </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                                  <View style={{ marginTop: 20 }}>
                                                            <Text style={{ color: "rgb(36, 149, 254)" }} >Monthly Income </Text>
                                                  </View>
                                                  <View>
                                                            <TextInput onChangeText={(e) => setName(console.log(e))} style={{ borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: "rgb(36, 149, 254)", width: 100, marginTop: 15 }} />
                                                  </View>
                                        </View>
                              </View>
                              <MyComponent />
                              <View>
                                        <TouchableOpacity onPress={()=> navigation.navigate("map")} style={styles.btn} activeOpacity={0.8}>
                                                  <Text style={styles.btn_txt}>Get Location</Text>
                                        </TouchableOpacity>
                              </View>
                    </View>
          )
}

const styles = StyleSheet.create({
          btn: {
                    height: "40px",
                    backgroundColor: "rgb(36, 149, 254)",
                    width: "200px",
                    marginTop: 15,
                    padding: 10,
                    borderRadius: 10,
                    position:"relative",
                    left:70,
                    top:70
          },
          btn_txt: {
                    color: "#fff",
                    textAlign: "center"
          }
}
)

export default User_Dashboard;

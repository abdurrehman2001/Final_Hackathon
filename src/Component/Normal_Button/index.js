import React from "react";
import { View, Text ,StyleSheet,TouchableOpacity } from "react-native";

function Normal_Button({ title }) {
          return (
                    <View>
                              <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                                        <Text style={styles.btn_txt}>{title}</Text>
                              </TouchableOpacity>
                    </View>
          )
}

const styles = StyleSheet.create({
          btn:{
                    height:"40px",
                    backgroundColor:"rgb(36, 149, 254)",
                    width:"200px",
                    marginTop:15,
                    padding:10,
                    borderRadius:10
          },
          btn_txt:{
                    color:"#fff",
                    textAlign:"center"
          }
}
)

export default Normal_Button;
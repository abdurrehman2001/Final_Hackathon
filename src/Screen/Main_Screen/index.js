import React from "react";
import { View, Text ,StyleSheet,TouchableOpacity } from "react-native";
function Main_Screen({ navigation }) {
          return (
          <View style={styles.container}>
                     <View>
                              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn} activeOpacity={0.8}>
                                        <Text style={styles.btn_txt}>User</Text>
                              </TouchableOpacity>
                    </View> 
                    <View>
                              <TouchableOpacity onPress={() => navigation.navigate('Manager Login')} style={styles.btn} activeOpacity={0.8}>
                                        <Text style={styles.btn_txt}>Manager</Text>
                              </TouchableOpacity>
                    </View>
          
          </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    position:"absolute",
                    top:250,
                    left:85
                  },
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
})
export default Main_Screen;
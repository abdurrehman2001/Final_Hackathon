import react from "react";
import { View, Text, TextInput, StyleSheet, useState } from "react-native";
function Input_Field({ title, onChange }) {
          return (
                    <>
                              <View style={{ marginBottom: 20 }}>
                                        <View>
                                                  <Text style={styles.input_txt}>{title}</Text>
                                        </View>
                                        <View style={{ width: 200 }}>
                                                  <TextInput onChangeText={onChange} style={styles.input} />
                                        </View>

                              </View>
                    </>
          )
}

const styles = StyleSheet.create({
          input: {

                    // alignSelf:"flex-start",
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomColor: "rgb(36, 149, 254)",


          },
          input_txt: {
                    // fontSize:,
                    color: "rgb(36, 149, 254)",
                    // width:20
                    // alignSelf:"flex-start"
          }
}
)
export default Input_Field;
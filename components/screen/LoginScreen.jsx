import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../Input";
import CustomButton from "../button/CustomButton";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Username" style={styles.input} />
      <Input placeholder="Password" style={styles.input} isPassword={true} />
      <TouchableOpacity
        // onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.forgotPassBtn}
      >
        <Text style={styles.forgotPassTxt}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton style={styles.signInBtn} title="SIGN IN" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginHorizontal: 32,
    marginTop: 20,
  },
  signInBtn: {
    marginHorizontal: 32,

    marginTop: 20,
  },
  forgotPassBtn: {
    alignSelf: "flex-end",
    marginRight: 31,
    marginTop: 15,
  },
  forgotPassTxt: {
    color: colors.red,
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 15,
  },
});
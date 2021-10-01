import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ style, title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: "100%" }}>
      <View
        style={[
          style,
          styles.root,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : colors.button.primary,
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    borderRadius: 30,
  },
  title: {
    paddingVertical: 22,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 17,
  },
});

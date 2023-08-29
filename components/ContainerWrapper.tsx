import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-74.png")}
        />
        <Text style={[styles.minResa, styles.textFlexBox]}>Min resa</Text>
      </View>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-75.png")}
      />
      <Text style={[styles.schema, styles.textFlexBox]}>Schema</Text>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-76.png")}
        />
        <Text style={[styles.minResa, styles.textFlexBox]}>Profil</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textFlexBox]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    alignItems: "center",
    top: 14,
    position: "absolute",
  },
  frameLayout: {
    height: 93,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 21,
  },
  frameChild: {
    width: 89,
  },
  minResa: {
    marginTop: 8,
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
  },
  frameParent: {
    left: 0,
  },
  frameItem: {
    top: 13,
    left: 111,
    width: 93,
    position: "absolute",
  },
  schema: {
    top: 105,
    left: 129,
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  frameInner: {
    width: 87,
  },
  frameGroup: {
    left: 230,
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.retreafyPurple,
    textAlign: "left",
    lineHeight: 21,
  },
  wrapper: {
    top: 0,
    left: 179,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.retreafyTextWhite,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    position: "absolute",
  },
  frame: {
    top: 152,
    left: 11,
    width: 313,
    height: 126,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ContainerWrapper;

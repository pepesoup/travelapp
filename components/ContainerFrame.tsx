import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const ContainerFrame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={[styles.frameParent, styles.framePosition]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-71.png")}
          />
          <Text style={[styles.kontakt, styles.bloggTypo]}>Kontakt</Text>
        </View>
        <View style={[styles.frameGroup, styles.framePosition]}>
          <Image
            style={[styles.frameItem, styles.wrapperLayout]}
            contentFit="cover"
            source={require("../assets/frame-72.png")}
          />
          <Text style={[styles.blogg, styles.bloggTypo]}>Blogg</Text>
        </View>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Info")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame-73.png")}
          />
        </Pressable>
        <Text style={[styles.info, styles.infoFlexBox]}>Info</Text>
        <View style={styles.container}>
          <Text style={[styles.text, styles.infoFlexBox]}>2</Text>
        </View>
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
  bloggTypo: {
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  wrapperLayout: {
    width: 93,
    height: 93,
  },
  iconLayout: {
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  infoFlexBox: {
    textAlign: "left",
    lineHeight: 21,
  },
  frameChild: {
    width: 89,
    height: 93,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  kontakt: {
    color: Color.retreafyTextBlack,
  },
  frameParent: {
    left: 0,
  },
  frameItem: {
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  blogg: {
    color: Color.systemBlack,
  },
  frameGroup: {
    left: 115,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 226,
    top: 13,
    position: "absolute",
  },
  info: {
    top: 105,
    left: 258,
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoLight,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.retreafyPurple,
    textAlign: "left",
    lineHeight: 21,
  },
  container: {
    top: 0,
    left: 294,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.retreafyTextWhite,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    position: "absolute",
  },
  frame1: {
    width: 324,
    height: 126,
    overflow: "hidden",
  },
  frame: {
    top: 296,
    width: 335,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default ContainerFrame;

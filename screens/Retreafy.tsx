import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerFrame from "../components/ContainerFrame";
import ContainerWrapper from "../components/ContainerWrapper";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Retreafy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.retreafy}>
      <View style={styles.frameLayout}>
        <View style={[styles.a, styles.aBg]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          <View style={styles.frame1}>
            <View style={styles.iosIconStatusBar}>
              <Image
                style={[styles.iosIconSmallClock, styles.iosIconLayout]}
                contentFit="cover"
                source={require("../assets/ios--icon--small--clock.png")}
              />
              <Image
                style={[styles.iosIconSmallBluetooth, styles.iosIconLayout]}
                contentFit="cover"
                source={require("../assets/ios--icon--small--bluetooth.png")}
              />
              <Image
                style={styles.iosIconSmallMobileSi}
                contentFit="cover"
                source={require("../assets/ios--icon--small--mobile-signal.png")}
              />
              <Text style={[styles.carrier, styles.timeTypo]}>Figma</Text>
              <Image
                style={styles.iosIconSmallWifi}
                contentFit="cover"
                source={require("../assets/ios--icon--small--wifi.png")}
              />
              <Text style={[styles.carrier, styles.timeTypo]}>100%</Text>
              <Image
                style={styles.iosIconSmallBattery}
                contentFit="cover"
                source={require("../assets/ios--icon--small--battery.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.retreafyParent, styles.aBg]}>
          <Text style={[styles.retreafy1, styles.textTypo]}>RETREAFY</Text>
          <Pressable
            style={[
              styles.mdibellBadgeOutline,
              styles.mdibellBadgeOutlineLayout,
            ]}
            onPress={() => navigation.navigate("Notiser")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/mdibellbadgeoutline.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.materialSymbolssettingsIcon,
              styles.mdibellBadgeOutlineLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolssettings.png")}
          />
          <View style={[styles.ellipseParent, styles.frameItemPosition]}>
            <Image
              style={[styles.frameChild, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>3</Text>
          </View>
        </View>
        <View style={[styles.dagarKvarTillResanWrapper, styles.frameLayout]}>
          <Text style={[styles.dagarKvarTill, styles.textTypo]}>
            10 Dagar kvar till resan!
          </Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <View style={[styles.frame3, styles.framePosition]}>
          <Text style={[styles.marieNilsson, styles.textTypo]}>
            Marie Nilsson
          </Text>
        </View>
        <ContainerFrame />
        <ContainerWrapper />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aBg: {
    backgroundColor: Color.retreafyPink,
    width: 393,
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  iosIconLayout: {
    width: 12,
    height: 16,
    display: "none",
  },
  textTypo: {
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    lineHeight: 21,
  },
  mdibellBadgeOutlineLayout: {
    height: 24,
    width: 24,
    top: 8,
    position: "absolute",
  },
  frameItemPosition: {
    top: 0,
    position: "absolute",
  },
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 393,
    alignItems: "center",
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -109.5,
    top: -2,
    left: "50%",
    width: 219,
    height: 30,
    display: "none",
    position: "absolute",
  },
  time: {
    left: 32,
    fontSize: FontSize.size_mini,
    color: Color.grey900,
    fontWeight: "600",
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: 13,
    position: "absolute",
  },
  iosIconSmallClock: {
    height: 16,
  },
  iosIconSmallBluetooth: {
    marginLeft: 2,
    height: 16,
  },
  iosIconSmallMobileSi: {
    width: 20,
    marginLeft: 2,
    height: 16,
  },
  carrier: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.systemBlack,
    marginLeft: 2,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    display: "none",
  },
  iosIconSmallWifi: {
    width: 16,
    marginLeft: 2,
    height: 16,
  },
  iosIconSmallBattery: {
    width: 25,
    marginLeft: 2,
    height: 16,
    overflow: "hidden",
  },
  iosIconStatusBar: {
    flexDirection: "row",
  },
  frame1: {
    left: 313,
    width: 65,
    height: 18,
    justifyContent: "flex-end",
    top: 13,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  a: {
    height: 44,
  },
  retreafy1: {
    left: 159,
    color: Color.retreafyTextWhite,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    position: "absolute",
    fontSize: FontSize.size_xl,
    top: 8,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  mdibellBadgeOutline: {
    left: 305,
  },
  materialSymbolssettingsIcon: {
    left: 337,
    overflow: "hidden",
  },
  frameChild: {
    height: "95.24%",
    top: "4.76%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  text: {
    top: "0%",
    left: "25%",
    fontSize: FontSize.size_base,
    color: Color.retreafyPurple,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    position: "absolute",
  },
  ellipseParent: {
    left: 314,
    height: 21,
    width: 20,
  },
  retreafyParent: {
    borderStyle: "solid",
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderBottomWidth: 1,
    height: 45,
  },
  dagarKvarTill: {
    color: Color.green,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
  },
  dagarKvarTillResanWrapper: {
    backgroundColor: Color.retreafyTextWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 50,
    justifyContent: "center",
  },
  frameItem: {
    left: 111,
    width: 117,
    height: 119,
  },
  marieNilsson: {
    color: Color.retreafyTextBlack,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
  },
  frame3: {
    top: 121,
    left: 106,
    width: 123,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame2: {
    width: 335,
    height: 422,
    marginTop: 24,
    overflow: "hidden",
  },
  retreafy: {
    backgroundColor: Color.retreafy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Retreafy;

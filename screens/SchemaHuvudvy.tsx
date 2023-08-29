import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationTop from "../components/NavigationTop";
import SchemaRow1 from "../components/SchemaRow1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SchemaHuvudvy = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.schemaHuvudvy, styles.aLayout]}>
      <View style={[styles.a, styles.aLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
      <NavigationTop
        schemaText="Schema"
        onMdibellBadgeOutlinePress={() => navigation.navigate("Notiser")}
        onMaterialSymbolsarrowBackRPress={() => navigation.navigate("Retreafy")}
      />
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.frameGroup, styles.frameLayout]}
          onPress={() => navigation.navigate("SchemaDetaljvy")}
        >
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>10</Text>
              <Text style={[styles.januari, styles.textTypo]}>Januari</Text>
            </View>
          </View>
          <View style={[styles.mndagParent, styles.parentFlexBox]}>
            <Text style={[styles.mndag, styles.dag1Typo]}>Måndag</Text>
            <Text style={[styles.dag1, styles.dag1Typo]}>dag 1</Text>
          </View>
        </Pressable>
        <SchemaRow1 dayNumber="11" dayLabel="Tisdag" dayName="dag 2" />
        <SchemaRow1
          dayNumber="12"
          dayLabel="Onsdag"
          dayName="dag 3"
          propPosition="relative"
          propMarginTop={24}
          propTop="unset"
          propLeft="unset"
        />
        <SchemaRow1
          dayNumber="13"
          dayLabel="Torsdag"
          dayName="dag 4"
          propPosition="relative"
          propMarginTop={24}
          propTop="unset"
          propLeft="unset"
        />
        <SchemaRow1
          dayNumber="14"
          dayLabel="Fredag"
          dayName="dag 5"
          propPosition="relative"
          propMarginTop={24}
          propTop="unset"
          propLeft="unset"
        />
        <SchemaRow1
          dayNumber="15"
          dayLabel="Lördag"
          dayName="dag 6"
          propPosition="relative"
          propMarginTop={24}
          propTop="unset"
          propLeft="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aLayout: {
    width: "100%",
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
  frameLayout: {
    height: 97,
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    color: Color.retreafyTextWhite,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 21,
  },
  dag1Typo: {
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    lineHeight: 21,
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
    top: 13,
    left: 32,
    fontSize: FontSize.size_mini,
    color: Color.grey900,
    fontWeight: "600",
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
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
    top: 15,
    right: 15,
    flexDirection: "row",
    position: "absolute",
  },
  a: {
    height: "5.16%",
    top: "0%",
    right: "0%",
    bottom: "94.84%",
    left: "0%",
    backgroundColor: Color.retreafyPink,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  januari: {
    fontSize: FontSize.size_base,
  },
  parent: {
    top: 28,
    left: 5,
  },
  frameWrapper: {
    top: 0,
    left: 1,
    borderTopLeftRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.retreafyPurple,
    width: 62,
    position: "absolute",
  },
  mndag: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  dag1: {
    marginTop: 4,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
  },
  mndagParent: {
    top: 26,
    left: 113,
  },
  frameGroup: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.retreafyTextWhite,
    borderStyle: "solid",
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderWidth: 1,
    width: 313,
  },
  frameParent: {
    top: 129,
    left: 40,
    position: "absolute",
  },
  schemaHuvudvy: {
    backgroundColor: Color.retreafy,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default SchemaHuvudvy;

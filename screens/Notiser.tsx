import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardContainerUpdateSchema from "../components/CardContainerUpdateSchema";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notiser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notiser}>
      <View style={styles.a}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <View style={[styles.iosIconStatusBar, styles.frameParentFlexBox]}>
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
      <View style={styles.notiserInner}>
        <Pressable
          style={styles.aviseringarParent}
          onPress={() => navigation.navigate("Retreafy")}
        >
          <Text style={styles.aviseringar}>Aviseringar</Text>
          <Text style={styles.stng}>Stäng</Text>
        </Pressable>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-7.png")}
        />
        <View style={styles.frameGroup}>
          <View>
            <Text style={styles.nyttInlggI}>Nytt inlägg i bloggen</Text>
            <Text style={[styles.litenBeskrivningOm, styles.majKl1900Typo]}>
              Liten beskrivning om vad det handlar om!
            </Text>
          </View>
          <Text style={styles.majKl1900Typo}>03 maj kl. 19:00</Text>
        </View>
      </View>
      <CardContainerUpdateSchema
        notificationId={require("../assets/frame-8.png")}
        scheduleUpdateText="Ny upptadering i schemat"
        scheduleTime="04 maj kl. 11:00"
        onFramePressablePress={() => navigation.navigate("SchemaDetaljvy")}
      />
      <CardContainerUpdateSchema
        notificationId={require("../assets/frame-8.png")}
        scheduleUpdateText="Ny upptadering i schemat"
        scheduleTime="04 maj kl. 11:00"
        propTop={601}
        propLeft={40}
        propBorderRadius={4}
        propOverflow="hidden"
        propMarginLeft={33}
        onFramePressablePress={() => navigation.navigate("SchemaDetaljvy")}
      />
      <CardContainerUpdateSchema
        notificationId={require("../assets/frame-9.png")}
        scheduleUpdateText="Nytt inlägg i info"
        scheduleTime="04 maj kl. 13:40"
        propTop={353}
        propLeft={39}
        propBorderRadius={4}
        propOverflow="hidden"
        propMarginLeft={34}
        onFramePressablePress={() => navigation.navigate("Info")}
      />
      <CardContainerUpdateSchema
        notificationId={require("../assets/frame-9.png")}
        scheduleUpdateText="Nytt inlägg i info"
        scheduleTime="04 maj kl. 13:40"
        propTop={725}
        propLeft={40}
        propBorderRadius={4}
        propOverflow="hidden"
        propMarginLeft={34}
        onFramePressablePress={() => navigation.navigate("Info")}
      />
      <CardContainerUpdateSchema
        notificationId={require("../assets/group-28.png")}
        scheduleUpdateText="Träningspass inställt"
        scheduleTime="05 maj kl. 15:30"
        propTop={477}
        propLeft={40}
        propOverflow="unset"
        propMarginLeft={33}
        onFramePressablePress={() => navigation.navigate("SchemaDetaljvy")}
      />
      <View style={[styles.notiserChild, styles.notiserChildLayout]} />
      <View style={[styles.notiserItem, styles.notiserChildPosition]} />
      <View style={[styles.lineView, styles.notiserChildLayout]} />
      <View style={[styles.notiserChild1, styles.notiserChildLayout]} />
      <View style={[styles.notiserChild2, styles.notiserChildPosition]} />
      <View style={[styles.notiserChild3, styles.notiserChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iosIconLayout: {
    width: 12,
    height: 16,
    display: "none",
  },
  majKl1900Typo: {
    marginTop: 4,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    color: Color.retreafyTextBlack,
    textAlign: "left",
    lineHeight: 21,
  },
  notiserChildLayout: {
    height: 1,
    width: 394,
    borderTopWidth: 1,
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  notiserChildPosition: {
    left: -1,
    height: 1,
    width: 394,
    borderTopWidth: 1,
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderStyle: "solid",
    position: "absolute",
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
    width: "100%",
  },
  aviseringar: {
    top: 8,
    left: 167,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.retreafyTextWhite,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    lineHeight: 21,
    position: "absolute",
  },
  stng: {
    top: 14,
    left: 16,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    color: Color.retreafyTextWhite,
    textAlign: "left",
    position: "absolute",
  },
  aviseringarParent: {
    top: 0,
    borderBottomWidth: 1,
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderStyle: "solid",
    height: 45,
    width: 393,
    left: 0,
    backgroundColor: Color.retreafyPink,
    position: "absolute",
    overflow: "hidden",
  },
  notiserInner: {
    top: 44,
    height: 45,
    width: 393,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    width: 84,
    height: 84,
    overflow: "hidden",
  },
  nyttInlggI: {
    color: Color.retreafyTextBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 21,
  },
  litenBeskrivningOm: {
    width: 206,
  },
  frameGroup: {
    marginLeft: 33,
  },
  frameParent: {
    top: 105,
    left: 40,
    alignItems: "center",
  },
  notiserChild: {
    top: 213,
  },
  notiserItem: {
    top: 337,
  },
  lineView: {
    top: 461,
  },
  notiserChild1: {
    top: 585,
  },
  notiserChild2: {
    top: 709,
  },
  notiserChild3: {
    top: 833,
  },
  notiser: {
    backgroundColor: Color.retreafy,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notiser;

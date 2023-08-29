import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationTop from "../components/NavigationTop";
import SchemaRow1 from "../components/SchemaRow1";
import CardContainerWalk from "../components/CardContainerWalk";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const SchemaDetaljvy = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.schemaDetaljvy, styles.aLayout]}>
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
        propBorderColor="rgba(15, 15, 15, 0.1)"
        propLeft={167}
        propLeft1={12}
        onMdibellBadgeOutlinePress={() => navigation.navigate("Notiser")}
        onMaterialSymbolsarrowBackRPress={() =>
          navigation.navigate("SchemaHuvudvy")
        }
      />
      <SchemaRow1
        dayNumber="10"
        dayLabel="Måndag"
        dayName="dag 1"
        propPosition="absolute"
        propMarginTop="unset"
        propTop={129}
        propLeft={40}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <CardContainerWalk
          timeSlotLabel="08:00"
          imageId={require("../assets/group-10.png")}
          activityLabel="Morgonpromenad"
        />
        <CardContainerWalk
          timeSlotLabel="08:30"
          imageId={require("../assets/group-11.png")}
          activityLabel="Frukost"
          propTop={112}
          propLeft={0}
        />
        <CardContainerWalk
          timeSlotLabel="10:30"
          imageId={require("../assets/group-13.png")}
          activityLabel="Yoga"
          propTop={200}
          propLeft={1}
        />
        <CardContainerWalk
          timeSlotLabel="12:30"
          imageId={require("../assets/group-11.png")}
          activityLabel="Lunch"
          propTop={288}
          propLeft={0}
        />
        <CardContainerWalk
          timeSlotLabel="19:00"
          imageId={require("../assets/group-11.png")}
          activityLabel="Gemensam middag"
          propTop={552}
          propLeft={0}
        />
        <CardContainerWalk
          timeSlotLabel="15:30"
          imageId={require("../assets/group-16.png")}
          activityLabel={`Smart träning med
Mårten`}
          propTop={376}
          propLeft={1}
        />
        <CardContainerWalk
          timeSlotLabel="17:30"
          imageId={require("../assets/group-20.png")}
          activityLabel={`Föreläsning med
Mårten`}
          propTop={464}
          propLeft={0}
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
  groupChildLayout: {
    height: 24,
    width: 6,
    backgroundColor: Color.retreafyTextWhite,
    left: 102,
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
    lineHeight: 21,
    fontWeight: "600",
    color: Color.grey900,
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
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 88,
  },
  groupInner: {
    top: 176,
  },
  rectangleView: {
    top: 264,
  },
  groupChild1: {
    top: 352,
  },
  groupChild2: {
    top: 440,
  },
  groupChild3: {
    top: 528,
  },
  rectangleParent: {
    top: 226,
    left: 40,
    width: 295,
    height: 616,
    position: "absolute",
  },
  schemaDetaljvy: {
    backgroundColor: Color.retreafy,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default SchemaDetaljvy;

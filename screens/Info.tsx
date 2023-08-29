import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationTop from "../components/NavigationTop";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Info = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.info, styles.aLayout]}>
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
        schemaText="Info"
        propBorderColor="rgba(0, 0, 0, 0.1)"
        propLeft={159}
        propLeft1={16}
        onMdibellBadgeOutlinePress={() => navigation.navigate("Notiser")}
        onMaterialSymbolsarrowBackRPress={() => navigation.navigate("Retreafy")}
      />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={styles.sakerDuBordeHaMedPResanParent}>
          <Text
            style={styles.sakerDuBorde}
          >{`5 saker du borde ha med på resan ! `}</Text>
          <Text style={[styles.thereAreMany, styles.lsMerTypo]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
        </View>
        <Text style={[styles.lsMer, styles.lsMerTypo]}>Läs mer</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameParentLayout]}>
        <View style={styles.sakerDuBordeHaMedPResanParent}>
          <Text
            style={styles.sakerDuBorde}
          >{`Så vet du att du har bra träningskor ! `}</Text>
          <Text style={[styles.thereAreMany, styles.lsMerTypo]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
        </View>
        <Text style={[styles.lsMer, styles.lsMerTypo]}>Läs mer</Text>
      </View>
      <View style={[styles.frameContainer, styles.frameParentLayout]}>
        <View style={styles.sakerDuBordeHaMedPResanParent}>
          <Text style={styles.sakerDuBorde}>
            Vad du borde tänka på inför resan !
          </Text>
          <Text style={[styles.thereAreMany, styles.lsMerTypo]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
        </View>
        <Text style={[styles.lsMer, styles.lsMerTypo]}>Läs mer</Text>
      </View>
      <View style={[styles.frameView, styles.frameParentLayout]}>
        <View style={styles.sakerDuBordeHaMedPResanParent}>
          <Text
            style={styles.sakerDuBorde}
          >{`5 saker du borde ha med på resan `}</Text>
          <Text style={[styles.thereAreMany, styles.lsMerTypo]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
        </View>
        <Text style={[styles.lsMer, styles.lsMerTypo]}>Läs mer</Text>
      </View>
      <View style={[styles.frameParent1, styles.frameParentLayout]}>
        <View style={styles.sakerDuBordeHaMedPResanParent}>
          <Text style={styles.sakerDuBorde}>
            Så vet du om du har bra träningskor !
          </Text>
          <Text style={[styles.thereAreMany, styles.lsMerTypo]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Text>
        </View>
        <Text style={[styles.lsMer, styles.lsMerTypo]}>Läs mer</Text>
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
  frameParentLayout: {
    height: 128,
    width: 313,
    backgroundColor: Color.retreafyTextWhite,
    borderRadius: Border.br_9xs,
    left: 40,
    position: "absolute",
    overflow: "hidden",
  },
  lsMerTypo: {
    fontSize: FontSize.size_sm,
    color: Color.retreafyTextBlack,
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
  sakerDuBorde: {
    fontSize: FontSize.size_base,
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 21,
  },
  thereAreMany: {
    fontFamily: FontFamily.latoRegular,
    width: 289,
    marginTop: 16,
  },
  sakerDuBordeHaMedPResanParent: {
    top: 8,
    left: 18,
    width: 277,
    position: "absolute",
  },
  lsMer: {
    top: 99,
    left: 256,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameParent: {
    top: 129,
  },
  frameGroup: {
    top: 281,
  },
  frameContainer: {
    top: 433,
  },
  frameView: {
    top: 585,
  },
  frameParent1: {
    top: 737,
  },
  info: {
    backgroundColor: Color.retreafy,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default Info;

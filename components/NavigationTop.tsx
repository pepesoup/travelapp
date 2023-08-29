import React, { useMemo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type NavigationTopType = {
  schemaText?: string;

  /** Style props */
  propBorderColor?: string;
  propLeft?: number | string;
  propLeft1?: number | string;

  /** Action props */
  onMdibellBadgeOutlinePress?: () => void;
  onMaterialSymbolsarrowBackRPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavigationTop = ({
  schemaText,
  propBorderColor,
  propLeft,
  propLeft1,
  onMdibellBadgeOutlinePress,
  onMaterialSymbolsarrowBackRPress,
}: NavigationTopType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const schemaStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const materialSymbolsarrowBackRoStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.schemaHuvudvyInner, styles.schemaLayout]}>
      <View style={[styles.schemaParent, styles.schemaLayout, frameViewStyle]}>
        <Text style={[styles.schema, schemaStyle]}>{schemaText}</Text>
        <Pressable
          style={[styles.mdibellBadgeOutline, styles.materialLayout]}
          onPress={onMdibellBadgeOutlinePress}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/mdibellbadgeoutline.png")}
          />
        </Pressable>
        <Image
          style={[styles.materialSymbolssettingsIcon, styles.materialLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolssettings.png")}
        />
        <Pressable
          style={[
            styles.materialSymbolsarrowBackRo,
            styles.materialLayout,
            materialSymbolsarrowBackRoStyle,
          ]}
          onPress={onMaterialSymbolsarrowBackRPress}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/materialsymbolsarrowbackrounded.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  schemaLayout: {
    height: 45,
    width: 393,
    left: 0,
    position: "absolute",
  },
  materialLayout: {
    height: 24,
    width: 24,
    top: 8,
    position: "absolute",
  },
  schema: {
    left: 159,
    fontSize: FontSize.size_xl,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.retreafyTextWhite,
    textAlign: "left",
    top: 8,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  mdibellBadgeOutline: {
    left: 305,
  },
  materialSymbolssettingsIcon: {
    left: 337,
    overflow: "hidden",
  },
  materialSymbolsarrowBackRo: {
    left: 16,
  },
  schemaParent: {
    top: 0,
    backgroundColor: Color.retreafyPink,
    borderStyle: "solid",
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderBottomWidth: 1,
    overflow: "hidden",
  },
  schemaHuvudvyInner: {
    top: 44,
  },
});

export default NavigationTop;

import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type SchemaRow1Type = {
  dayNumber?: string;
  dayLabel?: string;
  dayName?: string;

  /** Style props */
  propPosition?: string;
  propMarginTop?: number | string;
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SchemaRow1 = ({
  dayNumber,
  dayLabel,
  dayName,
  propPosition,
  propMarginTop,
  propTop,
  propLeft,
}: SchemaRow1Type) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propPosition, propMarginTop, propTop, propLeft]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={styles.frameWrapper}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{dayNumber}</Text>
          <Text style={[styles.januari, styles.textTypo]}>Januari</Text>
        </View>
      </View>
      <View style={[styles.tisdagParent, styles.parentFlexBox]}>
        <Text style={[styles.tisdag, styles.dag2Typo]}>{dayLabel}</Text>
        <Text style={[styles.dag2, styles.dag2Typo]}>{dayName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.retreafyTextWhite,
    fontFamily: FontFamily.latoBold,
    lineHeight: 21,
    fontWeight: "600",
  },
  dag2Typo: {
    color: Color.retreafyTextBlack,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    lineHeight: 21,
  },
  text: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.retreafyTextWhite,
    fontFamily: FontFamily.latoBold,
    lineHeight: 21,
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
    overflow: "hidden",
    height: 97,
  },
  tisdag: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  dag2: {
    marginTop: 4,
    fontWeight: "600",
    color: Color.retreafyTextBlack,
    fontSize: FontSize.size_xl,
  },
  tisdagParent: {
    top: 26,
    left: 113,
  },
  frameParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.retreafyTextWhite,
    borderStyle: "solid",
    borderColor: "rgba(15, 15, 15, 0.1)",
    borderWidth: 1,
    width: 313,
    marginTop: 24,
    overflow: "hidden",
    height: 97,
  },
});

export default SchemaRow1;

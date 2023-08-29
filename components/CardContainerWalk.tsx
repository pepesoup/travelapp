import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

type CardContainerWalkType = {
  timeSlotLabel?: string;
  imageId?: ImageSourcePropType;
  activityLabel?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainerWalk = ({
  timeSlotLabel,
  imageId,
  activityLabel,
  propTop,
  propLeft,
}: CardContainerWalkType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.frameParent, styles.parentFlexBox, frameView2Style]}>
      <View style={styles.parentFlexBox}>
        <Text style={[styles.text, styles.textTypo]}>{timeSlotLabel}</Text>
        <Image style={styles.frameChild} contentFit="cover" source={imageId} />
      </View>
      <Text style={[styles.morgonpromenad, styles.textTypo]}>
        {activityLabel}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    color: Color.retreafyTextBlack,
    fontFamily: FontFamily.latoBold,
    lineHeight: 21,
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    height: 25,
    width: 64,
  },
  frameChild: {
    height: 64,
    marginLeft: 8,
    width: 64,
  },
  morgonpromenad: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    marginLeft: 24,
  },
  frameParent: {
    position: "absolute",
    top: 24,
    left: 1,
  },
});

export default CardContainerWalk;

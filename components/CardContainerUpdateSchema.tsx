import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

type CardContainerUpdateSchemaType = {
  notificationId?: ImageSourcePropType;
  scheduleUpdateText?: string;
  scheduleTime?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propBorderRadius?: number | string;
  propOverflow?: string;
  propMarginLeft?: number | string;

  /** Action props */
  onFramePressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainerUpdateSchema = ({
  notificationId,
  scheduleUpdateText,
  scheduleTime,
  propTop,
  propLeft,
  propBorderRadius,
  propOverflow,
  propMarginLeft,
  onFramePressablePress,
}: CardContainerUpdateSchemaType) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const frameIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propBorderRadius, propOverflow]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <Pressable
      style={[styles.frameParent, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <Image
        style={[styles.frameChild, frameIconStyle]}
        contentFit="cover"
        source={notificationId}
      />
      <View style={[styles.frameGroup, frameView3Style]}>
        <View>
          <Text style={styles.nyUpptaderingI}>{scheduleUpdateText}</Text>
          <Text style={[styles.litenBeskrivningOm, styles.majKl1100Typo]}>
            Liten beskrivning om vad det handlar om!
          </Text>
        </View>
        <Text style={styles.majKl1100Typo}>{scheduleTime}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  majKl1100Typo: {
    marginTop: 4,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.retreafyTextBlack,
    lineHeight: 21,
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    width: 84,
    height: 84,
    overflow: "hidden",
  },
  nyUpptaderingI: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    color: Color.retreafyTextBlack,
    lineHeight: 21,
  },
  litenBeskrivningOm: {
    width: 206,
  },
  frameGroup: {
    marginLeft: 33,
  },
  frameParent: {
    position: "absolute",
    top: 229,
    left: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CardContainerUpdateSchema;

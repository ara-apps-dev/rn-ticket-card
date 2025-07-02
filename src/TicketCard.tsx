import React, { useCallback, useState } from "react";
import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import Svg, { Defs, G, Path, Filter, FeDropShadow } from "react-native-svg";
import { TicketCardProps } from "./types";
import { buildPath } from "./buildPath";
import { styles } from "./styles";

export const TicketCard: React.FC<TicketCardProps> = ({
  width: fixedWidth,
  height: fixedHeight,
  backgroundColor = "#fff",
  borderRadius,
  padding = 16,
  notches = [],
  shadowProps = {},
  containerStyles,
  children,
}) => {
  const [contentSize, setContentSize] = React.useState<{
    width?: number;
    height?: number;
  }>({});

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      if (!fixedWidth || !fixedHeight) {
        const { width, height } = e.nativeEvent.layout;
        setContentSize({ width, height });
      }
    },
    [fixedWidth, fixedHeight]
  );

  const finalWidth = fixedWidth ?? contentSize.width ?? 0;
  const finalHeight = fixedHeight ?? contentSize.height ?? 0;

  const path = buildPath(finalWidth, finalHeight, borderRadius, notches);

  const {
    dx = 0,
    dy = 3,
    stdDeviation = 3,
    floodColor = "#000",
    floodOpacity = 0.15,
  } = shadowProps;

  return (
    <View style={[styles.container, { padding }]}>
      {finalWidth && finalHeight && (
        <Svg
          width={finalWidth + padding * 2}
          height={finalHeight + padding * 2}
          viewBox={`-${padding} -${padding} ${finalWidth + padding * 2} ${
            finalHeight + padding * 2
          }`}
          style={StyleSheet.absoluteFill}
        >
          <Defs>
            <Filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <FeDropShadow
                dx={dx}
                dy={dy}
                stdDeviation={stdDeviation}
                floodColor={floodColor}
                floodOpacity={floodOpacity}
              />
            </Filter>
          </Defs>
          <G filter="url(#shadow)">
            <Path d={path} fill={backgroundColor} />
          </G>
        </Svg>
      )}

      <View
        style={[
          styles.content,
          { width: fixedWidth ?? undefined },
          { height: fixedHeight ?? undefined },
          containerStyles,
        ]}
        onLayout={onLayout}
      >
        {children}
      </View>
    </View>
  );
};

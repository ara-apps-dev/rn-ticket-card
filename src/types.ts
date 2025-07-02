import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type NotchPosition =
  | "topIn"
  | "topOut"
  | "bottomIn"
  | "bottomOut"
  | "leftIn"
  | "leftOut"
  | "rightIn"
  | "rightOut";

export type Notch = {
  size: number;
  placement: NotchPosition;
  offset: number;
};

export type RadiusProps = {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type TicketCardShadow = {
  dx?: number;
  dy?: number;
  stdDeviation?: number;
  floodColor?: string;
  floodOpacity?: number;
};

export type TicketCardProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius: RadiusProps;
  notches?: Notch[];
  padding?: number;
  shadowProps?: TicketCardShadow;
  containerStyles?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

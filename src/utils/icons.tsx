/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import Svg, {
  Path,
  Rect,
  Circle,
  G,
  Defs,
  ClipPath,
  Pattern,
  Use,
  Image,
  LinearGradient,
  Stop,
} from "react-native-svg";

export function Mail3Icon({ stroke = "#667085" }: { stroke?: string }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.666 5.833 5.994 8.72c.25.166.375.25.51.308.12.053.245.09.374.114.145.026.295.026.595.026h5.052c.3 0 .45 0 .595-.026.13-.023.255-.061.375-.114.135-.058.26-.142.51-.308l4.328-2.886M5.666 16.667h8.667c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635V7.333c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273H5.666c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092c-.272.535-.272 1.235-.272 2.635v5.334c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092c.535.273 1.235.273 2.635.273Z"
      />
    </Svg>
  );
}

export function HomeIcon({
  style,
  size = 32,
  solid,
  fill = "#fff",
}: {
  style?: StyleProp<ViewStyle>;
  size?: string | number;
  solid?: boolean;
  fill?: string;
}) {
  return (
    <Svg width={24} height={24} fill="none">
      <G clipPath="url(#a)">
        <Path
          fill={fill}
          fillOpacity={0.95}
          d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9Zm-9-7v6h2v-6h-2Z"
        />
      </G>
    </Svg>
  );
}

export function MoreIcon({
  style,
  size = 32,
  solid,
  fill = "#fff",
}: {
  style?: StyleProp<ViewStyle>;
  size?: string | number;
  solid?: boolean;
  fill?: string;
}) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill={fill}
        fillOpacity={0.95}
        d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9Zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9ZM11 3v7.999H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8Z"
      />
    </Svg>
  );
}

export function NotificationIcon() {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fill="#000"
        d="M13.333 11.334h1.333v1.333H1.333v-1.333h1.333V6.667a5.333 5.333 0 1 1 10.667 0v4.667ZM6 14.001h4v1.333H6v-1.333Z"
      />
    </Svg>
  );
}

export function BookIcon() {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill="#000"
        d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15Zm0 0h2v2h-2v-2Z"
      />
    </Svg>
  );
}

export function ContactIcon() {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill="#000"
        d="M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2v-2H6a1 1 0 0 0 0 2h13Zm-7-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3 4h6a3 3 0 0 0-6 0Z"
      />
    </Svg>
  );
}

export function ArrowDown() {
  return (
    <Svg width={23} height={23} fill="none">
      <Path
        fill="#000"
        d="M11.687 16.695a.667.667 0 0 1 0-1.333h3.105l-8.29-8.29a.667.667 0 1 1 .942-.943l8.29 8.29v-3.104a.667.667 0 0 1 1.334 0v4.714a.667.667 0 0 1-.667.666h-4.714Z"
      />
    </Svg>
  );
}

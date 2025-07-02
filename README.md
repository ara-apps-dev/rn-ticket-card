![Banner](https://raw.githubusercontent.com/ara-apps-dev/rn-ticket-card/assets/banner.png)

<p>
  <!-- left -->
   <!-- Project-specific badges -->
  <a href="https://www.npmjs.com/package/rn-ticket-card">
    <img src="https://img.shields.io/npm/v/rn-ticket-card.svg?style=flat&color=cb3837&logo=npm" alt="npm version">
  </a>
  <a href="https://bundlephobia.com/package/rn-ticket-card">
    <img src="https://img.shields.io/bundlephobia/minzip/rn-ticket-card?style=flat&label=size&logo=webpack" alt="Bundle Size">
  </a>
   <img src="https://img.shields.io/github/last-commit/ara-apps-dev/rn-ticket-card?style=flat&logo=github" alt="Last Commit">
   <img src="https://img.shields.io/npm/l/rn-ticket-card?style=flat&color=blue" alt="License">
  <a href="https://github.com/ara-apps-dev/rn-ticket-card">
    <img src="https://img.shields.io/github/stars/ara-apps-dev/rn-ticket-card?style=flat&logo=github" alt="GitHub stars">
  </a>
    <a  href="https://github.com/ara-apps-dev/rn-ticket-card/issues">
      <img src="https://img.shields.io/github/issues/ara-apps-dev/rn-ticket-card?style=flat" alt="GitHub issues"  >
    </a>

  <!-- right -->
  <span>
    <a href="https://www.npmjs.com/package/rn-ticket-card">
      <img src="https://img.shields.io/npm/dm/rn-ticket-card?style=flat&color=orange&logo=npm" alt="Monthly Downloads" align="right">
    </a>
    <img src="https://raw.githubusercontent.com/ara-apps-dev/rn-ticket-card/assets/circle.svg" alt="Circle Icon" align="right" width="5" height="1" />
  <a href="https://www.npmjs.com/package/rn-ticket-card">
    <img src="https://img.shields.io/npm/dt/rn-ticket-card?style=flat&color=orange&logo=npm" alt="Total Downloads" align="right">
  </a>
  </span>
</p>

# 🧾 rn-ticket-card

A customizable **SVG ticket-shaped card component** for React Native, with support for rounded corners and notches (inward or outward) on all sides. Perfect for designing event tickets, boarding passes, vouchers, and more.

---

## 🖼️ Preview

Here’s a sample of what rn-ticket-card looks like:

<p align="center"> <img src="https://raw.githubusercontent.com/ara-apps-dev/rn-ticket-card/assets/ticket-example.png" alt="Ticket Card Example" width="730" /> </p>
✈️ Example of a flight boarding pass style using rn-ticket-card.

---

## ✨ Features

- 🎟️ Custom ticket shape with rounded corners
- ➖ Inward & outward notches on all 4 sides
- 🎨 Fully customizable width, height, padding, and background
- 🌑 Built-in drop shadow (editable)
- ⚙️ Lightweight and tree-shakable
- 🧩 Built using `react-native-svg` — cross-platform compatible

---

## 📦 Installation

```sh
pnpm add rn-ticket-card
# or
npm install rn-ticket-card
# or
yarn add rn-ticket-card
```

Make sure you have [`react-native-svg`](https://github.com/software-mansion/react-native-svg) installed and linked.

---

## 🚀 Usage

```tsx
import React from "react";
import { TicketCard } from "rn-ticket-card";

export default function MyComponent() {
  return (
    <TicketCard
      width={320}
      height={180}
      backgroundColor="#fff"
      borderRadius={{
        topLeft: 16,
        topRight: 16,
        bottomLeft: 16,
        bottomRight: 16,
      }}
      notches={[
        { size: 16, placement: "topIn", offset: 60 },
        { size: 16, placement: "bottomIn", offset: 60 },
        { size: 16, placement: "bottomOut", offset: 122 },
        { size: 16, placement: "leftIn", offset: 60 },
        { size: 16, placement: "rightIn", offset: 60 },
      ]}
      padding={16}
    >
      {/* Your ticket content goes here */}
    </TicketCard>
  );
}
```

---

## 📐 Props

| Prop              | Type                                             | Description                             |
| ----------------- | ------------------------------------------------ | --------------------------------------- |
| `width`           | `number`                                         | Width of the card                       |
| `height`          | `number`                                         | Height of the card                      |
| `backgroundColor` | `string`                                         | Background fill color (default: `#fff`) |
| `borderRadius`    | `{ topLeft, topRight, bottomLeft, bottomRight }` | Per-corner radius in px                 |
| `notches`         | `Notch[]`                                        | Optional array of notches               |
| `padding`         | `number`                                         | Padding around the SVG (default: `16`)  |
| `children`        | `ReactNode`                                      | Content inside the card                 |

### Notch type

```ts
type NotchPosition =
  | "topIn"
  | "topOut"
  | "bottomIn"
  | "bottomOut"
  | "leftIn"
  | "leftOut"
  | "rightIn"
  | "rightOut";

type Notch = {
  size: number;
  placement: NotchPosition;
  offset: number; // x or y based on side
};
```

---

## 🛠 Shadow Customization

You can customize the shadow by editing the `FeDropShadow` component inside the SVG. Future versions may expose shadow props directly.

---

## 📄 License

Licensed under the **MIT License**.

---

> Created by [Ara Apps Dev](https://github.com/ara-apps-dev)

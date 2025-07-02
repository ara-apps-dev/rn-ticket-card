import { Notch, RadiusProps } from "./types";

function arc(
  rx: number,
  ry: number,
  largeArc: number,
  sweep: number,
  x: number,
  y: number
) {
  return `A${rx},${ry} 0 ${largeArc},${sweep} ${x},${y}`;
}

export function buildPath(
  width: number,
  height: number,
  r: RadiusProps,
  notches: Notch[] = []
): string {
  let p = "";

  const findNotch = (side: string) =>
    notches.filter((n) => n.placement.startsWith(side));

  const topNotches = findNotch("top");
  const bottomNotches = findNotch("bottom");
  const rightNotches = findNotch("right");
  const leftNotches = findNotch("left");

  // Start from top-left
  p += `M0,${r.topLeft} `;
  p += arc(r.topLeft, r.topLeft, 0, 1, r.topLeft, 0) + " ";

  // ───── Top Side ─────
  if (topNotches.length) {
    topNotches.forEach((n) => {
      const x = n.offset;
      const isIn = n.placement.endsWith("In");
      const sweep = isIn ? 0 : 1;
      const largeArc = isIn ? 1 : 0;
      p += `L${x - n.size},0 `;
      p += arc(n.size, n.size, largeArc, sweep, x + n.size, 0) + " ";
    });
    p += `L${width - r.topRight},0 `;
  } else {
    p += `H${width - r.topRight} `;
  }

  p += arc(r.topRight, r.topRight, 0, 1, width, r.topRight) + " ";

  // ───── Right Side ─────
  if (rightNotches.length) {
    rightNotches.forEach((n) => {
      const y = n.offset;
      const isIn = n.placement.endsWith("Out");
      const sweep = isIn ? 1 : 0;
      const largeArc = isIn ? 1 : 0;
      p += `L${width},${y - n.size} `;
      p += arc(n.size, n.size, largeArc, sweep, width, y + n.size) + " ";
    });
    p += `L${width},${height - r.bottomRight} `;
  } else {
    p += `V${height - r.bottomRight} `;
  }

  p +=
    arc(r.bottomRight, r.bottomRight, 0, 1, width - r.bottomRight, height) +
    " ";

  // ───── Bottom Side ─────
  if (bottomNotches.length) {
    bottomNotches.forEach((n) => {
      const x = n.offset;
      const isIn = n.placement.endsWith("Out");
      const sweep = isIn ? 1 : 0;
      const largeArc = isIn ? 1 : 0;
      p += `L${x + n.size},${height} `;
      p += arc(n.size, n.size, largeArc, sweep, x - n.size, height) + " ";
    });
    p += `L${r.bottomLeft},${height} `;
  } else {
    p += `H${r.bottomLeft} `;
  }

  p += arc(r.bottomLeft, r.bottomLeft, 0, 1, 0, height - r.bottomLeft) + " ";

  // ───── Left Side ─────
  if (leftNotches.length) {
    leftNotches.forEach((n) => {
      const y = n.offset;
      const isIn = n.placement.endsWith("In");
      const sweep = isIn ? 0 : 1;
      const largeArc = isIn ? 1 : 0;
      p += `L0,${y + n.size} `;
      p += arc(n.size, n.size, largeArc, sweep, 0, y - n.size) + " ";
    });
    p += `L0,${r.topLeft} `;
  } else {
    p += `V${r.topLeft} `;
  }

  p += "Z";
  return p;
}

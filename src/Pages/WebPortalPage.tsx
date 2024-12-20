import ZoomMap from "Components/Portal/ZoomMap";
import PageHeader from "Global/PageHeader";
import InputRow from "Global/RowInput/RowInput";
import { useState } from "react";
const data2 = [
  { enbale: true, sender: true, x: -10599, y: 75, z: -1729, name: "MAIN" },
  { enbale: true, sender: false, x: -1326, y: 53, z: -222, name: "MAIN" },
  { enbale: true, sender: true, x: -10563, y: 65, z: -1697, name: "DYE" },
  { enbale: true, sender: false, x: -1328, y: 45, z: -208, name: "DYE" },
  { enbale: true, sender: true, x: -10663, y: 33, z: -2417, name: "END" },
  { enbale: true, sender: false, x: -1335, y: 61, z: -297, name: "END" },
  { enbale: true, sender: true, x: -10457, y: 72, z: -923, name: "CITY" },
  { enbale: true, sender: false, x: -1303, y: 74, z: -115, name: "CITY" },
  { enbale: true, sender: true, x: -10164, y: 61, z: -1056, name: "INK" },
  { enbale: true, sender: false, x: -1267, y: 50, z: -132, name: "INK" },
  { enbale: true, sender: true, x: -10680, y: 56, z: -2171, name: "PAPER" },
  { enbale: true, sender: false, x: -1337, y: 56, z: -274, name: "PAPER" },
  { enbale: true, sender: true, x: -10672, y: 97, z: -2144, name: "R" },
  { enbale: true, sender: false, x: -1335, y: 129, z: -268, name: "R" },
  { enbale: true, sender: false, x: -1322, y: 55, z: -117, name: "OLD CITY" },
  { enable: true, sender: true, x: 931, y: 65, z: 516, name: "MAIN" },
  { enable: true, sender: false, x: 114, y: 88, z: 58, name: "MAIN" },
  { enable: true, sender: false, x: 125, y: 128, z: 62, name: "ROOF" },
  { enable: true, sender: true, x: 930, y: 111, z: 530, name: "ROOF" },
];

function OWtoNether2(data) {
  return data.map((point) => {
    if (!point.sender) {
      return {
        ...point,
        x: point.x,
        y: point.z,
        z: point.y,
      };
    } else {
      return {
        ...point,
        x: Math.floor(point.x / 8),
        y: Math.floor(point.z / 8),
        z: point.y,
      };
    }
  });
}

function NethertoOW(data) {
  return data.map((point) => {
    if (!point.sender) {
      return {
        ...point,
        x: point.x * 8,
        y: point.z * 8,
        z: point.y,
        sender: !point.sender,
      };
    } else {
      return {
        ...point,
        x: point.x,
        y: point.z,
        z: point.y,
        sender: !point.sender,
      };
    }
  });
}

// function OWtoNether(data) {
//   return data.map((point) => ({
//     ...point,
//     x: point.x,
//     y: point.z,
//     z: point.y,
//   }));
// }

export default function WebPortalPage() {
  const [data, setData] = useState(data2);

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
      <div style={{ width: "100%", position: "relative", top: 0 }}>
        <PageHeader />
      </div>
      <div style={{ padding: "1rem" }}>
        <InputRow data={data2} />

        <div style={{ gap: "1rem" }}>
          <ZoomMap data={OWtoNether2(data)} type="OW" />
          <ZoomMap data={NethertoOW(data)} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

// function OWtoNether2(data) {
//   return data
//     .filter((point) => point.enable) // Keep only enabled points
//     .flatMap((point) => {
//       const originalPoint = { ...point }; // Original point

//       const multipliedPoint = {
//         ...point,
//         name: point.name + "'", // Mark the multiplied point with '
//         x: point.x * 8,
//         z: point.z * 8,
//       };

//       // Return both the original and multiplied point if sender is true or false
//       return [originalPoint, multipliedPoint];
//     });
// }

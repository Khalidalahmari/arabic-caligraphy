"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Pattern({ ...props }: Props) {
  const [strokeOpacity, setStrokeOpacity] = useState(1);
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true });
  const parent = {
    hidden: { rotate: 360 },
    show: {
      rotate: isInView ? 0 : 360,
      transition: {
        duration: 6,
        type: "spring",
        damping: 50,
        stiffness: 100,
      },
    },
  };
  return (
    <div {...props}>
      <motion.svg
        ref={ref}
        variants={parent}
        initial="hidden"
        animate="show"
        stroke={"2px"}
        className={`h-full w-full max-w-full stroke-almondFrost-600`}
        strokeDasharray={"100%"}
        strokeDashoffset={"100%"} //0-->900
        strokeWidth={2}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2000 2000"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="577.01"
            y1="1337.07"
            x2="712.79"
            y2="1337.07"
            gradientTransform="translate(-325.45 -575.16) rotate(-12.03)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#9c9089" />
            <stop offset=".12" stopColor="#9c9089" stopOpacity=".94" />
            <stop offset=".32" stopColor="#9c9089" stopOpacity=".79" />
            <stop offset=".57" stopColor="#9c9089" stopOpacity=".53" />
            <stop offset=".86" stopColor="#9c9089" stopOpacity=".19" />
            <stop offset="1" stopColor="#9c9089" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="1666.99"
            y1="1655.49"
            x2="1705.07"
            y2="1655.49"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="1365.29"
            y1="1431.97"
            x2="1403.37"
            y2="1431.97"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="1188.75"
            y1="1373.86"
            x2="1226.83"
            y2="1373.86"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-5"
            x1="1181.25"
            y1="1119.14"
            x2="1219.33"
            y2="1119.14"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-6"
            x1="1263.4"
            y1="1149.18"
            x2="1301.48"
            y2="1149.18"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-7"
            x1="1397.87"
            y1="1434.87"
            x2="1435.95"
            y2="1434.87"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-8"
            x1="1556.54"
            y1="1487.9"
            x2="1594.62"
            y2="1487.9"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-9"
            x1="1415.71"
            y1="1662.63"
            x2="1741.19"
            y2="1662.63"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-10"
            x1="1446.66"
            y1="1859.3"
            x2="1696.28"
            y2="1859.3"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-11"
            x1="1478.09"
            y1="1993.5"
            x2="1692.41"
            y2="1993.5"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-12"
            x1="1605.81"
            y1="2124.16"
            x2="1651.54"
            y2="2124.16"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-13"
            x1="1425.13"
            y1="1959.89"
            x2="1470.86"
            y2="1959.89"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-14"
            x1="1514.31"
            y1="1981.51"
            x2="1560.04"
            y2="1981.51"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-15"
            x1="1499.24"
            y1="1810.72"
            x2="1544.97"
            y2="1810.72"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-16"
            x1="1676.96"
            y1="1876.57"
            x2="1722.69"
            y2="1876.57"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-17"
            x1="1663.27"
            y1="2008.74"
            x2="1708.99"
            y2="2008.74"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-18"
            x1="1368.48"
            y1="2132.32"
            x2="1638.64"
            y2="2132.32"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-19"
            x1="1512.51"
            y1="2245.98"
            x2="1549.43"
            y2="2245.98"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-20"
            x1="1543.63"
            y1="2250.15"
            x2="1582.63"
            y2="2250.15"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-21"
            x1="1350.88"
            y1="2357.69"
            x2="1393.16"
            y2="2357.69"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-22"
            x1="1374.55"
            y1="1344.77"
            x2="1666.66"
            y2="1344.77"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-23"
            x1="1304.42"
            y1="2190.66"
            x2="1365.38"
            y2="2190.66"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-24"
            x1="709.91"
            y1="1120.95"
            x2="770.87"
            y2="1120.95"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-25"
            x1="267.34"
            y1="1569.43"
            x2="328.3"
            y2="1569.43"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-26"
            x1="1402.53"
            y1="2385.77"
            x2="1476.87"
            y2="2385.77"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-27"
            x1="1174.26"
            y1="2321.11"
            x2="1327.29"
            y2="2321.11"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-28"
            x1="1174.06"
            y1="2409.69"
            x2="1368.23"
            y2="2409.69"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-29"
            x1="1110.12"
            y1="2375.63"
            x2="1362.06"
            y2="2375.63"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-30"
            x1="1150.86"
            y1="2269.5"
            x2="1191.15"
            y2="2269.5"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-31"
            x1="1185.88"
            y1="2276.08"
            x2="1226.17"
            y2="2276.08"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-32"
            x1="921.34"
            y1="2421.49"
            x2="1259.63"
            y2="2421.49"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-33"
            x1="863.58"
            y1="2441.85"
            x2="1042.43"
            y2="2441.85"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-34"
            x1="446.07"
            y1="2361.09"
            x2="797.01"
            y2="2361.09"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-35"
            x1="356.27"
            y1="1436.32"
            x2="840.95"
            y2="1436.32"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-36"
            x1="605.26"
            y1="2204.01"
            x2="650.76"
            y2="2204.01"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-37"
            x1="524.78"
            y1="2091.94"
            x2="570.28"
            y2="2091.94"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-38"
            x1="324.44"
            y1="2091.25"
            x2="369.94"
            y2="2091.25"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-39"
            x1="365.62"
            y1="2090.69"
            x2="411.12"
            y2="2090.69"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-40"
            x1="431.5"
            y1="1847.65"
            x2="477"
            y2="1847.65"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-41"
            x1="204.97"
            y1="1941.67"
            x2="538.64"
            y2="1941.67"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-42"
            x1="908.17"
            y1="1554.76"
            x2="1009.39"
            y2="1554.76"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-43"
            x1="733.62"
            y1="2426.88"
            x2="866.34"
            y2="2426.88"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-44"
            x1="878.72"
            y1="2324.87"
            x2="924.73"
            y2="2324.87"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-45"
            x1="836.67"
            y1="2320.63"
            x2="882.69"
            y2="2320.63"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-46"
            x1="1004.9"
            y1="2339.5"
            x2="1050.91"
            y2="2339.5"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-47"
            x1="1046.75"
            y1="2341.21"
            x2="1092.77"
            y2="2341.21"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-48"
            x1="1053.36"
            y1="2552.92"
            x2="1099.38"
            y2="2552.92"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-49"
            x1="201.19"
            y1="1783.83"
            x2="382.85"
            y2="1783.83"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-50"
            x1="258.76"
            y1="1881.24"
            x2="304.26"
            y2="1881.24"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-51"
            x1="259.4"
            y1="1746.41"
            x2="304.9"
            y2="1746.41"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-52"
            x1="228.25"
            y1="1658.84"
            x2="502.64"
            y2="1658.84"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-53"
            x1="400.71"
            y1="1581.17"
            x2="443.54"
            y2="1581.17"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-54"
            x1="276.56"
            y1="1510.68"
            x2="319.39"
            y2="1510.68"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-55"
            x1="286.07"
            y1="1464.89"
            x2="328.9"
            y2="1464.89"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-56"
            x1="474.68"
            y1="1316.79"
            x2="606.66"
            y2="1316.79"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-57"
            x1="417.41"
            y1="1430.17"
            x2="521.82"
            y2="1430.17"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-58"
            x1="355.81"
            y1="1372.57"
            x2="402.86"
            y2="1372.57"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-59"
            x1="1150.58"
            y1="424.89"
            x2="1503.52"
            y2="424.89"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-60"
            x1="1001.79"
            y1="522.55"
            x2="1017.24"
            y2="522.55"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-61"
            x1="1187.13"
            y1="1168.53"
            x2="1255.98"
            y2="1168.53"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-62"
            x1="968.36"
            y1="1115.6"
            x2="1131.41"
            y2="1115.6"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-63"
            x1="629.2"
            y1="454.1"
            x2="928.93"
            y2="454.1"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-64"
            x1="711.49"
            y1="348.53"
            x2="994.26"
            y2="348.53"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-65"
            x1="595.98"
            y1="1196.4"
            x2="920.89"
            y2="1196.4"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-66"
            x1="1274.19"
            y1="1304.09"
            x2="1372.15"
            y2="1304.09"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-67"
            x1="887.26"
            y1="1131.39"
            x2="927.87"
            y2="1131.39"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-68"
            x1="900.03"
            y1="1084.1"
            x2="940.65"
            y2="1084.1"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-69"
            x1="1015.96"
            y1="1082.76"
            x2="1056.58"
            y2="1082.76"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-70"
            x1="1132.58"
            y1="1139.26"
            x2="1173.2"
            y2="1139.26"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-71"
            x1="1144.05"
            y1="1096.22"
            x2="1184.67"
            y2="1096.22"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-72"
            x1="618.97"
            y1="1298.17"
            x2="661.13"
            y2="1298.17"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-73"
            x1="724.1"
            y1="1357.82"
            x2="766.26"
            y2="1357.82"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-74"
            x1="651.04"
            y1="1188.05"
            x2="695.06"
            y2="1188.05"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-75"
            x1="661.08"
            y1="1141.84"
            x2="704.87"
            y2="1141.84"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-76"
            x1="344.03"
            y1="1479.7"
            x2="419.24"
            y2="1479.7"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-77"
            x1="502.14"
            y1="1497.52"
            x2="577.34"
            y2="1497.52"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-78"
            x1="444.73"
            y1="1918.96"
            x2="489.71"
            y2="1918.96"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-79"
            x1="380.73"
            y1="2276.85"
            x2="426.56"
            y2="2276.85"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-80"
            x1="699.18"
            y1="2268.86"
            x2="743.01"
            y2="2268.86"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-81"
            x1="1324.57"
            y1="1550.94"
            x2="1601.14"
            y2="1550.94"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-82"
            x1="1592.89"
            y1="1554.03"
            x2="1662.85"
            y2="1554.03"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-83"
            x1="489.44"
            y1="1593.73"
            x2="532.68"
            y2="1593.73"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-84"
            x1="484.04"
            y1="1637.28"
            x2="527.28"
            y2="1637.28"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-85"
            x1="569.77"
            y1="1468.88"
            x2="631.27"
            y2="1468.88"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-86"
            x1="485.58"
            y1="2299.78"
            x2="547.61"
            y2="2299.78"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-87"
            x1="1259.42"
            y1="1387.94"
            x2="1291.72"
            y2="1387.94"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-88"
            x1="902.51"
            y1="378.03"
            x2="1206.11"
            y2="378.03"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-89"
            x1="1001.79"
            y1="522.55"
            x2="1017.24"
            y2="522.55"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-90"
            x1="1084.7"
            y1="464.5"
            x2="1084.71"
            y2="464.5"
            gradientTransform="translate(646.16 -630.95) rotate(45)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-91"
            x1="1157.39"
            y1="415.14"
            x2="1204.54"
            y2="415.14"
            gradientTransform="matrix(1,0,0,1,0,0)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-92"
            x1="-28673.88"
            y1="17600.68"
            x2="-28673.88"
            y2="17561.8"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-93"
            x1="-28484.17"
            y1="17642.53"
            x2="-28484.17"
            y2="17603.65"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-94"
            x1="-28017.73"
            y1="17502.74"
            x2="-28017.73"
            y2="17463.87"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-95"
            x1="-28921.72"
            y1="17403.59"
            x2="-28921.72"
            y2="17364.72"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-96"
            x1="-27953.85"
            y1="16756.86"
            x2="-27953.85"
            y2="16717.99"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-97"
            x1="-27784.43"
            y1="16679.2"
            x2="-27784.43"
            y2="16640.32"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-98"
            x1="-27711.57"
            y1="16864.36"
            x2="-27711.57"
            y2="16825.48"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-99"
            x1="-28812.46"
            y1="16472.59"
            x2="-28812.46"
            y2="16433.72"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-100"
            x1="-29023.65"
            y1="16767.44"
            x2="-29023.65"
            y2="16728.57"
            gradientTransform="translate(25228.27 -21599.89) rotate(-12.03)"
            xlinkHref="#linear-gradient"
          />
        </defs>
        <rect className="cls-16" width="2000" height="2000" />

        <g>
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.4,
            }}
            onAnimationComplete={() => {
              setStrokeOpacity(0);
            }}
            className="cls-7"
            d="m605.25,564.34c-5.97,23.06,9.43,42.68,20.58,61.26,5.86,9.78,10.53,20.09,11.58,31.57.55,6.09.08,12.3-1.24,18.27-.55,2.5-1.24,4.98-2.1,7.38-2.08,5.83-7.49,11.81,3.21-2.45,2.9-2.46,5.8-4.93,8.7-7.39,4.65-8.97-.29-15.25-7.79-20.36-9.16-6.24-18.89-11.63-28.53-17.09-17.19-9.74-34.61-19.58-49.01-33.28-12.22-11.62-22.41-25.98-26.32-42.59-2.21-9.37-2.14-19.09-.19-28.5.94-4.55,2.25-9.06,4-13.37.76-1.88,1.61-3.74,2.55-5.54.45-.93.95-1.83,1.5-2.71-1.05,1.72-2.18,3.39-3.39,5,2.9-3.76,5.68-7.68,8.22-11.7.4-.63,4.42-6.21,4.1-7.56-.36-1.51-1-.38-2.25.68-2.76,2.33-5.02,5.67-7.19,8.49-14.12,18.36-28.22,39.28-30.48,62.98-1.82,19.11,4.58,37.21,16.22,52.24,12.81,16.56,30.26,28.39,48.14,38.85,10.26,6,20.73,11.63,30.88,17.8,5.66,3.44,24.07,12.25,19.26,21.53-1.38,2.66-.99,2.52.79,1.73,2.91-1.3,6.12-6.72,7.91-9.11,9.81-13.09,19.95-27.16,23.53-43.44,2.77-12.61,1.68-25.93-3.28-37.85-9.82-23.6-34.86-45.32-27.63-73.25.56-2.17-2.31.72-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-4.18,5.45-10.54,12.39-12.32,19.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.4,
            }}
            className="cls-50"
            d="m1650.31,697.83c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31,2.54-3.55,5.07-7.15,7.24-10.95.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="cls-56"
            d="m1308.65,542.1c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31s5.07-7.15,7.24-10.95c.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="cls-97"
            d="m1123.88,522.05c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31,2.54-3.55,5.07-7.15,7.24-10.95.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="cls-24"
            d="m1063.45,274.49c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31,2.54-3.55,5.07-7.15,7.24-10.95.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="cls-14"
            d="m1186.6,276.26c-7.04-4.84-12.11-11.53-14.88-19.61-.25-.73-4.93,4.39-4.25,3.64-2.91,3.23-5.6,6.79-8.12,10.31-2.54,3.55-5.07,7.15-7.24,10.95-.7,1.22-2.62,3.72-2.12,5.17,2.77,8.08,7.84,14.76,14.88,19.61,2.46,1.7,23.82-28.64,21.73-30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="cls-54"
            d="m1341.11,538.14c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31,2.54-3.55,5.07-7.15,7.24-10.95.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.6,
            }}
            className="cls-72"
            d="m1507.36,556.94c7.04,4.84,12.11,11.53,14.88,19.61.25.73,4.93-4.39,4.25-3.64,2.91-3.23,5.6-6.79,8.12-10.31,2.54-3.55,5.07-7.15,7.24-10.95.7-1.22,2.62-3.72,2.12-5.17-2.77-8.08-7.84-14.76-14.88-19.61-2.46-1.7-23.82,28.64-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.6,
            }}
            className="cls-60"
            d="m1565.14,783.47c-1.55,2.05,1.33-1.25,1.22-1.14,1.72-1.68,3.54-3.23,5.44-4.7,3.38-2.6,6.96-4.93,10.7-6.99,8.34-4.59,17.41-7.79,26.8-9.43,19.46-3.39,39.55.06,57.3,8.52,36.73,17.52,59.24,54.08,66.49,93.2,7.24-10.02,14.49-20.05,21.73-30.07-24.47-.39-49.56-1.07-72.08-11.78-20.3-9.66-36.96-25.79-47.58-45.55-.43-.8-6.63,6.45-6.68,6.51-3.95,4.82-7.64,9.91-10.97,15.18,13.18-20.81,12.69-14.35,4.49-9.75-2.04,1.15-4.19,2.11-6.37,2.95-5.96,2.27-12.33,3.44-18.64,4.23-12.98,1.62-26.22,2.07-39.29,1.71-26.17-.73-52.73-5.64-76.09-17.88-20.89-10.95-39.29-27.66-50.12-48.8-11.34-22.14-12.49-47.45-6.64-71.36,3.38-13.82,8.93-27.17,16.43-39.26,6.27-10.1,15.87-20.39,24.7-30.02,5.85-6.38,11.07-13.76,15.37-21.26.38-.67,2.94-4.58,2.12-5.17-.84-.61-4.24,3.63-4.25,3.64-25.8,28.14-51.3,59.24-66.98,94.35-11.33,25.37-16.82,54.28-9.35,81.55,7.33,26.74,26.88,48.59,50.32,62.67,26.45,15.88,57.7,21.52,88.22,21.71,15.86.1,32.76-.23,48.12-4.59,19.57-5.55,31-21.42,41.51-38.01-5.88,7.23-11.77,14.46-17.65,21.69,10.62,19.77,27.27,35.9,47.58,45.55,22.52,10.71,47.61,11.38,72.08,11.78,1.37.02,3.73-3.06,4.25-3.64,2.91-3.24,5.58-6.79,8.12-10.31,2.56-3.54,5.07-7.16,7.24-10.95.79-1.38,2.43-3.51,2.12-5.17-7.91-42.64-34.24-82.21-76.28-97.28-19.66-7.05-40.92-7.64-60.77-1.08-21.05,6.95-36.63,21.42-49.75,38.86-2.86,3.81-5.67,7.67-8.22,11.7-.4.63-4.42,6.21-4.1,7.56.36,1.51,1,.38,2.25-.68,2.75-2.32,5.06-5.66,7.19-8.49h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.6,
            }}
            className="cls-91"
            d="m1701.54,872.48c-3.75-13.41-14.4-23.43-27.37-28.04-13.36-4.75-27.87-2.81-40.66,2.79-15.36,6.72-27.35,18.79-37.8,31.59-14.05,17.21-25.8,36.07-35.9,55.83-.61.8-.85,1.66-.72,2.6,31.05,8.29,62.1,16.57,93.15,24.86,22.07,5.89,65.75,11.93,64.58,43.2,7.25-9.75,14.5-19.5,21.75-29.25-11.09-3.61-22.48-2.5-33.85-1.03-11.72,1.51-23.42,2.65-35.25,2.88-24.24.46-48.53-2.23-72.08-7.98-42.32-10.34-89.23-31.71-102.5-77.04-5.82-19.9-5.55-46.57,5.35-64.33.64-1.04,7.33-11.51,1.84-6.88-6.05,5.1-11.31,13.51-15.41,20.18-11.66,19-18.55,39.13-16.98,61.66,1.54,22.12,11.13,42.51,27.05,57.92,17.7,17.13,40.97,27.47,64.26,34.54,23.89,7.25,48.76,11.26,73.71,11.94,14.11.39,28.23-.3,42.24-2.04,13.34-1.65,26.77-4.02,39.87.25,2.48.81,9.99-10.75,10.9-11.97,2.35-3.17,4.64-6.39,6.75-9.72,1.27-2,4.01-5.18,4.1-7.56,1.2-31.95-38.97-38.01-62.24-44.22-31.84-8.5-63.67-16.99-95.51-25.49l-.72,2.6c.64-1.24,8.74-16.34,8.97-16.19.26.17-3.55,4.05.28,0,2.12-2.25,4.43-4.36,6.84-6.3,9.2-7.42,20.24-13.04,31.98-14.86,21.69-3.36,45.47,8.05,51.64,30.13.2.72,4.95-4.42,4.25-3.64,2.91-3.24,5.58-6.79,8.12-10.31s5.07-7.16,7.24-10.95c.74-1.28,2.55-3.64,2.12-5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.6,
            }}
            className="cls-20"
            d="m1685.5,1086.13c11.15-8.66,26.41-19.29,30.22-33.86,2.6-9.94-.64-20.35-8.47-27.04-21.27-18.2-48.79,6.44-63.72,20.78-15.26,14.65-25.1,34.89-16.88,56,7.9,20.31,29.4,30.74,50.35,27.79,12.98-1.83,25.74-7.45,39.04-5.69,11,1.45,21.44,9.21,21.75,21.02,9.4-8.03,18.81-16.07,28.21-24.1-10.35-25.18-46.88-14.63-67.2-12.53-24.31,2.52-49.6,3.57-73.17-4.05-42.92-13.88-71.99-59.4-64.56-104.29,2.14-12.93,7.32-25.36,14.54-36.27,1.71-2.59,3.58-5.07,5.58-7.45.58-.69,1.19-1.34,1.76-2.03,4.01-4.75-3.93,3.31-3.84,3.18-.69,1.03-.72.29-.22.26,1.14-.07,3.27-2,4.35-2.6,2.99-1.66,6.1-3.04,9.27-4.31,6.76-2.71,12.87-9.03,18.19-13.84,2.68-2.42,5.78-4.9,7.88-7.85.24-.34,2.48-3.1.49-2.3-14.9,5.99-27.85,15.53-40.02,25.86-11.68,9.92-22.79,20.75-31.29,33.57-13.86,20.91-19.39,46.91-13.95,71.5,5.33,24.1,20.21,46.13,40.81,59.78,22.59,14.98,50.21,17.78,76.66,16.49,15.09-.74,30.05-2.75,45.05-4.46,15.28-1.74,34.62-1.22,41.47,15.44.5,1.22,14.27-9.75,15.31-10.64,3.32-2.84,6.62-5.76,9.62-8.93,1.02-1.08,3.32-2.92,3.28-4.53-.48-18.19-20.59-22.67-35.21-20.77-18.15,2.37-34.83,10.26-52.74,1.92-15.01-6.99-25.4-21.62-26.07-38.26-.33-8.15,1.55-16.24,5.46-23.4.96-1.75,2.56-3.37,3.36-5.14-2.25,1.93-4.5,3.87-6.75,5.8-7.35,5.4-9.35,7.21-6.01,5.42.8-.29,1.58-.76,2.38-1.08,4.08-1.65,8.53-2.58,12.93-2.38,9.02.42,17.17,5.61,21.64,13.41,2.34,4.09,3.59,8.75,3.46,13.47-.08,2.86-.67,5.68-1.73,8.34-.35.87-.76,1.72-1.19,2.55-3.57,6.83-8.02,6.28,12.13-9.36-6.42,4.99-14.11,10.31-18.87,16.99-.96,1.35-1.78,1.71-.49,2.3,1.13.52,6.73-4.33,7.2-4.69h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.6,
            }}
            className="cls-2"
            d="m1687.69,1166.61c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.7,
            }}
            className="cls-35"
            d="m1476.74,1043.61c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.7,
            }}
            className="cls-49"
            d="m1568.47,1046.17c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.7,
            }}
            className="cls-19"
            d="m1518.13,882.27c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.7,
            }}
            className="cls-39"
            d="m1705.67,909.63c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.7,
            }}
            className="cls-3"
            d="m1719.83,1041.76c7.74,7.56,15.47,15.12,23.21,22.68,1.26,1.23,11.51-12.75,12.37-13.95,1.11-1.56,11.23-14.3,9.36-16.12-7.74-7.56-15.47-15.12-23.21-22.68-1.26-1.23-11.51,12.75-12.37,13.95-1.11,1.56-11.23,14.3-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.8,
            }}
            className="cls-77"
            d="m1513.46,1140.58c-5.63,15.53-4.97,31.93,9.69,41.87,15.36,10.4,36.01,12.77,53.93,15.13,23.14,3.05,46.49,4.67,69.44,9.02,18.5,3.5,39.38,8.66,53.06,22.53,18.39,18.64,12.21,45.97,3.3,67.65,7.25-9.75,14.5-19.5,21.75-29.25-5.54-18.62-24.85-25.67-42.24-29.03-24.86-4.8-50.61-4.38-75.81-5.07-46.6-1.28-110.93-3.66-130.41-55.69-9.5-25.38-2.22-55.88,11.35-76.54.68-1.03,7.32-11.5,1.84-6.88-6.17,5.2-11.03,13.52-15.41,20.18-14.77,22.5-26.49,48.64-23.54,76.16,2.82,26.26,20.21,46.67,43.42,58.12,23.06,11.37,49.7,13.1,74.97,14.18,26.81,1.15,53.85.45,80.52,3.83,20.42,2.59,46.85,8.22,53.57,30.81.12.39,10.58-11.53,10.9-11.97,4.01-5.4,8.27-11.02,10.85-17.28,8.01-19.48,14.49-44.5,1.55-63.42-10.68-15.61-30.53-22.22-48.08-26.34-22.65-5.31-45.97-7.11-69.02-9.82-19.33-2.27-40.35-4.22-58.08-12.9-7.23-3.54-14.01-8.71-17.22-16.32-3.75-8.88-1.72-18.66,1.44-27.39.84-2.32-2.67,1.03-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-4.46,5.82-9.78,12.26-12.32,19.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.8,
            }}
            className="cls-5"
            d="m1622.3,1307.73c4.55,6.49,9.09,12.98,13.64,19.47.73,1.04,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.53-.93,2.85-4.13,2.12-5.17-4.55-6.49-9.09-12.98-13.64-19.47-.73-1.04-11.58,12.84-12.37,13.95-2.54,3.55-5.07,7.15-7.24,10.95-.53.93-2.85,4.13-2.12,5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.8,
            }}
            className="cls-48"
            d="m1653.84,1306.33c5.07,5.67,10.14,11.34,15.21,17.01,1.06,1.19,11.54-12.79,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.47-.83,2.9-4.3,2.12-5.17-5.07-5.67-10.14-11.34-15.21-17.01-1.06-1.19-11.54,12.79-12.37,13.95-2.54,3.55-5.07,7.15-7.24,10.95-.47.83-2.9,4.3-2.12,5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.8,
            }}
            className="cls-13"
            d="m1487.8,1451.79c6.09,5.37,12.19,10.74,18.28,16.11,1.42,1.25,11.47-12.7,12.37-13.95,1.05-1.46,11.2-14.5,9.36-16.12-6.09-5.37-12.19-10.74-18.28-16.11-1.42-1.25-11.47,12.7-12.37,13.95-1.05,1.46-11.2,14.5-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.8,
            }}
            className="cls-40"
            d="m1663.28,1348.65c-5.98-14.43-19.54-24.2-33.95-29.17-15.83-5.46-31.3-3.32-47.6-3.83-14.75-.45-30.11-2.62-43.54-9.06-15.54-7.45-24.66-20.62-23.47-38.13.14-2.28-1.87,1.11-1.99,1.36.02,0,.02-.02.03-.04-1.86,2.93-3.15,7.04-4.32,10.25-2.55,6.97-5.5,14.56-6.01,22.05-.9,13.27,3.7,25.58,14.34,33.85.68.52,1.38,1.04,2.09,1.53-2.67,6.99-4.67,14.32-6.26,21.37-2.09,9.23-1.39,18.17,1.46,26.2-7.95,1.48-16.04,1.99-23.67,1.85-26.71-.51-54.4-9.07-75.08-26.36-11.26-9.43-20.29-21.71-24.85-35.76-2.46-7.58-3.58-15.6-3.63-23.56-.02-4.16.26-8.28.86-12.39.46-3.17.45-2.93,1.09-5.88.02-.09.03-.15.05-.21,0-.03.01-.05.02-.06,0-.04.02-.06.02-.1.02-.04.04-.11.05-.17.01-.02.01-.05.02-.07.19-.61.37-1.21.56-1.82,1.02-3.22,2.45-7.35,2.71-10.78.19-2.44.56-2.32-.76-2.23-1.18.09-3.56,7.22-3.76,7.73-1.78,4.43-3.27,8.96-4.71,13.49-6.3,19.87-11.1,41.4-6.76,62.21,3.04,14.57,10.25,27.91,20.63,38.57,20.93,21.52,52.19,32,81.76,32.56,18.07.35,38.02-3.21,53.07-13.57,7.69,5.64,17.06,9.27,27.25,10.06,18.55,1.45,33.1-7.79,49.92-13.62,14.48-5.02,38.43-4.7,41.24,14.98.35,2.48,4.66-7.34,4.69-7.42,7.59-19.41,17.05-43.2,8.49-63.85Zm-106.45,10.24c.13-.16.3-.39.55-.74-.21.28-.38.56-.55.79,0-.03,0-.04,0-.06Zm-38.66-5.5c.17-.18.33-.36.5-.54-.76,1.06-1.62,2.16-2.55,3.28.71-.88,1.29-1.89,2.06-2.74Zm11.37,4.79c-1.76-3.11-3.22-6.37-4.26-9.78,8.05-3.12,17.48.25,23.2,7.86,2.15,2.87,3.08,6.27,3.37,9.67-2.56,2.87-5.44,5.38-8.54,7.56-5.46-3.91-10.19-9.01-13.76-15.31Zm105.24,8.47c-13.31.78-25.09,8.09-37.29,12.66-14.25,5.33-30.21,5.4-43.76-.1,3.56-8.6,6.18-17.72,8.25-26.5.19-.79.36-1.6.53-2.4,10.88.57,21.64-.36,32.59.13,14.96.67,30.24,5.36,42.02,14.79.59.46,1.15.94,1.71,1.43-1.35-.09-2.7-.1-4.06-.02Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.9,
            }}
            className="cls-36"
            d="m1438.76,1262.68c.31,26.06-1.16,46.34-22.8,68.65-3.85,3.97,3.22-1.08,3.67-1.43,33.13-19.79,38.82-52.1,38.93-84.3-.01-1.24-19.83,14.6-19.8,17.09h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.9,
            }}
            className="cls-74"
            d="m634.36,340.36c.31,26.06-1.16,46.34-22.8,68.65-3.85,3.97,3.22-1.08,3.67-1.43,33.13-19.79,38.82-52.1,38.93-84.3-.01-1.24-19.83,14.6-19.8,17.09h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.9,
            }}
            className="cls-37"
            d="m294.98,871.24c.31,26.06-1.16,46.34-22.8,68.65-3.85,3.97,3.22-1.08,3.67-1.43,33.13-19.79,38.82-52.1,38.93-84.3-.01-1.24-19.83,14.6-19.8,17.09h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.9,
            }}
            className="cls-75"
            d="m1596.01,1474.72c-4.19,5.06-12.2,8.12-18.25,4.49-5.88-3.52-5.85-10.96-4.55-16.87,3.43-15.61,11.86-27.53,20.82-39.01,2.91-3.74,5.69-7.69,8.22-11.7.4-.63,4.42-6.21,4.1-7.56-.36-1.51-1-.38-2.25.68-2.77,2.33-4.99,5.67-7.19,8.49-17.56,22.51-37.83,47.74-45.08,75.97-2.04,7.95-2.21,19.81,8.23,21.44,11.94,1.86,21.03-10.97,27.58-18.88,5.15-6.21,11.31-13.41,14.33-20.96.61-1.53,1.33-2.08-.06-2.35-1.23-.24-5.5,5.79-5.89,6.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.9,
            }}
            className="cls-61"
            d="m1457.68,1424.28c-10.91-24.6-39.96-31.32-63.92-23.98-28.06,8.6-48.1,31.86-66.28,53.61-5.17,6.18-11.31,13.42-14.33,20.96-.61,1.53-1.33,2.08.06,2.35,1.23.24,5.5-5.79,5.89-6.26,15.87-18.98,35.02-37.43,60.17-42.46,22.19-4.43,47.07,4.18,56.67,25.84.28.62,11.54-12.8,12.37-13.95,2.56-3.54,5.07-7.16,7.24-10.95.64-1.12,2.71-3.85,2.12-5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.0,
            }}
            className="cls-88"
            d="m1312.43,1477.48c7.6,11.12,20.64,16.82,33.08,20.72,15.93,4.99,32.58,7.51,49.02,10.15,17.7,2.84,35.52,5.48,52.82,10.29,14.27,3.96,29.07,9.49,40.03,19.82,13.38,12.61,16.46,30.15,13.71,47.75-.31,2.01,1.96-.43,2.25-.68,2.66-2.24,5.11-5.78,7.19-8.49,2.9-3.78,5.67-7.67,8.22-11.7,1.39-2.19,3.69-4.98,4.1-7.56,2.41-15.46,1.05-31.74-9.05-44.35-9.41-11.74-23.81-18.31-37.81-22.81-33.6-10.81-69.42-11.61-103.36-20.93-14.19-3.9-29.8-9.62-38.46-22.29-.7-1.03-11.58,12.85-12.37,13.95-2.56,3.54-5.07,7.16-7.24,10.95-.54.94-2.84,4.11-2.12,5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.0,
            }}
            className="cls-85"
            d="m1522.16,1560.09c-47.73,7.44-99.17-.1-144.76-14.96-40.95-13.35-90.37-37.4-104.81-81.58-8.24-25.19-.97-52.02,12.05-73.45-.18.3,2.89-4.61,2.12-5.17s-4.48,3.9-4.25,3.64c-5.82,6.49-10.85,13.82-15.37,21.26-13.04,21.46-22.94,46.09-19.17,71.62,3.16,21.33,15.84,39.54,31.78,53.51,37.97,33.28,91.68,48.33,140.73,54.78,26.38,3.47,53.56,4.53,79.94.42,1.56-.24,3.42-2.72,4.25-3.64,2.91-3.24,5.58-6.79,8.12-10.31,2.56-3.54,5.07-7.16,7.24-10.95.26-.46,2.5-5.23,2.12-5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.0,
            }}
            className="cls-79"
            d="m1273.12,1404.37c5.43,7.76,11.3,15.16,17.62,22.22,1.06,1.19,11.54-12.79,12.37-13.95,1.21-1.7,11.25-14.02,9.36-16.12-6.32-7.06-12.18-14.46-17.62-22.22-.73-1.04-11.58,12.84-12.37,13.95-2.54,3.55-5.07,7.15-7.24,10.95-.53.93-2.85,4.13-2.12,5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.0,
            }}
            className="cls-25"
            d="m1308.75,1403.51c5.43,7.76,11.3,15.16,17.62,22.22,1.06,1.19,11.54-12.79,12.37-13.95,1.21-1.7,11.25-14.02,9.36-16.12-6.32-7.06-12.18-14.46-17.62-22.22-.73-1.04-11.58,12.84-12.37,13.95-2.54,3.55-5.07,7.15-7.24,10.95-.53.93-2.85,4.13-2.12,5.17h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.0,
            }}
            className="cls-45"
            d="m1191.7,1539.47c-1.03,17.69,10.85,32.3,26.86,38.61,19.67,7.76,41.27,3.61,61.33-.03,38.13-6.92,84.1-8.31,111.44,24.49,12.84,15.41,17.62,36.96,9.84,55.77,7.25-9.75,14.5-19.5,21.75-29.25-1.91-12.74-14.25-19.76-26.25-20.43-15.17-.85-30.83,5.05-45.4,8.59-30.56,7.43-61.52,14.12-93.03,15.59-58.03,2.7-123.57-15.35-153.44-69.71-14.23-25.9-18.4-61.52-3.37-88.09-.17.3,2.89-4.62,2.12-5.17s-4.48,3.9-4.25,3.64c-5.75,6.41-11.13,13.76-15.37,21.26-14.11,24.95-17.39,53.47-8.47,80.86,9.08,27.89,30.14,50.32,55.17,64.91,56.45,32.91,124.99,24.02,185.64,9.94,16.87-3.92,34.16-10.12,51.46-11.61,14.06-1.21,31.07,4.41,33.45,20.29.1.7,4.99-4.47,4.25-3.64,2.37-2.65,4.54-5.48,6.65-8.33,4.01-5.4,8.26-11.02,10.85-17.28,6.42-15.52,4.63-33.38-3.41-47.99-9.29-16.9-26.5-28.18-44.61-33.71-19.34-5.9-40.06-5.39-59.88-2.48-20.6,3.02-41.32,9.1-62.28,5.66-19.85-3.25-40.59-18.08-39.3-40.32.11-1.87-1.67.18-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-2.9,3.78-5.67,7.67-8.22,11.7-1.29,2.04-3.96,5.14-4.1,7.56h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.1,
            }}
            className="cls-6"
            d="m1154.27,1461.49c-28.01,35.31-55.3,79.36-41.81,126.22,11.77,40.86,52.16,62.67,74.61,96.6,11.9,17.98,18.59,40.48,10.99,61.46,7.25-9.75,14.5-19.5,21.75-29.25-2.89-9.16-11.72-12.78-20.62-13.62-10.13-.96-20.47-.33-30.64-.91-20.96-1.2-42.78-3.28-62.87-9.7-18.36-5.86-34.95-16.84-42.95-34.93-6.78-15.33-7.32-33.7.22-48.86,3.27-6.57-5.37,3.2-5.96,3.91-5.28,6.45-10.6,13.47-14.33,20.96-7.62,15.32-9.2,32.83-3.61,49.11,6.53,19.05,22.06,31.64,40.6,38.41,20.48,7.48,43.26,9.67,64.89,11.03,10.29.65,20.61.29,30.88.9,9.5.57,19.5,3.79,22.65,13.77.14.43,10.59-11.55,10.9-11.97,3.93-5.3,8.58-11.01,10.85-17.28,12.95-35.78-12.36-68.59-36.11-92.57-13.07-13.19-26.87-25.95-37.27-41.47-10.21-15.24-15.79-32.68-15.68-51.08.06-10.19,1.8-20.36,4.8-30.08,1.79-5.78,4.03-11.39,6.73-16.82,1.11-2.24,2.32-4.42,3.58-6.58.18-.32,2.37-3.58.64-1.06.61-.88-1.36,1.79-.61.84,5.06-6.37,11.28-13.34,14.33-20.96.61-1.53,1.33-2.08-.06-2.35-1.22-.24-5.52,5.79-5.89,6.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.1,
            }}
            className="cls-29"
            d="m709.44,1542.67c-8.72,20.09-5.58,42.26,6.44,60.39,14.32,21.6,39.19,33.25,63.59,39.39,50.48,12.7,113.25,3.79,152.79,44.47,16.88,17.37,26.38,45.94,14.57,68.59,7-9.16,14.01-18.31,21.01-27.47-25.93-29.97-68.4-25.6-104.01-24.96-37.57.68-75.57-2.4-111.77-12.95-63.23-18.44-124.58-64.59-138.89-132.07-3.71-17.47-4.05-35.61-.85-53.18,1.6-8.78,4.03-17.51,7.51-25.74,1.54-3.65,3.47-7.03,5.24-10.55,1.3-2.57-2.18,2.82-2.45,3.45-.78,1.8.86-.77,1.36-1.3,5.87-6.05,10.9-13.07,15.41-20.18.95-1.5,6.72-11.9,1.84-6.88-27.24,28.03-49.39,63.84-52.46,103.52-2.68,34.64,7.62,68.55,27.83,96.66,45.86,63.77,125.7,86.87,200.84,89.17,41.93,1.28,97.41-11.01,128.66,25.1,1.44,1.66,19.69-24.95,21.01-27.47,10.09-19.36,8.05-42.03-2.98-60.59-13.26-22.3-37.84-34.82-62.1-41.44-50.55-13.78-112.61-4.04-153.68-42.9-17.47-16.53-28.77-44.57-18.63-67.91,2.89-6.65-5.26,3.06-5.96,3.91-5.14,6.27-11.06,13.44-14.33,20.96h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.1,
            }}
            className="cls-43"
            d="m840.93,1546.51c-2.24-19.32-18.43-30.48-35.35-36.92-23.9-9.1-50.17-11.85-75.44-14.36-30.27-3-60.66-4.68-90.87-8.18-26.18-3.03-53.31-6.9-77.67-17.49-20.84-9.06-37.66-24.44-40.42-47.46,10.95-10.72,23.54-19.78,39.36-21.14,23.06-1.98,38.01,17.51,56.05,28.41,17.54,10.6,38.41,17.03,58.88,12.57,22.61-4.93,36.12-21.39,48.79-39.67,1.93-2.78,4.52-6.28,5.8-9.49.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.89,6.26-3.02,3.69-5.81,7.56-8.53,11.48,12.16-17.54,5.93-7.4-.91-3.24-3.56,2.16-7.37,3.93-11.32,5.26-8.39,2.83-17.45,3.69-26.23,2.85-21.17-2.02-39.68-13.04-55.99-25.99-8.13-6.45-16.52-13.22-26.92-15.46-8.23-1.77-16.67-.6-24.56,2.1-19.11,6.55-33.1,22.61-46.19,37.21-5.79,6.46-11.06,13.74-15.37,21.26-.27.46-1.58,2.49-2.08,3.88-1.68,2.43-3.3,4.9-4.77,7.46-.87,1.52-2.22,3.37-2.12,5.17,1.12,20.08,11.7,33.9,26.56,43.61-5.18-.73-10.33-1.58-15.44-2.61-20.1-4.04-38.83-9.15-56.82-19.36-18.04-10.24-34.26-23.86-47.19-40.09-13.83-17.37-23.99-38.02-27.16-60.13-1.63-11.4-1.27-22.98,1.11-34.24,1.2-5.67,2.86-11.27,5.05-16.64,1.09-2.68,2.32-5.32,3.67-7.88.4-.75.83-1.47,1.23-2.23.12-.23.23-.43.31-.6.13-.18.27-.39.45-.65,1.92-2.82,4.51-6.25,5.8-9.49.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.89,6.26-3.02,3.68-5.85,7.54-8.53,11.48-13.64,20.05-24.69,41.8-25.83,66.45-.92,20.1,4.11,39.94,13.43,57.69,19.54,37.24,56.23,65.65,96.51,77.09,37.44,10.63,77.5,10.62,116.09,11.01,45.51.46,91.31-.37,136.6,4.84,34.25,3.94,82.84,11.09,100.2,45.74.38.75,11.56-12.83,12.37-13.95,2.56-3.54,5.07-7.16,7.24-10.95.84-1.46,2.32-3.43,2.12-5.17Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.1,
            }}
            className="cls-69"
            d="m726.3,1456.08c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.1,
            }}
            className="cls-98"
            d="m624.23,1363.24c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.2,
            }}
            className="cls-1"
            d="m428.14,1404.32c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.2,
            }}
            className="cls-55"
            d="m468.3,1395.19c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.2,
            }}
            className="cls-33"
            d="m482.08,1143.75c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.2,
            }}
            className="cls-31"
            d="m498.03,1196.94c2.58-6.51,2.89-14.09-4.36-17.37-8.13-3.68-18.81-1.83-27.2-.23-23.72,4.54-49.07,14.34-68.19,29.33-6.69,5.24-12.26,11.49-17.43,18.2-5.93,7.7-13.72,16.89-16.14,26.63v.83c16.61,8.24,34.96,12.54,53.09,15.88,20.92,3.85,42.09,6.24,63.22,8.63,20.21,2.29,40.48,4.41,60.51,8.02,15.16,2.73,31.43,5.97,44.8,14.01,5.2,3.13,10.08,7.27,12.72,12.85,1.16,2.46,1.87,5.16,2.04,7.88.09,1.51.06,3.09-.21,4.59-.16.9-.32,1.52-.65,2.41-.57,1.17-1.17,2.32-1.81,3.45-2.3,4.62.49.91,8.36-11.13,1.42-1.21,2.83-2.42,4.25-3.64-63.4-2.91-127.45-4.37-190-16.04-27.07-5.05-54.57-11.99-79.04-24.98-19.07-10.12-36.61-24.86-44.22-45.65-10.49-28.67.2-60.03,13.52-85.83,3.37-6.53-5.4,3.23-5.96,3.91-5.31,6.49-10.47,13.49-14.33,20.96-13.08,25.33-24.27,55.42-17.06,84.21,5.8,23.16,23.62,39.92,43.91,51.17,25.82,14.32,55.33,21.56,84.18,26.79,33.98,6.15,68.49,9.19,102.93,11.37,17.25,1.09,34.51,1.93,51.77,2.71,8.15.37,16.3.72,24.44,1.09,4.64.21,7.95,1.31,11.38-2.2,6.98-7.14,12.84-15.71,18.23-24.07,7.45-11.56,17.1-25.3,9.03-38.93-5.2-8.77-15.42-13.6-24.62-16.96-29.43-10.76-62.29-12.64-93.17-16.14-33.33-3.78-67.81-6.88-99.72-17.86-3.24-1.11-6.44-2.33-9.59-3.67-1.43-.61-3.54-1.17-4.72-2.15-.18-.15-1.6-.85-1.29-.75.08-.28.17-.56.27-.84-.32.74-.37.86-.14.37-.65-.09-11.31,15.79-13.03,18.27-.85,1.24,1.44-1.39,1.96-1.86,1.59-1.42,3.85-3.12,5.89-4.56,10.97-7.74,23.35-13.58,35.88-18.32,12.14-4.6,25-8.41,38-9.4,6.74-.51,18.14-.92,21.66,6.46,1.7,3.56.48,7.54-.89,10.99-.94,2.36,2.79-1.13,2.25-.68,2.66-2.24,5.11-5.78,7.19-8.49,4.53-5.91,9.54-12.26,12.32-19.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.2,
            }}
            className="cls-17"
            d="m1008.84,1578.31c-3.69-22.19-23.4-36.13-40.41-48.36-18.38-13.22-40.38-30.76-38.36-56.09.15-1.9-1.73.24-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-2.9,3.78-5.67,7.67-8.22,11.7-1.31,2.07-3.9,5.1-4.1,7.56-1.42,17.79,7.63,31.35,19.61,42.62-3.25,4.25-6.3,8.77-8.27,13.42-7.44,17.56-7.06,37.68,3.5,54,10.76,16.63,31.17,25.84,50.77,23.84,4.99-.51,8.24-1.16,11.63-4.94,6.79-7.56,12.89-16.31,17.9-25.14,4.91-8.66,7.03-17.87,5.39-27.77Zm-59.55,9.77c-8.54-9.74-13.24-22.98-13.11-36.05,4.7,3.77,9.57,7.3,14.25,10.67,10.97,7.91,22.06,16.32,29.53,27.8,3.12,4.79,5.47,10.05,6.7,15.62-14.15-.93-27.85-7.17-37.38-18.04Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.3,
            }}
            className="cls-38"
            d="m911.02,1495.69c-15.04,19.03-29.52,39.83-29.62,65-.09,21.09,9.13,39.39,24.74,53.33,18.01,16.09,40.4,26.67,60.19,40.33,18.84,13,36.94,28.54,47.84,49.03,10.64,20.01,15.14,45.34,4.58,66.31-3.3,6.56,5.38-3.21,5.96-3.91,5.29-6.46,10.56-13.47,14.33-20.96,18.74-37.23-.64-78.08-29.37-103.78-16.92-15.14-36.63-26.53-55.82-38.46-17.86-11.11-36.33-24.01-45.1-43.89-4.12-9.34-6.01-19.75-5.49-29.94.27-5.26,1.12-10.48,2.55-15.55,2.24-7.96,10.06-17.18-3.15-.46,5.05-6.39,11.28-13.33,14.33-20.96.61-1.53,1.33-2.08-.06-2.35-1.22-.24-5.52,5.79-5.89,6.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.3,
            }}
            className="cls-80"
            d="m1018.58,1515.21c7.71,7.04,15.41,14.08,23.12,21.12,1,.92,24.79-27.29,21.73-30.07-7.71-7.04-15.41-14.08-23.12-21.12-1-.92-24.79,27.29-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.3,
            }}
            className="cls-52"
            d="m976.57,1519.82c7.71,7.04,15.41,14.08,23.12,21.12,1,.92,24.79-27.29,21.73-30.07-7.71-7.04-15.41-14.08-23.12-21.12-1-.92-24.79,27.29-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.3,
            }}
            className="cls-86"
            d="m1145.04,1503.22c7.71,7.04,15.41,14.08,23.12,21.12,1,.92,24.79-27.29,21.73-30.07-7.71-7.04-15.41-14.08-23.12-21.12-1-.92-24.79,27.29-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.3,
            }}
            className="cls-73"
            d="m1186.33,1496.17c7.71,7.04,15.41,14.08,23.12,21.12,1,.92,24.79-27.29,21.73-30.07-7.71-7.04-15.41-14.08-23.12-21.12-1-.92-24.79,27.29-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.4,
            }}
            className="cls-70"
            d="m1236.91,1701.85c7.71,7.04,15.41,14.08,23.12,21.12,1,.92,24.79-27.29,21.73-30.07-7.71-7.04-15.41-14.08-23.12-21.12-1-.92-24.79,27.29-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.4,
            }}
            className="cls-71"
            d="m378.65,1055.87c-6.7,10.45-13.83,22.36-13.16,35.25.45,8.69,4.7,16.21,10.01,22.88,12.04,15.1,28.24,27.47,32.74,47.24,3.46,15.18-1.07,30.78-7.63,44.47,6.76-8.29,13.52-16.58,20.28-24.87,9.2-21.46-11.58-37.68-30.08-43.86-13.28-4.44-27.66-3.96-41.43-5.84-12.26-1.68-24.48-4.08-36.29-7.84-29.5-9.38-57.51-30.11-53.28-64.37.96-7.78,3.22-15.48,6.38-22.65,1.95-4.43,3.76-7.6,5.49-10.73.3-.53,1.46-2.36-.1.13.5-.8,3.61-5.39.88-1.43.47-.68.94-1.37,1.4-2.05-3.21,4.73.16-.15.85-1.08,1-1.35,11.09-14.88,9.36-16.12-1.68-1.21-12.04,13.5-12.37,13.95-18.84,25.46-44,62.52-30.56,95.84,5.94,14.73,18.9,24.96,32.84,31.73,23.04,11.19,49.45,15,74.73,16.86,14.24,1.05,28.12,4.8,39.53,13.76,7.98,6.27,16.99,17.74,12.35,28.55-2.85,6.65,5.25-3.04,5.96-3.91,5.24-6.4,10.73-13.45,14.33-20.96,10.85-22.65,15.26-47.09.36-68.9-9.8-14.34-26.4-25.25-32.3-42.04-1.59-4.51-2.1-9.22-1.41-13.95.41-2.84,1.16-5.66,2.2-8.33.43-1.11.93-2.19,1.46-3.26,1-2.01.52-1.05.29-.6,1.42-2.74-1.19,1.79.72-1.2.66-1.03,7.33-11.51,1.84-6.88-6.13,5.17-11.13,13.51-15.41,20.18h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.4,
            }}
            className="cls-44"
            d="m320.14,1212.61c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.4,
            }}
            className="cls-78"
            d="m292.66,1080.6c7.9,4.94,15.16,10.62,21.85,17.1,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.31,9.36-16.12-6.69-6.48-13.95-12.17-21.85-17.1-2.97-1.86-23.44,29.01-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.4,
            }}
            className="cls-51"
            d="m329.6,887.48c-9.3,16.09-13.13,33.58.95,48.11,13.71,14.14,34.48,21.09,52.8,26.82,19.76,6.18,40,10.52,59.94,16.04,24.05,6.66,46.04,19.4,56.15,43.32,5.31,12.55,6.61,26.4,4.62,39.83-1.04,7.02-2.91,13.95-5.53,20.55-1.16,2.93-2.49,5.83-3.99,8.6.11-.21-2.65,3.9-1.39,2.4.54-.64,4.13-5.62,1.44-2.16,3.15-3.06,6.29-6.11,9.44-9.17,2.28-23.99-16.58-37.09-36.97-44.33-23.59-8.37-48.73-10.78-73.2-15.28-56.67-10.43-134.11-33.07-137.92-102.16-.81-14.66,1.97-29.45,6.63-43.31,2.38-7.08,5.34-13.93,8.76-20.57.61-1.19,1.24-2.36,1.89-3.53.29-.52,2.78-4.76,1.97-3.43.4-.66.82-1.31,1.24-1.96,1.29-2.04-1.05,3.24.53-.82.11-.29,1.7-2.47.34-.52-1.54,2.2,1.27-1.73,1.28-1.75.99-1.36,11.09-14.87,9.36-16.12s-12.04,13.5-12.37,13.95c-31.98,43.68-63.17,109.8-21.57,158.04,26.29,30.48,67.19,40.15,104.49,49.26,23.74,5.8,48.25,7.74,71.95,13.81,23.18,5.93,54.61,17.9,51.83,47.14-.18,1.92,1.77-.27,2.25-.68,2.77-2.33,5-5.67,7.19-8.49,18.8-24.17,36.16-52.27,34.95-84-.98-25.66-15.3-47.83-37.92-59.84-19.54-10.37-43.05-13.65-64.25-19.32-20.75-5.56-42.52-11.63-60.79-23.31-7.89-5.04-15.58-11.64-19.13-20.55-3.51-8.78-1.52-19.33,2.51-26.31-.17.3,2.89-4.62,2.12-5.17s-4.48,3.9-4.25,3.64c-5.77,6.44-11.04,13.78-15.37,21.26h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.5,
            }}
            className="cls-65"
            d="m396.16,887.93c7.38,6.23,13.99,13.14,19.89,20.79.85,1.11,11.57-12.83,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.51-.89,2.87-4.2,2.12-5.17-5.9-7.65-12.5-14.56-19.89-20.79-1.4-1.18-24.55,27.7-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.5,
            }}
            className="cls-41"
            d="m260.04,844.87c7.38,6.23,13.99,13.14,19.89,20.79.85,1.11,11.57-12.83,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.51-.89,2.87-4.2,2.12-5.17-5.9-7.65-12.5-14.56-19.89-20.79-1.4-1.18-24.55,27.7-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.5,
            }}
            className="cls-42"
            d="m259.8,798.1c7.38,6.23,13.99,13.14,19.89,20.79.85,1.11,11.57-12.83,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.51-.89,2.87-4.2,2.12-5.17-5.9-7.65-12.5-14.56-19.89-20.79-1.4-1.18-24.55,27.7-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.5,
            }}
            className="cls-89"
            d="m446.27,473.39c-14.24,16.3-29.31,35.61-25.84,58.46,2.95,19.42,16.63,33.93,31.31,45.85,30.56,24.81,64.32,47.81,78.21,86.6,6.94,19.39,8.02,40.52.3,59.83,7.25-9.75,14.5-19.5,21.75-29.25-19.69-26.73-55.57-30.08-82.26-46.72-13.57-8.46-24.02-20.65-28.58-36.14-2.28-7.74-3.02-15.85-1.97-23.85.55-4.2,1.56-8.39,3.02-12.37,1.35-3.66,5.98-10.34-1.66.16-7.66,10.52-2.74,4.16.11,1.67,6.2-5.39,11.04-13.3,15.41-20.18,1.05-1.66,7.08-11.44,1.84-6.88-11.1,9.66-20.05,22.22-27.84,34.62-6.05,9.64-11.13,20-12.65,31.4-2.43,18.24,3.67,37.25,16.49,50.48,26.83,27.68,72.84,25.97,96.34,57.88.77,1.05,10.65-11.64,10.9-11.97,3.99-5.38,8.34-11.01,10.85-17.28,12.51-31.3,2.25-66.17-17.19-92.21-10.91-14.61-24.46-27.04-38.69-38.35-13.97-11.11-29.34-21.01-40.74-34.97-5.95-7.28-10.47-15.53-12.54-24.75-1.08-4.82-1.52-9.78-1.01-14.7.21-2.08.57-4.15,1.11-6.17.23-.86.49-1.71.79-2.54,2.84-7.76,8.08-7.33-10.71,14.17,5.72-6.55,11.04-13.71,15.37-21.26.38-.67,2.94-4.58,2.12-5.17s-4.24,3.63-4.25,3.64h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.5,
            }}
            className="cls-12"
            d="m420.12,508.94c-37.96,55.51-70.38,125.74-44.98,193.29,20.66,54.94,74.43,91.69,87.29,150.31,3.67,16.73,3.99,34.11,1.1,50.98-2.42,14.14-7.9,31.64-15,42.02-1.92,2.81-4.51,6.26-5.8,9.49-.91,2.27-1.23,2.06.06,2.35,1.17.27,5.55-5.84,5.89-6.26,3.02-3.69,5.84-7.54,8.53-11.48,18.17-26.6,30.2-55.97,30.04-88.58-.15-30.08-10.77-57.19-27.19-82.03-16.13-24.39-35.95-46.21-50.83-71.45-15.9-26.97-23.09-57-20.65-88.28,2.99-38.36,18.67-74.76,40.22-106.27,1.92-2.81,4.51-6.26,5.8-9.49.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.89,6.26-3.02,3.69-5.84,7.55-8.53,11.48h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.6,
            }}
            className="cls-27"
            d="m308.55,692.19c8.13,7.37,16.26,14.74,24.39,22.11,1.04.94,24.76-27.33,21.73-30.07-8.13-7.37-16.26-14.74-24.39-22.11-1.04-.94-24.76,27.33-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.6,
            }}
            className="cls-47"
            d="m1462.91,547.21c-4.06,4.75-8.25,9.38-12.79,13.68-.08.07-.78.62-1.74,1.34-2.18,1.66-5.65,4.27-5.71,4.27.25-2.38.32-4.77.12-7.16,0-.13-.02-.26-.03-.4-1.79-18.49-17.21-31.74-32.92-41.43-.81-.5-1.61-.98-2.42-1.46-3.76-2.23-7.5-4.27-11.04-6.13-30.61-16.08-63.9-26.89-96.46-38.25-7.2-2.51-14.43-5-21.65-7.54,0,0,0,0,0,0-3.59-1.26-7.18-2.53-10.76-3.82h0c-3.19-1.14-6.37-2.3-9.55-3.48-7.61-2.82-15.18-5.75-22.67-8.85-10.44-4.32-20.72-8.98-30.73-14.17-.72-.36-1.43-.74-2.14-1.11-16.05-8.46-35.06-19.9-45-36.25-2.93-4.82-5.08-10.06-6.13-15.78-2.19-11.9,1.17-24.02,6.79-34.5,11.49-21.44,29.48-39.84,47.04-56.35.45-.42,5.44-5.86,6.63-5.47,1.35.45.57.9-.23,2.34-3.95,7.12-10.97,13.46-16.85,18.99-1,.93-1.98,1.9-2.98,2.83,0,.01-.02.02-.03.03-.11.12-.25.25-.41.42-.18.22-.34.42-.49.59.1-.13.21-.28.34-.44-.02.01-.03.03-.04.04,0,0,0,0,0,0-.26.33-.53.65-.79.96.12-.13.07-.04-.08.16-.53.74-2.29,3.01-1.81,2.29-1.89,2.68-3.89,5.83-5.14,8.13-2.96,5.49-5.32,11.37-6.51,17.5-2.03,10.38.16,20.96,5.51,30.02,8.7,14.73,23.27,25.45,38.74,34,8.44,4.67,17.17,8.69,25.35,12.37,3.67,1.65,7.36,3.25,11.07,4.81,7.07,2.98,14.21,5.82,21.38,8.54,18.76,7.15,37.8,13.6,56.75,20.21,3.18,1.11,6.35,2.22,9.52,3.33,30.05,10.6,61.07,21.2,88.37,37.93,15.14,9.28,31.62,22.57,34.42,40.66,3.21-6.05,5.9-12.4,7.77-18.97,3.58-12.6,3.46-25.89-1.95-37.96-9.99-22.3-33.42-36.02-54.44-46.28-13.65-6.66-27.74-12.33-41.95-17.68-2.08-.79-4.16-1.56-6.24-2.33h0c-11.43-4.24-22.91-8.34-34.29-12.66-22.12-8.39-47.51-17.14-64.7-34.16-6.08-6.03-10.78-13.57-11.42-22.28-.81-11,4.27-21.28,10.18-30.2,4.62-6.98,10.81-13.27,16.86-18.99.67-.64,10.45-9.24,6.4-3.13-5.37,8.09-10.1,19.38-7.23,30.41,2.62,10.08,10.39,17.83,18.54,23.82,21.05,15.48,47.23,24,71.5,32.93,6,2.21,12.03,4.39,18.07,6.61,1.29.48,2.58.95,3.88,1.43,20.31,7.51,40.5,15.53,59.29,26.24,19.91,11.34,40.66,27.56,44.69,51.57,5.58,33.24-19.81,65.34-39.83,88.75Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.6,
            }}
            className="cls-46"
            d="m1017.24,522.35c-5.11.48-10.27.52-15.46.15,5.19.25,10.36.19,15.46-.15Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.6,
            }}
            className="cls-76"
            d="m1121.72,278.79c-8.23,12.06-16.39,24.2-23.3,37.08-5.55,10.35-12.32,23.11-12.36,35.15-.03,10.82,9.8,15.23,18.92,10.08,6.13-3.47,10.77-9.95,14.97-15.42,5.65-7.36,10.8-15.06,15.47-23.07-.18.3,2.89-4.62,2.12-5.17s-4.48,3.9-4.25,3.64c-5.78,6.45-11,13.79-15.37,21.26-2.51,4.16-1.09,2.38,4.27-5.36,6.23-6.94,7.47-8.9,3.71-5.9-1.67.45-3.11,1.63-4.93,1.97-3.06.57-6.43.14-9-1.73-5.61-4.07-4.3-11.81-2.74-17.55,4.1-15.13,12.44-28.08,21.18-40.88,1.92-2.82,4.51-6.26,5.8-9.49.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.89,6.26-3.02,3.68-5.84,7.54-8.53,11.48h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.6,
            }}
            className="cls-8"
            d="m858.66,334.94c51.45,24.36,98.79-21.72,127.88-59.37,5.53-7.15,10.85-14.5,15.73-22.11.66-1.03,7.32-11.51,1.84-6.88-6.13,5.17-11.12,13.51-15.41,20.18.87-1.35,3.14-4.63.72-1.15-1.2,1.73,3.58-4.93,1.75-2.5-.35.46-.68.93-1.01,1.41-2.57,3.63,3.07-4.1-.13.15-1.99,2.64.47.2.79-.97-.19.7-1.47,1.84-1.93,2.4-.61.74-1.23,1.48-1.83,2.22-1,1.23,1.14-1.34,1.05-1.23-.49.56-.96,1.13-1.45,1.68-1.45,1.65-2.91,3.28-4.4,4.89-1.18,1.27,1.19-1.25-.03.03-.35.36-.69.73-1.05,1.09-.96.98-1.92,1.96-2.89,2.92-15.67,15.5-35.23,29.43-57.39,33.13-13.92,2.33-27.8.06-40.51-5.96-2.36-1.12-11.17,12.29-12.37,13.95-.81,1.12-10.78,15.45-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.7,
            }}
            className="cls-28"
            d="m919.68,457.01c-3.94-3.29-8.37-5.37-13.09-6.51h0c-17.72-4.3-39.45,4.66-54.28,12.4-24.46,12.76-42.94,32.62-59.11,54.6-.73.99-6.34,8.51-8.61,12.95-19.16,3.07-38.62,3.36-57.41.07-15.18-2.66-30.12-8.29-42.7-17.19-6.73-4.77-12.79-10.48-17.85-17.17-1.31-1.74-2.53-3.52-3.66-5.34-6.25-10.08-9.82-21.46-11.2-33.18-.97-8.29-.85-16.74.2-25.03.11-.86.23-1.71.35-2.56,4.17-27.9,18.32-52.74,32.92-76.45.64-1.04,7.33-11.51,1.84-6.88-6.05,5.11-11.3,13.51-15.41,20.19-13.73,22.29-28.58,46.59-36.58,72.26-2.17,6.95-3.83,14-4.83,21.14h0c-1.56,11.09-1.53,22.37.69,33.82.23,1.22.49,2.44.78,3.66,2.02,8.62,5.3,16.31,9.6,23.09,18.98,30.03,57.63,42.54,93.41,41.76,22.17-.48,44.23-4.67,65.26-11.63,10.43-3.45,20.62-7.66,30.45-12.58,2.45-1.23,4.89-2.51,7.3-3.83,1.19-.65,5.9-4.33,7.16-4.09,1.67.32,2.25,3.95,3.13,5.28,1.21,1.84,2.89,3.41,4.73,4.61,8.73,5.66,21.02,2.92,30.06-.6,11.43-4.46,19.38-13.19,26.74-22.7,5.87-7.58,13.29-17.9,17-28.49,3.94-11.22,3.71-22.73-6.91-31.59Zm-12.69,51.34c-13.62,6.38-36.74,9.69-39.35-8.73-.26.08-.53.16-.79.25-23.44,14.12-50.54,24.92-78.39,29.93,2.87-3.35,6.16-7.9,7.33-9.52-1.06,1.59,3.59-3.82,4.43-4.65,3.29-3.26,6.74-6.35,10.38-9.22,7.24-5.71,15.07-10.69,23.32-14.83,16.18-8.14,37.75-16.43,55.68-9.36,8.08,3.18,14.55,9.55,16.65,18.11.65,2.63.89,5.33.75,8.02Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.7,
            }}
            className="cls-87"
            d="m980.96,335.53c-10.84-9.26-25.83-11.57-39.74-13.86h0c-1.96-.32-3.88-.64-5.78-.98-.33-.06-.65-.12-.97-.17h0c-2.54-.45-5.1-.91-7.66-1.38-13-2.37-26.14-5.12-38.19-10.43-1.47-.65-2.91-1.36-4.31-2.13,0,0,0,0,0,0-11.12-6.13-19.35-16.2-13.25-29.72,3-6.63-5.29,3.1-5.96,3.91-5.18,6.32-10.93,13.44-14.33,20.96-5.1,11.3-5.29,22.51,5.11,30.7.87.68,1.76,1.33,2.67,1.95.92.63,1.87,1.21,2.83,1.77,0,0,0,0,.01,0,0,0,.01,0,.02.01,10.02,5.83,22.22,8.53,33.25,10.91,6.05,1.31,12.86,2.27,19.88,3.37,3.71.58,7.49,1.2,11.23,1.93,19.72,3.83,38.74,10.64,44.87,30.68,1.76,5.74,2.17,11.74,1.61,17.67-2.46-6.02-6.52-11.15-12.91-14.24-9.57-4.64-21.04-4.14-31.32-2.93-1.94.23-3.88.5-5.82.8-5.71.88-11.38,2.04-17.03,3.3-4.77,1.06-9.54,2.18-14.3,3.25-10.97,2.47-21.91,3.47-32.92,5.29-46.73,7.74-100-13.19-118.73-59.08-4.78-11.7-6.83-24.45-5.68-37.04.61-6.65,2.03-13.22,4.16-19.55,1.13-3.38,2.5-6.63,4.04-9.84.59-1.22,1.24-2.39,1.87-3.58.14-.26.25-.48.33-.65,0,0,0,0,0,0,.12-.17.26-.37.43-.62,1.92-2.82,4.51-6.25,5.8-9.48.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.9,6.26-3.02,3.68-5.84,7.54-8.52,11.47-15.7,23.04-27.68,48.61-23.32,77.12,3.52,22.94,17.13,43.2,35.5,57.04,20.53,15.47,46.41,22.86,71.99,22.02,25.08-.83,49.09-7.57,73.59-12.23,2.95-.56,5.99-1.12,9.07-1.59,7.32-1.13,14.89-1.8,22.18-.97,2.78.31,5.52.85,8.19,1.66,13.18,3.98,19.12,15.21,20.55,28.26.07.63,4.26-3.73,4.31-3.73,15.03-17.34,31.1-38.37,35.46-61.52,2.87-15.25-.03-31.77-12.28-42.24Zm-16,89.07c.13-.47.35-.97.63-1.48-.28.52-.5,1.02-.63,1.48Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.7,
            }}
            className="cls-68"
            d="m605.88,477.25c-.43.66-.9,1.3-1.39,1.92,1.28-1.68,1.53-2,.76-.98.57-.68,1.2-1.41,1.82-2.08,2.95-3.16,6.22-6.04,9.74-8.57,7.4-5.32,15.77-8.98,24.92-9.8,20.45-1.84,41.61,7.27,60.9,12.85,35.1,10.16,75.82,17.64,108.02-4.76,6.72-9.86,13.44-19.72,20.16-29.58-39.34,33.38-94.45,41.33-143.55,50.48-27.73,5.17-56.17,9.22-84.44,7.24-25.37-1.78-52.62-10.4-66.8-33.12-14.87-23.82-5.96-52.54,3.1-76.72.87-2.33-2.72,1.07-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-4.49,5.85-9.7,12.26-12.32,19.26-7.95,21.23-15.85,45.6-8.03,68.06,8.93,25.62,35.5,38.58,60.73,42.26,27.89,4.08,56.82.6,84.41-4.1,26.73-4.55,53.65-9.8,79.87-16.73,27.47-7.26,54.4-17.65,76.3-36.23,5.75-4.87,10.21-11.55,14.42-17.74,2.03-2.99,4.46-6.13,5.8-9.49.16-.41,1.68-3.57-.06-2.35-37.44,26.05-84.51,10.66-124.08-.94-20.06-5.89-41.24-12.32-61.17-2.53-20.83,10.24-35.47,31.95-48.36,50.38-1.93,2.76-4.53,6.29-5.8,9.49-.91,2.27-1.23,2.06.06,2.35,1.17.27,5.55-5.84,5.89-6.26,3.02-3.69,5.79-7.57,8.53-11.48h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.7,
            }}
            className="cls-34"
            d="m1243.22,291.57c-12.78,18.7-23.73,38.91-26.4,61.72-2.03,17.38.45,34.87,4.83,51.71,8.7,33.46,25.08,65.9,25.32,101.09.07,9.88-1.28,19.77-4.04,29.25-1.52,5.2-3.45,10.24-5.83,15.11-1.12,2.29-2.07,3.91-3.26,6.03l.45-.73c-1.06,1.65-1.05,1.66.02.04-1.21,1.76-1.13,1.67.22-.28-1.26,1.74-1.22,1.68.13-.17-2.88,3.79-5.67,7.68-8.22,11.7-.4.63-4.42,6.21-4.1,7.56.36,1.51,1,.38,2.25-.68,2.75-2.32,5.04-5.66,7.19-8.49,15.38-20.26,30.37-42.54,35.17-67.99,3.28-17.39,1.67-35.24-2.29-52.37-7.98-34.53-25.01-67.16-26.69-103.03-.49-10.35.54-20.77,3.14-30.8,1.34-5.18,3.06-10.28,5.24-15.16.9-2,2.07-4.46,2.93-6.06.68-1.27,1.44-2.49,2.15-3.74-.69,1.13-.57.95.37-.54-1.07,1.6-1.04,1.58.08-.08,1.92-2.81,4.51-6.26,5.8-9.49.91-2.27,1.23-2.06-.06-2.35-1.17-.27-5.55,5.84-5.89,6.26-3.02,3.69-5.84,7.55-8.53,11.48h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.7,
            }}
            className="cls-11"
            d="m778.16,346.12c7.14,6.55,13.13,14,17.99,22.38.51.89,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.58-1.01,2.8-4.01,2.12-5.17-4.86-8.38-10.85-15.83-17.99-22.38-1.36-1.25-11.49,12.72-12.37,13.95-1.07,1.5-11.22,14.42-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.8,
            }}
            className="cls-83"
            d="m780.8,297.2c7.14,6.55,13.13,14,17.99,22.38.51.89,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.58-1.01,2.8-4.01,2.12-5.17-4.86-8.38-10.85-15.83-17.99-22.38-1.36-1.25-11.49,12.72-12.37,13.95-1.07,1.5-11.22,14.42-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.8,
            }}
            className="cls-58"
            d="m893.91,271.73c7.14,6.55,13.13,14,17.99,22.38.51.89,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.58-1.01,2.8-4.01,2.12-5.17-4.86-8.38-10.85-15.83-17.99-22.38-1.36-1.25-11.49,12.72-12.37,13.95-1.07,1.5-11.22,14.42-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.8,
            }}
            className="cls-93"
            d="m1019.74,302.69c7.14,6.55,13.13,14,17.99,22.38.51.89,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.58-1.01,2.8-4.01,2.12-5.17-4.86-8.38-10.85-15.83-17.99-22.38-1.36-1.25-11.49,12.72-12.37,13.95-1.07,1.5-11.22,14.42-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.8,
            }}
            className="cls-26"
            d="m1021.99,258.2c7.14,6.55,13.13,14,17.99,22.38.51.89,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.58-1.01,2.8-4.01,2.12-5.17-4.86-8.38-10.85-15.83-17.99-22.38-1.36-1.25-11.49,12.72-12.37,13.95-1.07,1.5-11.22,14.42-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.8,
            }}
            className="cls-84"
            d="m550.77,566.41c7.47,5.41,13.76,11.87,18.96,19.5.7,1.02,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.54-.94,2.84-4.11,2.12-5.17-5.2-7.62-11.49-14.09-18.96-19.5-2.2-1.59-24.02,28.42-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.9,
            }}
            className="cls-22"
            d="m666.02,602.84c7.47,5.41,13.76,11.87,18.96,19.5.7,1.02,11.58-12.84,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.54-.94,2.84-4.11,2.12-5.17-5.2-7.62-11.49-14.09-18.96-19.5-2.2-1.59-24.02,28.42-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.9,
            }}
            className="cls-96"
            d="m559.34,452.76c7.3,5.3,14.08,11.16,20.4,17.6,1.2,1.22,11.52-12.76,12.37-13.95,1.15-1.6,11.24-14.21,9.36-16.12-6.32-6.44-13.1-12.29-20.4-17.6-2.17-1.58-24.03,28.4-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.9,
            }}
            className="cls-101"
            d="m559.13,403.41c7.74,6.56,14.74,13.79,21.06,21.74.89,1.12,11.57-12.82,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.5-.88,2.88-4.22,2.12-5.17-6.32-7.95-13.32-15.17-21.06-21.74-1.37-1.17-24.56,27.67-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.9,
            }}
            className="cls-15"
            d="m347.66,692.38c-10.6,12.21-20.59,25.37-28.43,39.54-3.87,6.99-7.3,14.53-7.99,22.58-1.05,12.22,4.21,22.9,12.01,31.96,16.6,19.3,43.42,32.12,53.41,56.59,2.69,6.58,3.56,13.59,2.43,20.61-.61,3.81-1.69,7.59-3.19,11.14-.94,2.23-1.81,3.71-2.24,4.59-1.71,3.55,1.64-2.39-.61,1.02,1.46-2.21,3.36-4.76.66-1.12-1,1.35-11.09,14.88-9.36,16.12,1.68,1.21,12.04-13.5,12.37-13.95,11.33-15.29,25.16-34.18,24.64-54.27-.32-12.48-6.73-23.14-14.94-32.15-16.2-17.75-42.24-30.81-51.2-54.2-2.33-6.07-2.9-12.47-1.64-18.85.72-3.67,1.95-7.15,3.57-10.52,1.49-3.09-.82,2.06.63-1.2,1.19-2.68-1.13,1.7-1.35,2.03-4.55,6.65,2.47-3.32-2.1,2.9-1.39,1.74-1.46,1.85-.23.32-.94,1.09-.83.97.32-.36,5.71-6.57,11.04-13.7,15.37-21.26.38-.67,2.94-4.58,2.12-5.17s-4.24,3.63-4.25,3.64h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 1.9,
            }}
            className="cls-57"
            d="m506,676.85c-10.6,12.21-20.59,25.37-28.43,39.54-3.87,6.99-7.3,14.53-7.99,22.58-1.05,12.22,4.21,22.9,12.01,31.96,16.6,19.3,43.42,32.12,53.41,56.59,2.69,6.58,3.56,13.59,2.43,20.61-.61,3.81-1.69,7.59-3.19,11.14-.94,2.23-1.81,3.71-2.24,4.59-1.71,3.55,1.64-2.39-.61,1.02,1.46-2.21,3.36-4.76.66-1.12-1,1.35-11.09,14.88-9.36,16.12,1.68,1.21,12.04-13.5,12.37-13.95,11.33-15.29,25.16-34.18,24.64-54.27-.32-12.48-6.73-23.14-14.94-32.15-16.2-17.75-42.24-30.81-51.2-54.2-2.33-6.07-2.9-12.47-1.64-18.85.72-3.67,1.95-7.15,3.57-10.52,1.49-3.09-.82,2.06.63-1.2,1.19-2.68-1.13,1.7-1.35,2.03-4.55,6.65,2.47-3.32-2.1,2.9-1.39,1.74-1.46,1.85-.23.32-.94,1.09-.83.97.32-.36,5.71-6.57,11.04-13.7,15.37-21.26.38-.67,2.94-4.58,2.12-5.17s-4.24,3.63-4.25,3.64h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.0,
            }}
            className="cls-94"
            d="m509.82,1210.33c7.62,5.46,14.76,11.43,21.47,17.97,1.27,1.23,11.51-12.74,12.37-13.95,1.11-1.55,11.23-14.3,9.36-16.12-6.71-6.54-13.85-12.52-21.47-17.97-2.25-1.61-23.98,28.47-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.0,
            }}
            className="cls-100"
            d="m521.67,1573.24c8.69,4.92,16.17,11.16,22.58,18.81.97,1.15,11.56-12.81,12.37-13.95,1.27-1.77,11.25-13.88,9.36-16.12-6.41-7.65-13.9-13.89-22.58-18.81-3.48-1.97-23.04,29.33-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.0,
            }}
            className="cls-99"
            d="m831.1,1497.01c7.13,7.74,14.26,15.48,21.39,23.23,1.1,1.2,11.54-12.79,12.37-13.95,1.19-1.67,11.25-14.08,9.36-16.12-7.13-7.74-14.26-15.48-21.39-23.23-1.1-1.2-11.54,12.79-12.37,13.95-1.19,1.67-11.25,14.08-9.36,16.12h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.0,
            }}
            className="cls-21"
            d="m1390.52,539.88c-6.99,14.71-2.32,27.03,10.07,36.8,15.6,12.3,35.12,19.68,53.12,27.63,36.64,16.17,88.76,36.35,98.46,80.42,2.9,13.18,1.04,26.77-3.12,39.48-2.42,7.38-6.43,15.97-9.54,21.48-.53.93-1.06,1.86-1.6,2.78-.12.2-2.34,3.83-.77,1.31-.72,1.16-1.46,2.3-2.19,3.45-1.96,3.09,1.67-2.35-.67.99-.09.13-2.82,4.02-1.07,1.56,1.61-2.26-1.77,2.42-2.08,2.84,3.44-4.69-4.45,5.65-2,2.58-2.79,5.68-5.58,11.37-8.37,17.05,7.6-9.62,15.48-19.76,20.6-30.99,1.9-4.17,3.22-8.44,3.24-13.06.04-8.61-4.39-15.94-10.26-21.94-17.37-17.77-43.26-27.67-65.64-37.26-29.83-12.78-60.21-24.38-89.24-38.95-25.27-12.69-52.07-27.98-68.94-51.38-7.99-11.07-13.16-24.19-13.37-37.95-.12-7.54,1.22-15.09,3.41-22.29,1.22-4.01,2.72-7.9,4.49-11.7.44-.94.89-1.87,1.35-2.79.17-.34,2.11-4.02,1.09-2.15.53-.97,1.09-1.92,1.63-2.88.38-.65.76-1.29,1.15-1.94-.97,1.59-1.02,1.68-.15.28.65-1.04,7.33-11.51,1.84-6.88-6.09,5.14-11.22,13.51-15.41,20.18-15.84,25.21-28.62,55.13-15.75,84.38,10.88,24.74,34.87,41.67,57.52,54.76,27.71,16.03,57.56,28.05,87.06,40.31,25.32,10.52,51.98,20.49,74.71,36.09,8.25,5.66,16.91,12.7,20.83,22.2,1.6,3.87,2.26,7.99,1.64,12.15-.15.99-.36,1.97-.62,2.94-.17.64-1.41,4.02-.66,2.24-.21.51-.52,1.01-.7,1.53-.93,2.74,1-1.6.02.02,1.58-2.62,4.96-7.48,8.51-11.98-5.04,6.39-11.28,13.33-14.33,20.96-.61,1.53-1.33,2.08.06,2.35,1.22.24,5.52-5.79,5.89-6.26,15.88-19.98,31.25-41.01,42.48-64.02,6.19-12.68,11.14-26.37,12.02-40.56,1.39-22.44-8.43-41.93-24.79-56.83-34.23-31.18-81.31-40.5-119.85-64.48-7.15-4.45-14.59-9.8-18.89-17.24-1.78-3.08-3-6.59-3.1-10.18-.05-1.75.2-3.52.59-5.22.23-1,.53-1.96.85-2.93.11-.34.24-.67.37-1-.72,1.92.2-.41.38-.77,3.14-6.61-5.34,3.15-5.96,3.91-5.24,6.39-10.76,13.45-14.33,20.96h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.0,
            }}
            className="cls-63"
            d="m1541.16,507.75c34.88.44,36.49,44.01,36.25,69.78-.18,19.89-2.05,39.71-3.53,59.53-1.28,17.07-2.86,34.57-.96,51.65,1.24,11.14,4.75,25.37,18.16,26.39,7.34.56,15.5-2.04,22.53-3.87,3.49-.91,7.39-1.68,10.61-3.33.35-.18,3.65-1.65,1.5-1.81-11.18-.85-14.75-12.81-16.19-22.22-2.49-16.28-1.06-33.22.1-49.56,1.4-19.84,3.35-39.67,3.84-59.56.42-16.9.37-34.87-5.19-51.04-5.14-14.94-16.28-24.76-32.48-24.97-7.54-.1-15.28,1.98-22.53,3.87-3.49.91-7.39,1.68-10.61,3.33-.28.14-3.69,1.79-1.5,1.81h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.1,
            }}
            className="cls-64"
            d="m485.43,881.29c8.13,6.02,14.94,13.2,20.52,21.64.66,1,11.58-12.85,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.55-.96,2.83-4.09,2.12-5.17-5.58-8.44-12.39-15.62-20.52-21.64-2.08-1.54-24.1,28.32-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.1,
            }}
            className="cls-81"
            d="m489.23,925.01c8.13,6.02,14.94,13.2,20.52,21.64.66,1,11.58-12.85,12.37-13.95,2.54-3.55,5.07-7.15,7.24-10.95.55-.96,2.83-4.09,2.12-5.17-5.58-8.44-12.39-15.62-20.52-21.64-2.08-1.54-24.1,28.32-21.73,30.07h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.1,
            }}
            className="cls-67"
            d="m538.43,741.27c-.49,10.96,6.54,21.78,18.21,22.6,14.37,1.01,23.56-12.72,30.89-22.93.98-1.37,11.1-14.87,9.36-16.12s-12.04,13.49-12.37,13.95c11.14-15.52,6.38-6.27-2.02-5.13-3.6.49-7.31.05-10.62-1.49-7.31-3.41-12.05-11.26-11.69-19.3.08-1.85-1.63.15-2.25.68-2.66,2.24-5.11,5.78-7.19,8.49-2.9,3.78-5.67,7.67-8.22,11.7-1.28,2.02-3.99,5.16-4.1,7.56h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.1,
            }}
            className="cls-95"
            d="m688.83,1562.91c1.17-10.91-5.19-22.14-16.78-23.68-14.28-1.9-24.3,11.25-32.24,20.98-1.06,1.3-11.99,14.16-10.34,15.52,1.6,1.31,12.85-12.73,13.21-13.16-12.08,14.81-6.76,5.86,1.7,5.25,3.62-.26,7.3.4,10.51,2.14,7.09,3.85,11.34,11.98,10.48,19.98-.2,1.84,1.63-.05,2.29-.54,2.8-2.07,5.46-5.45,7.69-8.03,3.13-3.59,6.13-7.31,8.93-11.17,1.4-1.93,4.3-4.91,4.55-7.29h0Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.1,
            }}
            className="cls-92"
            d="m1202.88,491.16c9.5,24.27,15.29,43.76,2.93,72.27-2.2,5.08,2.64-2.15,2.93-2.64,24-30.22,17.9-62.45,6.63-92.62-.45-1.15-13.39,20.67-12.49,22.99h0Z"
          />
          <g>
            <motion.path
              initial={{ fillOpacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ fillOpacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2.2,
              }}
              className="cls-4"
              d="m1204.54,433.82c-.72-.36-1.43-.74-2.14-1.11-16.05-8.46-35.06-19.9-45-36.25-15.28-1.72-29.31,2.53-44.44,4.61-14.62,2.02-30.12,2.44-44.45-1.66-16.56-4.76-27.74-16.22-29.49-33.69-.24-2.2-1.57,1.17-1.71,1.63-1.34,3.2-1.94,7.47-2.55,10.84-1.37,7.3-3,15.25-2.25,22.74,1.31,13.23,7.91,24.6,19.79,30.98.76.4,1.52.79,2.31,1.16.06-.31.13-.62.19-.92-.06.3-.13.61-.18.92-1.47,7.34-2.22,14.9-2.61,22.12-.53,9.44,1.66,18.15,5.81,25.59.28-.1.55-.2.83-.3-.28.1-.55.2-.82.3-7.59,2.8-15.49,4.64-23.04,5.77-.14.02-.28.04-.42.06-33.98,4.97-68.47-7.73-90.74-33.88-.69-.81-1.36-1.62-2.03-2.45-8.69-10.83-14.04-23.69-16.86-37.16-1.99-9.44-2.73-19.19-2.52-28.74,0-.1,0-.21,0-.31.25-10.62,1.5-21.2,3.55-31.66,1.62-8.26,3.73-16.44,6.26-24.52.77-2.46,1.58-4.91,2.42-7.35h0c1.82-5.29,3.81-10.51,5.94-15.68h0c8.23-20,18.54-39.07,29.41-56.62.87-1.44,10-15.64,8.17-16.77-1.76-1.08-11.04,14.34-11.35,14.81-12.16,19.64-24.3,40.32-34.68,61.83h0c-1.77,3.66-3.49,7.34-5.14,11.04-2.22,4.94-4.32,9.93-6.3,14.95-2.14,5.41-4.13,10.87-5.95,16.37-4.05,12.2-7.26,24.61-9.36,37.2-.86,5.13-1.53,10.28-2,15.47-.33,3.61-.54,7.27-.63,10.94-.29,12.21.85,24.65,4.04,36.43h0c3.02,11.14,7.88,21.68,15.12,30.85h0c1.49,2.51,3.12,4.93,4.87,7.26,4.63,6.12,10.16,11.55,16.41,16.12,19.6,14.34,44.64,20.43,68.99,19.9.11,0,.23.01.34,0,5.2-.12,10.36-.55,15.41-1.26.04,0,.09,0,.13-.01.39-.06.8-.11,1.19-.17,17.87-2.68,36.95-9.52,50.06-22.23,8.53,4.26,18.37,6.29,28.54,5.36,18.54-1.66,31.34-13.21,46.95-21.75,13.43-7.36,37.1-11.04,43.16,7.89.78,2.39,3.38-8.01,3.39-8.08,3.29-15.74,7.21-34.23,3.4-50.54Zm-202.75,88.67c5.19.25,10.36.19,15.46-.15-5.11.48-10.27.52-15.46.15Zm82.92-57.99h0s0,0,0,0c-6.03-2.94-11.54-7.18-16.11-12.8-2.26-2.77-4.24-5.75-5.84-8.93,7.42-4.42,17.28-2.67,24.18,3.88,2.6,2.47,4.08,5.67,4.94,8.97-2.04,3.25-4.46,6.2-7.16,8.87Zm89.06-22.01c-13.01,2.99-23.39,12.17-34.66,18.69-13.16,7.64-28.89,10.38-43.15,7.22t0,0c2.08-9.07,3.14-18.5,3.72-27.5.05-.81.09-1.64.12-2.45.01-.34.03-.68.04-1.02,0,.34-.03.69-.04,1.03,10.82-1.26,21.27-3.98,32.15-5.32,14.87-1.84,30.7.25,43.91,7.56.65.35,1.29.73,1.92,1.13-1.34.13-2.68.35-4.01.66Z"
            />
            <motion.path
              initial={{ fillOpacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ fillOpacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2.2,
              }}
              className="cls-32"
              d="m1017.24,522.35c-5.11.48-10.27.52-15.46.15,5.19.25,10.36.19,15.46-.15Z"
            />
            <rect
              className="cls-66"
              x="1084.7"
              y="464.5"
              width="0"
              height="0"
              transform="translate(-10.75 903.05) rotate(-45)"
            />
            <motion.path
              initial={{ fillOpacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ fillOpacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2.2,
              }}
              className="cls-23"
              d="m1204.54,433.82c-.72-.36-1.43-.74-2.14-1.11-16.05-8.46-35.06-19.9-45-36.25,1.03.11,2.07.25,3.12.43,15.05,2.5,30.05,9.87,38.36,23.1,2.72,4.33,4.54,8.99,5.67,13.83Z"
            />
          </g>
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.2,
            }}
            className="cls-9"
            d="m860.55,1573.86c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.2,
            }}
            className="cls-53"
            d="m1054.82,1575.25c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.3,
            }}
            className="cls-59"
            d="m1481.88,1341.32c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.3,
            }}
            className="cls-18"
            d="m577.07,1432.75c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.3,
            }}
            className="cls-30"
            d="m1388.9,598.51c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.3,
            }}
            className="cls-82"
            d="m1538.41,487.24c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.3,
            }}
            className="cls-10"
            d="m1648.27,653.15c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.4,
            }}
            className="cls-90"
            d="m489.91,499.43c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
          <motion.path
            initial={{ fillOpacity: 0, strokeOpacity: 1 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              strokeOpacity: isInView ? strokeOpacity : 1,
              strokeDashoffset: isInView ? 0 : "100%",
            }}
            transition={{
              duration: 2,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 2.4,
            }}
            className="cls-62"
            d="m344.8,831.82c.37,3.56-3.53,16.12-12.17,17.23-16.31,2.11-9.01-30.89-1.85-39.32-1.62,5.86-3.85,12.35-2.93,18.47,1.31,8.7,12.31,10.58,16.94,3.62Z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

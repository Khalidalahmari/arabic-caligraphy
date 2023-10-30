import type { Metadata } from "next";
import { Aref_Ruqaa as Aref, Cairo } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/patterns.css";
import "@/styles/logo.css";
import {
  ruwuduBold,
  ruwuduMedium,
  ruwuduRegular,
  ruwuduSemiBold,
} from "@/utils/fonts/fonts";
import { Suspense } from "react";

const cairo = Cairo({ subsets: ["latin"], display: "swap" });
const aref = Aref({
  variable: "--aref",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "block",
});

export const metadata: Metadata = {
  title: "أمشاق",
  description: "أمشاق",
  icons: "./files/Logo_dark.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-pt-28 overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-track-almondFrost-50 scrollbar-thumb-almondFrost-800 selection:bg-slate-500"
    >
      <body
        className={`bg-peacoat-800 ${ruwuduRegular.variable} ${ruwuduMedium.variable} ${ruwuduSemiBold.variable} ${ruwuduBold.variable} ${aref.variable} ${cairo.className}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}

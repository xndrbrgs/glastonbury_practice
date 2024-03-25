import localFont from "next/font/local";
import "./globals.css";

const suiss = localFont({
  src: "../public/fonts/SuisseIntl-Regular.otf",
  display: "swap",
  variable: '--font-suiss'
});

const editorial = localFont({
  src: "../public/fonts/PPEditorialNew-Regular.otf",
  display: "swap",
  variable: '--font-editorial'
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Regular.otf",
  display: "swap",
  variable: '--font-satoshi'
});

export const metadata = {
  title: "Maxjoy Template",
  description: "Maxjoy Studio's Creative Website Tailwind + NextJS Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${suiss.variable} ${satoshi.variable} ${editorial.variable}`}>{children}</body>
    </html>
  );
}

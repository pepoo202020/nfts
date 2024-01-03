import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "NFT Marketplace",
  description:
    "NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${spaceMono.className} bg text min-h-screen w-screen  flex flex-col`}
      >
        <header className={`${workSans.className} sticky bg top-0 z-20`}>
          <Header />
        </header>
        <main className={`${workSans.className} h-full flex-grow`}>
          {children}
        </main>
        <footer className={`${workSans.className} bgSecondary py-10`}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

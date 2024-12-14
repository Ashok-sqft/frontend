import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import LocationFetcher from "@/StaticComponent/LocationFetcher";

export const metadata = {
  title: "dSign",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" w-screen h-screen  ">
        <Navbar />
        <LocationFetcher />
        <main className=" w-full max-w-7xl mx-auto ">
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}

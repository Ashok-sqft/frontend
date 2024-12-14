import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import LocationFetcher from "@/StaticComponent/LocationFetcher";
import ProviderComponent from "./Provider";
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: "8SQFT - Trusted Renting Services Broker",
  description:
    "Looking for a reliable renting services broker? 8SQFT connects you with the best rental properties for homes, offices, and commercial spaces. Hassle-free and personalized solutions for all your renting needs.",
  keywords:
    "renting services, rental broker, rental properties, home rentals, office rentals, commercial rentals, real estate broker",
  author: "8SQFT",
  ogTitle: "8SQFT - Trusted Renting Services Broker",
  ogDescription:
    "Find your perfect rental property with 8SQFT. We offer expert broker services for homes, offices, and commercial spaces. Simplify your renting journey with us.",
  ogImage: "https://www.8sqft.com/og-image.jpg",
  ogUrl: "https://www.8sqft.com",
  twitterTitle: "8SQFT - Trusted Renting Services Broker",
  twitterDescription:
    "Explore a wide range of rental properties with 8SQFT. We provide personalized renting solutions for homes, offices, and commercial spaces.",
  twitterImage: "https://www.8sqft.com/twitter-image.jpg",
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/8-sqft-india-484523341/",
    instagram: "https://www.instagram.com/8sqftindia/",
    facebook: "https://www.facebook.com/8sqftindia/",
    youtube: "https://www.youtube.com/@8sqftIndia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" w-screen h-screen  ">
        <ProviderComponent>
        <div className="w-full h-[100px] bg-white fixed top-0 z-50"><Navbar /></div>
        <Toaster />
        <LocationFetcher />
        <main className="w-full max-w-7xl mx-auto pt-28 overflow-hidden">{children}</main>
        {/* <Footer /> */}
        </ProviderComponent>
       
      </body>
    </html>
  );
}

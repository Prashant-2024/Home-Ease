import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "HomeEase",
  description:
    "HomeEase is your go-to platform for all home service needs. With a user-friendly interface and seamless functionality, HomeEase connects you with top-rated professionals for various services, including cleaning, plumbing, electrical work, and more. Our app ensures reliable and efficient service, making home maintenance hassle-free. Experience the convenience and peace of mind with HomeEase, your trusted partner for a well-maintained home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster />
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

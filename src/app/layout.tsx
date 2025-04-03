"use client"
import { store } from "@/store/store";
import "./globals.css";
import { Provider } from "react-redux";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export const metadata = {
  title: "TecnoFácil",
  description: "Tu blog de tecnología y afiliados.",
  other: {
    "google-site-verification": "XxFbi9NVvJKit-RXiTz3TkbONib3welm7lTaMbvtf9c",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer className="flex-shrink-0" />
        </Provider>
      </body>
    </html>
  );
}

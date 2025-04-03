"use client"
import { store } from "@/store/store";
import "./globals.css";
import { Provider } from "react-redux";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <title>TecnoFácil</title>
        <meta name="description" content="Tu blog de tecnología y afiliados." />
        <meta name="google-site-verification" content="XxFbi9NVvJKit-RXiTz3TkbONib3welm7lTaMbvtf9c" />
      </Head>
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

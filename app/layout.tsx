import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "@/context/search";



const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentCar",
  description: "Аренда автомобилей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
          <body
            suppressHydrationWarning
            className={`${archivoBlack.variable} antialiased`}
            style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
            >
              <SearchContextProvider>
            <main>{children}</main>
    
    </SearchContextProvider>
          </body>
      </html>
  );
}

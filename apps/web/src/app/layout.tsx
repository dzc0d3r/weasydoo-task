
import "@fakestore/ui/dist/globals.css";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Slide, ToastContainer } from "react-toastify";
import  NavBar  from "@/components/navbar/nav-bar";
import { CartProvider } from "@/providers/cart-provider";
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
  login,
  signup,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  signup: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <CartProvider>
          <ToastContainer
                    autoClose={3000}
                    closeOnClick
                    draggable
                    hideProgressBar={false}
                    newestOnTop
                    pauseOnFocusLoss
                    pauseOnHover
                    position='top-right'
                    toastClassName=' p-3 space-x-2 w-full'
                    transition={Slide}
                />
          <NavBar />
          {children}
          {login}
          {signup}
          </CartProvider>

        </SessionProvider>
        
      </body>
    </html>
  );
}

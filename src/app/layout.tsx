import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import Provider from "@/components/Provider";
import { getServerSession } from "next-auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Release",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Provider>
            <div className="bg-gray-50 dark:bg-gray-900">{children}</div>
            <ToastContainer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}

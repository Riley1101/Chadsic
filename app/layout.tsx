import type { Metadata } from "next";
import GqlProvider from "@/providers/ApolloProvider";
import { AppMenuBar } from "@/components/AppMenuBar";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <GqlProvider>
              <div className="w-full h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
                <nav className="col-start-1 col-end-3 ">
                  <AppMenuBar />
                </nav>
                <div className="w-[240px]">
                  <Sidebar />
                </div>
                <div className="max-w-max p-4 col-start-2 row-start-2 overflow-hidden">
                  {children}
                </div>
                <div className="border-t col-start-1 col-end-3 p-4"></div>
              </div>
            </GqlProvider>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

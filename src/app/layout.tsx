import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationProvider } from "@/hooks/services";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin", "latin-ext", "vietnamese"] });

export const metadata: Metadata = {
  title: "BirotoJob Academy",
  description:
    "Premier technology training academy offering cutting-edge courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={quicksand.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavigationProvider>
            <div className='flex min-h-screen flex-col'>
              <Header />
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

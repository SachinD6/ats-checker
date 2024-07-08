import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/ui/floating-nav";

import "./globals.css";
// import { ModeToggle } from "@/components/ui/theme-toggle";
import { Toaster } from "@/components/ui/toaster"
import { sfPro, inter } from "@/app/fonts/index";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "ClearScan - Resume Optimization Tool",
  description: "Optimize your resume for ATS systems and get instant feedback on your resume with AI-powered analysis that checks for formatting, keyword optimization, and overall readability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(sfPro.className, inter.className, "antialiased  overflow-x-hidden overflow-y-auto   h-full w-full ")}
      >
                <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 " />

        {/* <div className="absolute bottom-0 left-[-10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
              <NavBar />
          {children}
        <Toaster />
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}

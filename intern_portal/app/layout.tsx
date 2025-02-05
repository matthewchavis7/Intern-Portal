import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Grid, Theme } from "@radix-ui/themes";

import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Intern Portal",
  description:
    "The goal of this portal is to streamline the onboarding process and enhance the experience for interns by providing centralized access to given resources and information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Theme appearance="light" className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}

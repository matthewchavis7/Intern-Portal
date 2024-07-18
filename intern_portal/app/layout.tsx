import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Grid, Theme } from "@radix-ui/themes";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Theme appearance="light">
          <Grid
            width="100vw"
            height="100vh"
            rows="auto 1fr"
            columns="1"
            overflow="hidden"
          >
            <Navigation />
            {children}
          </Grid>
        </Theme>
      </body>
    </html>
  );
}

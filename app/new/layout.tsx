import Header from "@/components/header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accueil | FGM crowndfunding",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
            <div className="py-10">
              {children}
            </div>
      </body>
    </html>
  );
}

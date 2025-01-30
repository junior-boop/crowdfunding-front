import Header from "@/components/header";
import MenuLaterale from "@/components/menuLateral";
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
        <div className="bg-slate-100 h-[300px] w-full">
        
            </div>
            <section className="py-24">
            <div className="flex max-w-[1280px] gap-14 mx-auto flex-shrink">
              <div className="relative">
                <MenuLaterale />
              </div>
              {children}
            </div>
            </section>
      </body>
    </html>
  );
}

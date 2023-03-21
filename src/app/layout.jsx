import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone Next js 13",
  description: "Google clone created by Next js 13",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}

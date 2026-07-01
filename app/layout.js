import "./globals.css";

export const metadata = {
  title: "Planto | Indoor Plants",
  description:
    "Discover premium indoor plants for homes and offices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
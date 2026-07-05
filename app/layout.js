import "./globals.css";

export const metadata = {
  title: {
    default: "Planto",
    template: "%s | Planto",
  },
  description:
    "Premium indoor and outdoor plants delivered to your doorstep.",
  keywords: [
    "plants",
    "indoor plants",
    "garden",
    "plant shop",
    "planto",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
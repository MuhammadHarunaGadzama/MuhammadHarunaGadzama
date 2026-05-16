import "./globals.css";

export const metadata = {
  title: "CBT System",
  description: "Online CBT Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

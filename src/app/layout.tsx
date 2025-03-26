import "./globals.css";
import "../../public/fonts/fonts.css";

export const metadata = {
  title: "Taral's Portfolio",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/T.png" sizes="any" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

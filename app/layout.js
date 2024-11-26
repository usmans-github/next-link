import "./globals.css";



export const metadata = {
  title: "Nexttlinks - Your trusted URL shortener",
  description: "Nextlinks helps you shorten your Urls easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-purple-50`}
      > 

        {children}
      </body>
    </html>
  );
}
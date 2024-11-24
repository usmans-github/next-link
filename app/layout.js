
import "./globals.css";



export const metadata = {
  title: "NextLink",
  description: "URL shortner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white"
      >
        {children}
      </body>
    </html>
  );
}

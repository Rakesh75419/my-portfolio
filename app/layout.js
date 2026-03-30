import "./globals.css";

export const metadata = {
  title: "Rakesh Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
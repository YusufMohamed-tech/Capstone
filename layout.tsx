import './globals.css';

export const metadata = {
  title: 'Leaf Health Detector',
  description: 'Capstone Project – Sustainable Environmental Technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}

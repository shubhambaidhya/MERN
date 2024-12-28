import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nepal Mart',
  description: 'Nepal Market is a marketplace for Nepali products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}

import './globals.css'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solun • Privacy at its highest',
  description: 'Solun is a service that allows you to share files, text and sending emails with end-to-end encryption, without storing any user related data on our servers. Become anonymous and protect your privacy today.',
  tags: ['Solun', 'Privacy', 'Anonymous', 'Encryption', 'Files', 'Text', 'Emails', 'Share Files', 'Upload Files', 'Send Encrypted Texts'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

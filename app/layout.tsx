import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from '@/components/providers/toaster-provider'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <ToastProvider />
        </body>
      </html>
    </ClerkProvider>
  )
}

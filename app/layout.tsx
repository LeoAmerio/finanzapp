import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AuthProvider } from "./providers"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finanzas Personales",
  description: "Aplicación para el seguimiento de gastos e inversiones",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <body className={inter.className}>{children}</body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  )
}


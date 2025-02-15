import Link from "next/link"
import { CreditCard, TrendingUp, Globe, Activity } from "lucide-react"
import { LoginButton } from "@/components/LoginButton"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Finanzas Personales</h1>
      <div className="flex space-x-4">
        <Link
          href="/gastos"
          className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <CreditCard className="mr-2" />
          Gastos
        </Link>
        <Link
          href="/inversiones"
          className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          <TrendingUp className="mr-2" />
          Inversiones
        </Link>
        <Link
          href="/international"
          className="flex items-center justify-center bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          <Globe className="mr-2" />
          Internacional
        </Link>
        <Link
          href="/merval"
          className="flex items-center justify-center bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          <Activity className="mr-2" />
          Mervalneta
        </Link>
      </div>
      <LoginButton />
    </div>
  )
}


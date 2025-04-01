import Link from "next/link"
import { CreditCard, TrendingUp, Globe, BarChart4, PieChart } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoginButtons } from "@/components/LoginButtons"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header con navegación y botones de login */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finanzas Personales</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LoginButtons />
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Gestiona tus finanzas de manera inteligente</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Controla tus gastos, realiza un seguimiento de tus inversiones y mantente informado sobre la economía
            global.
          </p>

          {/* Tarjetas de navegación */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link href="/gastos" className="group">
              <div className="bg-card hover:bg-accent transition-colors border border-border rounded-xl p-6 h-full flex flex-col items-center text-center group-hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gastos</h3>
                <p className="text-muted-foreground">
                  Registra y analiza tus gastos mensuales para mantener un control efectivo de tu presupuesto.
                </p>
              </div>
            </Link>

            <Link href="/inversiones" className="group">
              <div className="bg-card hover:bg-accent transition-colors border border-border rounded-xl p-6 h-full flex flex-col items-center text-center group-hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inversiones</h3>
                <p className="text-muted-foreground">
                  Realiza un seguimiento de tus inversiones y visualiza su rendimiento a lo largo del tiempo.
                </p>
              </div>
            </Link>

            <Link href="/international" className="group">
              <div className="bg-card hover:bg-accent transition-colors border border-border rounded-xl p-6 h-full flex flex-col items-center text-center group-hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Internacional</h3>
                <p className="text-muted-foreground">
                  Mantente informado sobre la economía global, indicadores económicos y noticias financieras.
                </p>
              </div>
            </Link>

            <Link href="/merval" className="group">
              <div className="bg-card hover:bg-accent transition-colors border border-border rounded-xl p-6 h-full flex flex-col items-center text-center group-hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Merval</h3>
                <p className="text-muted-foreground">
                  Surfeemos juntos la mervalneta.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Características principales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <BarChart4 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Análisis detallado</h3>
                <p className="text-muted-foreground">
                  Visualiza tus finanzas con gráficos interactivos que te ayudan a entender tus patrones de gasto e
                  inversión.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Distribución de gastos</h3>
                <p className="text-muted-foreground">
                  Comprende cómo se distribuyen tus gastos y optimiza tu presupuesto para alcanzar tus metas
                  financieras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2023 Finanzas Personales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

